"use client";
import React, { useEffect, useRef, useState } from "react";

interface ModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
  children: React.ReactNode;
  disableDismiss?: boolean;
}

export const ModalAtom: React.FC<ModalProps> = ({ modalOpen, setModalOpen, children, disableDismiss = true }) => {
  const modal = useRef<HTMLDivElement | null>(null);

  // close on click outside
  useEffect(() => {
    if (disableDismiss) {
      return;
    }
    const clickHandler = (event: MouseEvent | TouchEvent) => {
      if (modalOpen && modal.current && !modal.current.contains(event.target as Node)) {
        setModalOpen(false);
      }
    };
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("mouseup", clickHandler);
      document.addEventListener("touchend", clickHandler);
      return () => {
        document.removeEventListener("mouseup", clickHandler);
        document.removeEventListener("touchend", clickHandler);
      };
    }
  }, [modalOpen, disableDismiss, setModalOpen]);

  // close if the esc key is pressed
  useEffect(() => {
    if (disableDismiss) {
      return;
    }
    const keyHandler = ({ keyCode }: { keyCode: number }) => {
      if (modalOpen && keyCode === 27) {
        setModalOpen(false);
      }
    };
    if (typeof window !== "undefined" && typeof document !== "undefined") {
      document.addEventListener("keydown", keyHandler);
      return () => document.removeEventListener("keydown", keyHandler);
    }
  }, [modalOpen, disableDismiss, setModalOpen]);

  return (
    <div className={`md:items-center z-50 fixed inset-0 flex items-end justify-center bg-dark ${modalOpen ? "block" : "hidden"}`}>
      <div
        ref={modal}
        className="w-full max-w-[570px] bg-slate-900/25 rounded-[20px] p-6 text-center flex flex-col justify-center items-center shadow-lg shadow-dark"
      >
        {children}
      </div>
    </div>
  );
};

type ActionType = {
  primary?: boolean;
  children: React.ReactNode;
  onClick: (...args: unknown[]) => void;
};
type ModalPromptAtomPropsType = {
  open: boolean;
  children: React.ReactNode;
  actions: ActionType[];
};

export const ModalPromptAtom: React.FC<ModalPromptAtomPropsType> = ({ open, actions, children }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_modalOpen, setModalOpen] = useState(open);
  return (
    <ModalAtom {...{ modalOpen:open, setModalOpen }}>
      {children}
      <div className="p-2 flex justify-end gap-2">
        {actions.map(({ primary = false, ...props }, index) => (
          <button key={index} className={`px-4 py-3 bg-slate-900/40 border min-w-[150px] border-white text-white! rounded-md text-center hover:bg-slate-500/50 ${primary ? "" : "bg-transparent border border-white"}`} {...props} />
        ))}
      </div>
    </ModalAtom>
  );
};
