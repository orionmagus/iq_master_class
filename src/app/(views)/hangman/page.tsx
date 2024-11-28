import { HangmansGameTissue } from "@/app/components/tissue/hangmanGameTissue";

export default function Hangman() {
  return (
    <main className="w-full flex flex-col gap-8 items-center min-h-screen font-[family-name:var(--font-geist-sans)] bg-[#1c322f]">
      <HangmansGameTissue />
    </main>
  );
}
