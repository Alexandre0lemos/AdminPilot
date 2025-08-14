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
      id={pagePath.split("/")[1].toLowerCase()}
      className={`${styles.option} flex flex-col items-center hover:cursor-pointer scale-[0.9] hover:scale-[0.85] active:scale-[0.95]`}
      onClick={() => navegate(pagePath)}
    >
      {children}
      <span className="text-center">{label}</span>
    </div>
  );
};
