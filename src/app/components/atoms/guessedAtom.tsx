'use client'
import { useHangmanContext } from '@/app/context/hangmanProvider'
import React, { useMemo } from 'react'

export const GuessedAtom:React.FC = () => {
    const {guessed, phrase=''} = useHangmanContext();
    const letterProps = useMemo(()=>{
        return guessed.map((children, key)=>({children, key, className: phrase.includes(children)?'guess ':'guess strike'}))
    }, [guessed, phrase])
  return (
    <div className='guessed-cell'>
        {letterProps.map(({key, ...props})=><div key={key} {...props}/> )}
    </div>
  )
}
