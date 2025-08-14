import { File, LayoutDashboard, Upload, Users } from "lucide-react";
import type React from "react";
import { SidebarOption } from "../../components/ui/SidebarOption";

export const Aside: React.FC = () => {
  return (
    <aside className={`w-32 items-center flex flex-col pt-24 shadow-2xl border-gray-200 gap-8`}>
      <SidebarOption label="Dashboard" pagePath="/dashboard">
        <LayoutDashboard />
      </SidebarOption>
      <SidebarOption label="Usuários" pagePath="/users">
        <Users />
      </SidebarOption>
      <SidebarOption label="Atualizar-OPs" pagePath="/update-ops">
        <Upload />
      </SidebarOption>
      <SidebarOption label="Lançamentos" pagePath="/views">
        <File />
      </SidebarOption>
    </aside>
  );
};
