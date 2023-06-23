import React, { useState } from "react";

export type TextareaProps = {
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
};

/**
 * Textarea component.
 * @param {TextareaProps} props - The props for the textarea component.
 */

const Textarea = ({ placeholder, value, onChange }: TextareaProps) => {
  const [defaultValue, setDefaultValue] = useState(value);

  const handleTextareaChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const newValue = event.target.value;
    setDefaultValue(newValue);
    onChange(newValue);
  };

  return (
    <textarea
      className="w-full h-[161px] p-3 text-gray-500 border border-gray-200 placeholder-gray-200 focus:ring-0 outline-gray-500 rounded-md"
      placeholder={placeholder}
      defaultValue={defaultValue}
      onChange={handleTextareaChange}
    />
  );
};

export default Textarea;
