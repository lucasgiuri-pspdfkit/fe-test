import React, { useState } from "react";
import Text, { availableTextTypes } from "../text/text";

export type InputProps = {
  placeholder?: string;
  label?: string;
  value: string;
  onChange: (value: string) => void;
};

/**
 * Input component.
 * @param {InputProps} props - The props for the input component.
 */

const Input = ({ placeholder, label, value, onChange }: InputProps) => {
  const [defaultValue, setDefaultValue] = useState(value);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setDefaultValue(newValue);
    onChange(newValue);
  };

  if (label) {
    return (
      <div className="flex flex-col w-full gap-y-2">
        <Text text={label} type={availableTextTypes.subLabel} />
        <input
          type="text"
          className="w-full h-12 p-3 text-gray-500 border border-gray-200 placeholder-gray-200 focus:ring-0 outline-gray-500 rounded-md"
          placeholder={placeholder}
          defaultValue={defaultValue}
          onChange={handleInputChange}
        />
      </div>
    );
  }
  return (
    <input
      type="text"
      className="w-full h-12 p-3 text-gray-500 border border-gray-200 placeholder-gray-200 focus:ring-0 outline-gray-500 rounded-md"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleInputChange}
    />
  );
};

export default Input;
