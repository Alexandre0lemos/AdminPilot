import React, { type ReactNode } from "react";

type TrProps = {
  children: ReactNode;
};

export const Th: React.FC<TrProps> = ({ children }) => {
  return (
    <th className="overflow-hidden text-ellipsis uppercase border border-[rgba(0,0,0,0.2)] px-1 py-4 bg-gray-800 text-white">
      {children}
    </th>
  );
};
