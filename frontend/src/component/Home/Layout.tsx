import { ReactNode } from "react";

interface LayoutPropos{
    children: ReactNode;
}

export default function Layout({ children }: LayoutPropos) {
    return <>{children }</>
}