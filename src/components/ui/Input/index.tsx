import React from "react";

type PropsInput = {
    label: string;
    type: "password" | "text";
}

export const Input: React.FC<PropsInput> = ({ label, type }) => (
    <div className="w-full mb-1">
        <label className="text-sm" htmlFor="username">{label}</label>
        <input className="border font-normal rounded-md pl-2 p-1 w-full border-gray-200 outline-none" type={type} name="username" id="username" />
    </div>
)