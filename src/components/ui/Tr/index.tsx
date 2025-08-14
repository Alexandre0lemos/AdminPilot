import React, { type ReactNode } from "react";

type TrProps = {
  children: ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLTableRowElement>) => void;
}

export const Tr: React.FC<TrProps> = ({children, className, onClick}) => {
  return (
    <tr onClick={onClick} className={`f${className} grid grid-cols-[1fr_3fr_1fr_1fr_1fr_1fr_1fr_1fr_1fr] whitespace-nowrap`}>
      {children}
    </tr>
  );
};
