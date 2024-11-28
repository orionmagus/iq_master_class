import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useHangman, HangmanReturnType } from "../services/useHangman";
import { OnGroupDataMessageArgs, WebPubSubClient } from "@azure/web-pubsub-client";

export type HangmanBodyType = {
  head?: boolean;
  body?: boolean;
  leftArm?: boolean;
  rightArm?: boolean;
  leftLeg?: boolean;
  rightLeg?: boolean;
  face?: boolean;
};
type FnType = (arg?: string) => void;
type OmitKeys = keyof {
  addGuess: FnType;
  nextGame: FnType;
  resetGame: FnType;
};
export type HangmanContextType = Omit<HangmanReturnType, OmitKeys> & {
  send: (type: string, message: string) => Promise<void>;
  connect: (userId: string) => Promise<void>;
  disconnect: () => Promise<void>;
  user: string;
  connected: boolean;
  [key: string]: unknown;
};
export const HangmanContext = createContext<HangmanContextType>({
  score: 0,
  user: "",
  word: [],
  guessed: [],
  phrase: "",
  fail: false,
  succeed: false,
  hangmanProps: {},
  connected: false,
  send: async (type: string, message: string) => {
    console.log(type, message);
  },
  connect: async (userId: string) => {
    console.log(userId);
  },
  disconnect: async () => {},
});
type MessageType = {
  type: string;
  message: string;
  from?: string;
};

export const HangmanProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize the WebPubSub client and connection status using the custom hook UseWebPubSub
  const { addGuess, nextGame, resetGame, ...rest } = useHangman();
  const [user, setUser] = useState("");
  const [history, setHistory] = useState<MessageType[]>([]);
  const [connected, setConnected] = useState<boolean>(false);
  const [client, setClient] = useState<WebPubSubClient | null>(null);
  const actions: Record<string, FnType> = useMemo(
    () => ({
      addGuess,
      nextGame,
      resetGame,
    }),
    [addGuess, nextGame, resetGame],
  );
  useEffect(() => {
    if (client) {
      const messageHandler = (e: OnGroupDataMessageArgs) => {
        const data = JSON.parse(e.message.data as string) as MessageType;
        setHistory((prev) => prev.concat([data]));
        if (data.type in actions) {
          const fn = actions[data.type];
          fn(data.message);
        }
      };
      console.log('listening to group')
      client.on("group-message", messageHandler);
      return ()=>{
        console.log('STOPPED')
        client.off("group-message", messageHandler);
      }
    }
  }, [actions, client]);

  const connect = useCallback(
    async function (userId: string) {
      setUser(userId);
      const _headers = new Headers({ "ngrok-skip-browser-warning": "true" });
      const url = await fetch(`/hangman/api?userId=${userId}`, { method: "GET", headers: _headers }).then((res) => res.json());
      const clientR = new WebPubSubClient({ getClientAccessUrl: url.token });
      const messageHandler = (e: OnGroupDataMessageArgs) => {
        const data = JSON.parse(e.message.data as string) as MessageType;
        setHistory((prev) => prev.concat([data]));
        if (data.type in actions) {
          const fn = actions[data.type];
          fn(data.message);
        }
      };
      clientR.on("group-message", messageHandler);
      clientR.on("server-message", (e) => {
        console.log(`Received message ${e.message.data}`);
      });

      clientR.on("rejoin-group-failed", (e) => {
        console.log(`Rejoin group ${e.group} failed: ${e.error}`);
      });

      clientR.on("connected", (e) => console.log("connected", JSON.stringify(e)));
      clientR.on("disconnected", (e) => {
        console.log("disconnected", JSON.stringify(e));
        setConnected(false);
      });
      await clientR.start();
      await clientR.joinGroup("hangman");

      setConnected(true);
      setClient(clientR);
    },
    [setClient, setConnected, setUser, actions],
  );
  const disconnect = useCallback(
    async function () {
      if (client) {
        await client.leaveGroup("hangman");
        client.stop();
        setConnected(false);
      }
    },
    [client],
  );

  const send = useCallback(
    async function (type: string, message: string) {
      const chat = { type, message, from: user };
      if (client) {
        const resp = await client.sendToGroup("hangman", JSON.stringify(chat), "json", { noEcho: false });
        console.log("SEND RESPONSE", JSON.stringify(resp));
      }
    },
    [client, user],
  );
  // Provide the chat context to the children components
  return <HangmanContext.Provider value={{ user, connected, send, connect, disconnect, history, ...rest }}>{children}</HangmanContext.Provider>;
};
export const useHangmanContext = () => useContext(HangmanContext);
