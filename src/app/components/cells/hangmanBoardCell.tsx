import React, { useState } from "react";
import { GuessedAtom } from "../atoms/guessedAtom";
import { GuessInputAtom } from "../atoms/guessInputAtom";
import { WordHolderAtom } from "../atoms/wordPlaceHolderAtom";
import { HangmansGallowCell } from "./hangmanGallowCell";
import { useHangmanContext } from "@/app/context/hangmanProvider";
import { ModalAtom, ModalPromptAtom } from "../atoms/modalAtom";
import { ConnectFormAtom } from "../atoms/connnectFormAtom";

export const HangmanBoardCell = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { connected, connect, user, succeed, fail, word, send, hangmanProps } = useHangmanContext();
  const [modalOpen, setModalOpen] = useState(!connected);
  const connectHandler = async (userId:string)=>{
    await connect(userId);
    setModalOpen(false)
  }
  const succeedActions = [
    {
      children: "Replay",
      onClick: () => send("resetGame", ""),
    },
    {
      primary: true,
      children: "Next",
      onClick: () => send("nextGame", ""),   
    },
  ];
  return (
    <div className="content relative">
      <HangmansGallowCell {...hangmanProps} />
      <WordHolderAtom word={word} />
      <GuessedAtom />
      <GuessInputAtom send={send} />
      <ModalAtom disableDismiss {...{ modalOpen, setModalOpen }}>
        <ConnectFormAtom user={user} connect={connectHandler} />
      </ModalAtom>
      <ModalPromptAtom open={succeed} actions={succeedActions}>
        <div className="flex flex-col">
          <h3>Congratultions!</h3>
        </div>
      </ModalPromptAtom>
      <ModalPromptAtom open={fail} actions={succeedActions}>
        <div className="flex flex-col">
          <h3>Sorry! You were unsuccessful!</h3>
        </div>
      </ModalPromptAtom>
    </div>
  );
};
