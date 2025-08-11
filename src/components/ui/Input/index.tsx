import React, { type ChangeEvent} from "react";

type PropsInput = {
    label: string;
    type: "password" | "text";
    required?: boolean;
    onChange?: (e:ChangeEvent<HTMLInputElement>) => void;
    identificador: string;
    value?: string;
}

export const Input: React.FC<PropsInput> = ({ label, type, required = false, onChange, identificador, value}) => (
    <div className="w-full mb-1">
        <label className="text-sm" htmlFor={identificador}>{label}</label>
        <input value={value} onChange={onChange} required={required} className="border font-normal rounded-md pl-2 p-1 w-full border-gray-200 outline-none" type={type} name={identificador} id={identificador} />
    </div>
)