"use client"
import { HangmanProvider } from "../../context/hangmanProvider"
import { HangmanBoardCell } from "../cells/hangmanBoardCell"

export const HangmansGameTissue: React.FC = () => {
    return (
        <HangmanProvider>
            {/* <NavbarAtom/> */}
            <HangmanBoardCell/>            
        </HangmanProvider>
    )

}