import { useCallback, useMemo, useState } from "react";

let nextWord = 0;
const phrases: string[] = ["Three Blind Mice"];
export const getPhrase = () => {
  const ret = phrases[nextWord];
  nextWord++;
  return ret;
};

export type HangmanBodyType = {
  head?: boolean;
  body?: boolean;
  leftArm?: boolean;
  rightArm?: boolean;
  leftLeg?: boolean;
  rightLeg?: boolean;
  face?: boolean;
};

export const useHangman = () => {
  const [phrase, setPhrase] = useState<string>("Three Blind Mice".toUpperCase());
  const [guessed, setGuessed] = useState<Array<string>>([]);

  const word = useMemo(() => {
    return [...phrase].map((c) => (c === " " ? c : guessed.includes(c) ? c : "_").toUpperCase());
  }, [phrase, guessed]);

  const addGuess = useCallback((s?: string) => {
      if (typeof s !== "undefined") {
        if (/[a-z]/i.test(s)) {
          s = s.substring(0, 1).toUpperCase();
          setGuessed((prev) => prev.filter((v) => v !== s).concat([s!]));
        }
      }
    }, [setGuessed]);

  const score = useMemo(() => guessed.filter((v) => !phrase.includes(v)).length, [guessed, phrase]);

  const succeed = useMemo(() => !word.includes("_"), [word]);

  const fail = useMemo(() => score > 6, [score]);
  
  const hangmanProps: HangmanBodyType = useMemo(() => {
    const parts = ["head", "body", "leftArm", "rightArm", "leftLeg", "rightLeg", "face"];
    return parts.reduce((acc, k, i) => ({ ...acc, [k]: i < score }), {});
  }, [score]);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const resetGame = useCallback((_p?: string) => setGuessed([]), [setGuessed]);
  const nextGame = useCallback((_p?: string) => {
      setPhrase(getPhrase());
      resetGame(_p);
    }, [resetGame]);

  return { score, word, guessed, addGuess, nextGame, phrase, hangmanProps, resetGame, succeed, fail };
};
export type HangmanReturnType = ReturnType<typeof useHangman>;
