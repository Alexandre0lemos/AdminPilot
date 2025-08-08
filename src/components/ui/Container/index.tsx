import React, { type ReactNode } from "react";

type ContainerProps = {
    children?: ReactNode;
    className?: string;
}

export const Container:React.FC<ContainerProps> = ({children, className}) => (
    <main className="flex h-[calc(100vh-4.5rem)] flex-1 overflow-y-scroll p-4">
        <div className={`${className}`}>
            {children}
        </div>
    </main>
)