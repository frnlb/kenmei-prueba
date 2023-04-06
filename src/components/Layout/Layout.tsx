import React from "react";
import { ContainerProps } from "../../types/interfaces";
import { cva, type VariantProps } from "class-variance-authority";

export interface Layout extends ContainerProps {
  size?: "large" | "medium" | "screen";
}

const layout = cva("flex flex-col", {
  variants: {
    size: {
      screen:["w-screen"],
      large: ["w-full md:px-16 px-4 pt-8 md:pt-40"],
      medium: ["w-3/5 md:px-16 px-4"]
    }
  }
})

export interface LayoutProps extends ContainerProps, VariantProps<typeof layout>{}

const Layout = ({ children, size }: Layout) => {
  return <div className={layout({size})}>{children}</div>;
};

export default Layout;
