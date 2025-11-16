import type { ReactNode } from "react";

interface HeaderProps {
  children: ReactNode;
}

export default function Main({ children }: HeaderProps) {
  return <header>{children}</header>;
}
