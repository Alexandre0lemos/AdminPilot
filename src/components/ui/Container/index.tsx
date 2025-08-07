import React, { type ReactNode } from "react";

type ContainerProps = {
    children?: ReactNode;
    className?: string;
}

export const Container:React.FC<ContainerProps> = ({children, className}) => (
    <main className="flex h-[90vh] flex-1 overflow-y-scroll">
        <div className={`${className}`}>
            {children}
        </div>
    </main>
)