import React from "react";
import { cva, VariantProps } from "class-variance-authority";

const base =
  "inline-flex items-center justify-center text-sm font-semibold transition-colors duration-300 ease-in-out whitespace-nowrap ring-offset-gray-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border hover:border rounded-lg ";

const buttonVariants = cva(base, {
  variants: {
    variant: {
      primary:
        "bg-blue-1000 text-white-0 hover:bg-white-0 hover:text-blue-1000",
      secondary:
        "bg-white-0 text-primary-800 border border-white-0 hover:border hover:border-blue-1000",
    },
    size: {
      small: "px-4 py-2",
      medium: "px-10 py-3",
      large: "px-8 py-4",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "medium",
  },
});

type ButtonProps = {
  variant: VariantProps<typeof buttonVariants>["variant"];
  size: VariantProps<typeof buttonVariants>["size"];
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ variant, size, className, children, ...props }: ButtonProps) {
  return (
    <button className={buttonVariants({ className, variant, size })} {...props}>
      {children}
    </button>
  );
}

export default Button;
