import React, { ReactElement } from "react";

export const availableTextTypes = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  label: "label",
  subLabel: "subLabel",
  span: "span",
  p: "p",
  smallP: "smallP",
} as const;

export type AvailableTextTypes = typeof availableTextTypes;

type TextProps = {
  id?: string;
  isWhite?: boolean;
  isBold?: boolean;
  type: keyof AvailableTextTypes;
  text: string;
};

/**
 * Text component.
 * Renders a text element based on the specified type.
 * @param {TextProps} props - The props for the Text component.
 */

const Text = ({ type, id, text, isBold, isWhite }: TextProps): ReactElement => {
  switch (type) {
    case availableTextTypes.h1:
      return (
        <h1
          className={`text-4xl
          ${isBold ? "font-avenirHeavy font-black" : ""}
          ${isWhite ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </h1>
      );

    case availableTextTypes.h2:
      return (
        <h2
          className={`text-3xl
      ${isBold ? "font-avenirHeavy font-black" : ""}
      ${isWhite ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </h2>
      );

    case availableTextTypes.h3:
      return (
        <h3
          className={`text-2xl
        ${isBold ? "font-avenirHeavy font-black" : ""}
        ${isWhite ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </h3>
      );

    case availableTextTypes.h4:
      return (
        <h4
          className={`text-lg
      ${isBold ? "font-avenirHeavy font-black" : ""}
      ${isWhite ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </h4>
      );

    case availableTextTypes.label:
      return (
        <label htmlFor={id} className="font-avenirHeavy text-gray-500">
          {text}
        </label>
      );
    case availableTextTypes.subLabel:
      return (
        <label htmlFor={id} className="text-gray-500 text-sm font-medium">
          {text}
        </label>
      );
    case availableTextTypes.span:
      return <span className="text-gray-100 font-avenirHeavy">{text}</span>;
    case availableTextTypes.smallP:
      return (
        <p
          className={`text-sm
          ${isBold ? "font-avenirHeavy font-black" : ""}
          ${isWhite ? "text-white" : "text-gray-300"}`}
        >
          {text}
        </p>
      );
    default:
      return (
        <p
          className={`whitespace-pre-line ${
            isBold ? "font-avenirHeavy font-black" : ""
          } ${isWhite ? "text-white" : "text-gray-500"}`}
        >
          {text}
        </p>
      );
  }
};

export default Text;
