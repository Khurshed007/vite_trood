import React, { useRef, useState } from "react";
import { type VariantProps } from "class-variance-authority";
import { InputVariants } from "../lib/InputVariants"; // Path to your `InputVariants`
import { boolean } from "zod";

interface InputProps extends VariantProps<typeof InputVariants> {
  id: string;
  dynamicText?: string; // Optional dynamic label text
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string; // Placeholder to display when no dynamicText
  isError 
}

interface DynamicTextProps {
  isFocused: boolean;
  isFilled: boolean;
  dynamicText: string;
  handleFocus: () => void; // Modified type
}

const DynamicText: React.FC<DynamicTextProps> = ({
  isFocused,
  isFilled,
  dynamicText,
  handleFocus,
  isError 
}) => {
  return (
    <span
      onClick={handleFocus} // Correctly sets focus to the input
      className={`absolute left-4 top-2.5 text-gray-500 bg-white px-1 transition-all
        ${
          isFocused || isFilled
            ? "top-[-10px] text-sm text-blue-500"
            : "top-2.5 text-base text-gray-400"

            
        }
        
        ${
            isError &&
              "text-red-500"
       
            }
        `
    
    }
    >
      {dynamicText}
    </span>
  );
};

const Input: React.FC<InputProps> = ({
  id,
  dynamicText,
  type = "text",
  value,
  onChange,
  onFocus,
  onBlur,
  placeholder = "",
  size,
  variant,
  isError
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null); // Reference to the input element

  const handleFocus = () => {
    setIsFocused(true);
    inputRef.current?.focus(); // Set focus to the input element
    if (onFocus) onFocus();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (onBlur) onBlur();
  };

  const isFilled = value !== "";

  return (
    <div className="relative w-full">
      <input
        id={id}
        ref={inputRef} // Attach the ref to the input element
        value={value}
        placeholder={!dynamicText ? placeholder : isFocused ? placeholder : ""} // Show placeholder only when dynamicText is absent or input is focused
        type={type}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={onChange}
        className={InputVariants({ size, variant })} // Apply styles from `InputVariants`
      />
      {dynamicText && (
        <DynamicText
          isFocused={isFocused}
          isFilled={isFilled}
          dynamicText={dynamicText}
          handleFocus={handleFocus} // Use the same handler to focus the input
          isError = {isError }
        />
      )}
    </div>
  );
};

export { Input, DynamicText };