import { useField } from "@/app/services/useField";
import React, { useState } from "react";
import { InputAtom } from "./inputAtom";

type ConnectFormType = {
    user:string;
    connect: (userId: string) => Promise<void>
}
export const ConnectFormAtom:React.FC<ConnectFormType> = ({user, connect}) => {
    const [value, setValue] = useState<string>(user)
    const fieldProps = useField(user, setValue);
    const onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();
        if(value)
        connect(value)
    }
    return <InputAtom onSubmit={onSubmit} {...fieldProps} label="Connect" inputClass="wide" placeholder="Enter Name"/>
}