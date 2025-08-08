import React from "react";
import { Menu, User2 } from "lucide-react";

export const Header: React.FC = () => (
  <header className="h-[4.5rem] flex justify-between items-center shadow-2xl border-gray-200">
    <div className="w-32 flex justify-center">
      <Menu className="hover:cursor-pointer" size={"1.8rem"} />
    </div>
    <div className="flex flex-1 justify-end gap-2 items-center">
      <span>Alexandre0lemos</span>
      <span className="text-2xl capitalize border-2 rounded-2xl mr-6">
        <User2 />
      </span>
    </div>
  </header>
);
