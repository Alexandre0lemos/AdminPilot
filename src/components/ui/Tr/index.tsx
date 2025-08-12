import React, { type ReactNode } from "react";

type TrProps = {
  children: ReactNode;
}

export const Tr: React.FC<TrProps> = ({children}) => {
  return (
    <tr className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] whitespace-nowrap">
      {children}
    </tr>
  );
};
