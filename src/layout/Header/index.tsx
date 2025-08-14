import React from "react";
import { User2 } from "lucide-react";

export const Header: React.FC = () => (
  <header className="h-[4.5rem] flex justify-between items-center shadow-2xl border-gray-200">
    <div className="w-32 flex justify-center">
      <img src="/supralogo.png" alt="Supra logo" className="w-20" />
    </div>
    <div className="flex flex-1 justify-end gap-2 items-center">
      <span>Admin</span>
      <span className="text-2xl capitalize border-2 rounded-2xl mr-6">
        <User2 />
      </span>
    </div>
  </header>
);
