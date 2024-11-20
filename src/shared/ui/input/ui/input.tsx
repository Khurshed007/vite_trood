import * as React from "react";
import {  VariantProps } from "class-variance-authority";


import { cn } from "../../../lib/cn";
import { inputVariants } from "../lib/inputVariants";

// Типизация пропсов для Input
export interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  startIcon?: React.ReactNode; // Иконка слева
  endIcon?: React.ReactNode; // Иконка справа
  label?: string; // Метка для input
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, variant, size, startIcon, endIcon, label, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="relative w-full">
          {/* Иконка слева */}
          {startIcon && <span className="absolute left-3 top-2">{startIcon}</span>}
          {/* Поле ввода */}
          <input
            ref={ref}
            className={cn(
              inputVariants({ variant, size }), // Применяем стили от class-variance-authority
              "peer w-full placeholder-transparent focus:outline-none", // Peer для связи с меткой
              startIcon && "pl-10", // Если есть startIcon — добавляем отступ
              endIcon && "pr-10", // Если есть endIcon — добавляем отступ
              className
            )}
            {...props}
          />
          {/* Метка */}
          {label && (
            <label
              className={cn(
                "absolute left-3 top-2 bg-white px-1 text-gray-400 transition-all", // Базовые стили
                "peer-focus:opacity-100 peer-focus:visible peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-sm peer-focus:text-black" // Стили для фокуса
              )}
            >
              {label}
            </label>
          )}
          {/* Иконка справа */}
          {endIcon && <span className="absolute right-3 top-2">{endIcon}</span>}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };