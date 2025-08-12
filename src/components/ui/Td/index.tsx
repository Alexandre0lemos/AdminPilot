import React, { type ReactNode } from "react";

type TrProps = {
  children: ReactNode;
};

export const Td: React.FC<TrProps> = ({ children }) => {
  return (
    <td className="overflow-hidden text-ellipsis uppercase border border-[rgba(0,0,0,0.2)] px-1 py-4">
      {children}
    </td>
  );
};
