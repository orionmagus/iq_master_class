'use client'
import { SendMail } from "@/app/icons/SendMail";
import { WebPubSubClient } from "@azure/web-pubsub-client";
import { useState } from "react";
  
export type ChatType=
{
    from: string,
    message: string
};
function UserChat({ from, message }: ChatType) {
    return <div className="flex flex-col text-white p-2 mr-1 bg-gray-800 min-w-[40%] max-w-[60%] rounded-md self-end "><p className="self-end text-[10px]">{from}</p><p className="self-center">{message}</p></div>;;
  }
  
  function SelfChat({ from, message }:ChatType) {
    return <div className="flex flex-col text-white p-2 ml-1 bg-black min-w-[40%] max-w-[60%] rounded-md self-start"><p className="self-start text-[10px]">{from}</p><p className="self-center">{message}</p></div>;
  }
  
  export const ChatHub = () => 
{
    const [user, setUser] = useState("bob");
    const [message, setMessage] = useState("");
    const [chats, setChats] = useState<ChatType[]>([]);
    const [connected, setConnected] = useState(false);
    const [client, setClient] = useState<WebPubSubClient|null>(null);
    const [isLoading, setLoading] = useState(false);

    async function connect() 
    {
        setLoading(true);
        const _headers = new Headers({"ngrok-skip-browser-warning": "true"});
        const url = await fetch(`/socket/api?userId=${user}`,{method: "GET", headers: _headers}).then((res) => res.json());
        const client = new WebPubSubClient({ getClientAccessUrl: url.token });

        client.on("group-message", (e) => {
          const data = e.message.data as ChatType;
    
          setChats((prev) => [...prev, data]);
       
        });
  
        client.on("server-message", (e) => { console.log(`Received message ${e.message.data}`); });

        client.on("rejoin-group-failed", e => { console.log(`Rejoin group ${e.group} failed: ${e.error}`); });

        client.on("connected", (e) => {setLoading(false); console.log("connected",JSON.stringify(e)); });

      await client.start();
      await client.joinGroup("chat");
   
      setConnected(true);
      setClient(client);
    }
  
    async function send() {
        
      const chat = {
        from: user,
        message: message,
      };
      
      if(client)
        {  
            await client.sendToGroup("chat", chat, "json", { noEcho: true });
            setChats((prev) => {
              const updatedChats = [...prev, chat]
                  .filter((item: ChatType) => item.message?.trim() !== "")
                  .filter(
                      (item, index, self) => 
                          self.findIndex((i) => i.message === item.message) === index
                  );
              return updatedChats;
          });
        }
    }

    const loginPage = (
      <div className="flex h-100 flex-col justify-content-center container h-full w-1/4 bg-gray-700 m-auto p-5 bg-opacity-45 shadow-lg rounded-md">
          <h1 className="text-3xl text-center m-5 font-bold">MASTERCLASS CHAT</h1>
          <div className="flex flex-row m-auto w-10/12">
            <label className="text-xl my-auto" htmlFor="username">USERNAME:</label>
            <input
              autoFocus
              type="text"
              className="form-control text-green-500 mx-auto bg-black p-2 rounded-md shadow-[inset_0_4px_6px_-1px_rgba(255,255,255,0.6)]"
              placeholder="username"
              value={user}
              onChange={(e) => {setUser(e.target.value); }}
              disabled={isLoading}
            />
          </div>
          
 
            <button
              className="btn btn-primary w-fit mx-auto my-5"
              type="button"
              disabled={isLoading || !user}
              onClick={connect}
            >
              {isLoading ? "Connecting...":"Connect"}
            </button>
      </div>
    );

    const messagePage = (
      <div className="chatWidget flex p-0 shadow-lg">
        <div className="flex flex-col gap-3 m-1 h-[80%] w-full bg-gray-700 overflow-y-scroll no-scrollbar rounded-md p-2">
          {chats.map((item:ChatType, index) =>
            item.from === user ? (
              <SelfChat key={index} from={item.from} message={item.message} />
            ) : (
              <UserChat key={index} from={item.from} message={item.message} />
            )
          )}
        </div>
        <div className="absolute bottom-3 max-w-[300px] mx-1 w-full">
        <div className="flex flex-row space-x-1 w-full">  
          <input
            type="text"
            className="inputB w-10/12"
            placeholder={`Hi ${user}, type a message`}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         />
          
            <button className="btnB w-2/12 btn-primary" type="button" onClick={send}>
              <SendMail/>
            </button>
          </div>
        </div>
      </div>
    );
    return !connected ? loginPage : messagePage;
  }