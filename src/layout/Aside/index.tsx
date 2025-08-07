import { File, Home, Upload, Users } from "lucide-react";
import type React from "react";
import { SidebarOption } from "../../components/ui/SidebarOption";

export const Aside: React.FC = () => {
  return (
    <aside className={`w-18 items-center h-[90vh] flex flex-col pt-24 shadow-2xl border-gray-200 gap-8`}>
      <SidebarOption label="Home" pagePath="/home">
        <Home />
      </SidebarOption>
      <SidebarOption label="Users" pagePath="/users">
        <Users />
      </SidebarOption>
      <SidebarOption label="Update" pagePath="/update-op">
        <Upload />
      </SidebarOption>
      <SidebarOption label="Views" pagePath="/views">
        <File />
      </SidebarOption>
    </aside>
  );
};
