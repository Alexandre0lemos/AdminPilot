import React, { type ReactNode } from "react";
import styles from "./style.module.css";
import { useNavigate } from "react-router-dom";

type ContainerProps = {
  children: ReactNode;
  label: string;
  pagePath: string;
};

export const SidebarOption: React.FC<ContainerProps> = ({
  children,
  label,
  pagePath,
}) => {
  const navegate = useNavigate();

  return (
    <div
      id={label.toLowerCase()}
      className={`${styles.option} flex flex-col pl-2 pr-2 items-center hover:cursor-pointer scale-[0.9]`}
      onClick={() => navegate(pagePath)}
    >
      {children}
      <span className="text-center">{label}</span>
    </div>
  );
};
