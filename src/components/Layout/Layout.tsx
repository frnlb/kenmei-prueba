import React from "react";
import { ContainerProps } from "../../types/interfaces";
import { cva, type VariantProps } from "class-variance-authority";


export interface Layout extends ContainerProps {
  size?: "large" | "medium" | "screen";
}

const Layout = ({ children, size="large" }: Layout) => {
  return <div className="">{children}</div>;
};

export default Layout;
