import React from "react";

/**
 * Button component.
 * @param {ButtonProps} props - The props for the button component.
 */

export const availableVariants = {
  default: "default",
  primary: "primary",
  secondary: "secondary",
  tertiary: "tertiary",
} as const;

export const availableButtonTypes = {
  button: "button",
  submit: "submit",
} as const;

type AvailableButtonVariants = typeof availableVariants;
type AvailableButtonTypes = typeof availableButtonTypes;

export type ButtonProps = {
  children?: React.ReactNode;
  text?: string;
  type?: keyof AvailableButtonTypes;
  variant?: keyof AvailableButtonVariants;
  isSelected?: boolean;
  isDisabled?: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = ({
  children,
  text,
  variant = availableVariants.default,
  type = availableButtonTypes.button,
  isDisabled,
  isSelected,
  onClick,
}: ButtonProps) => {
  let classes = "";

  switch (variant) {
    case availableVariants.primary:
      classes = "bg-blue-100 text-white font-avenirHeavy py-3 px-7 rounded-lg";
      break;
    case availableVariants.secondary:
      classes =
        "bg-gray-400 text-gray-300 font-avenirHeavy py-3 px-7 rounded-lg";
      break;
    case availableVariants.tertiary:
      classes = `${
        isSelected ? "bg-white text-gray-500" : "bg-transparent text-white"
      } py-3 px-[30px] font-avenirHeavy font-black border-2 border-white rounded-3xl`;
      break;
    default:
      classes = "";
      break;
  }

  return (
    <button
      className={classes}
      type={type}
      disabled={isDisabled}
      onClick={isDisabled ? () => {} : onClick}
    >
      {text || children}
    </button>
  );
};

export default Button;
