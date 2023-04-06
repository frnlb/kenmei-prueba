import React from "react";
import { cva, VariantProps } from "class-variance-authority";
export interface ButtonProps {
  label?: string;
  onClick?: (() => {}) | any;
  disable: boolean;
  type?: "button" | "submit" | "reset";
}

const button = cva("font-corp", {
  variants: {
    intent: {
      primary: ["bg-primary", "hover:bg-green", "text-white", "rounded-full"],
      secondary: [
        "bg-white",
        "text-gray-800",
        "border-gray-400",
        "hover:bg-gray-100",
      ],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
    },
  },
  compoundVariants: [{ intent: "primary", size: "medium", class: "uppercase" }],
  defaultVariants: {
    intent: "primary",
    size: "medium",
  },
});

export interface StyledButton
  extends ButtonProps,
    VariantProps<typeof button> {}

const Button = ({
  label,
  onClick,
  disable,
  intent,
  type = "button",
}: StyledButton) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disable}
      className={button({ intent })}
    >
      {label}
    </button>
  );
};

export default Button;
