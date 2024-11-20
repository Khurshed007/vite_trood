// import * as React from "react";
// import {  VariantProps } from "class-variance-authority";


// import { cn } from "../../../lib/cn";
// import { inputVariants } from "../lib/inputVariants";

// // Типизация пропсов для Input
// export interface InputProps
//   extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
//     VariantProps<typeof inputVariants> {
//   startIcon?: React.ReactNode; // Иконка слева
//   endIcon?: React.ReactNode; // Иконка справа
//   label?: string; // Метка для input
// }

// const Input = React.forwardRef<HTMLInputElement, InputProps>(
//   ({ className, variant, size, startIcon, endIcon, label, ...props }, ref) => {
//     return (
//       <div className="relative w-full">
//         <div className="relative w-full">
//           {/* Иконка слева */}
//           {startIcon && <span className="absolute left-3 top-2">{startIcon}</span>}
//           {/* Поле ввода */}
//           <input
//             ref={ref}
//             className={cn(
//               inputVariants({ variant, size }), // Применяем стили от class-variance-authority
//               "peer w-full placeholder-transparent focus:outline-none", // Peer для связи с меткой
//               startIcon && "pl-10", // Если есть startIcon — добавляем отступ
//               endIcon && "pr-10", // Если есть endIcon — добавляем отступ
//               className
//             )}
//             {...props}
//           />
//           {/* Метка */}
//           {label && (
//             <label
//               className={cn(
//                 "absolute left-3 top-2 bg-white px-1 text-gray-400 transition-all", // Базовые стили
//                 "peer-focus:opacity-100 peer-focus:visible peer-focus:top-[-10px] peer-focus:left-2 peer-focus:text-sm peer-focus:text-black" // Стили для фокуса
//               )}
//             >
//               {label}
//             </label>
//           )}
//           {/* Иконка справа */}
//           {endIcon && <span className="absolute right-3 top-2">{endIcon}</span>}
//         </div>
//       </div>
//     );
//   }
// );

// Input.displayName = "Input";

// export { Input };


import React, { useState, useEffect } from "react";
import { Controller } from "react-hook-form";
// import { EyeHide, EyeShow, XOctagon } from "../../../assets/icons"; // Убедитесь в корректности пути
import { cn } from "../../../lib/cn";
import { inputVariants } from "../lib/inputVariants";

export interface InputWithHookFormProps {
  name: string; // Название поля
  control?: any; // Контроллер из `react-hook-form`
  rules?: any; // Правила валидации
  errors?: any; // Объект ошибок
  inputPlaceholder?: string; // Плейсхолдер
  inputType?: string; // Тип инпута (например, `text`, `password`)
  isPassword?: boolean; // Является ли поле паролем
  togglePasswordVisibility?: (visible: boolean) => void; // Переключение видимости пароля
  className?: string; // Дополнительные классы
}

const Input: React.FC<InputWithHookFormProps> = ({
  name,
  control,
  rules,
  errors,
  inputPlaceholder,
  inputType = "text",
  isPassword = false,
  togglePasswordVisibility,
  className,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  // const [eyeIcon, setEyeIcon] = useState(<EyeHide />);

  // Меняем иконку в зависимости от видимости пароля
  useEffect(() => {
    // setEyeIcon(showPassword ? <EyeShow /> : <EyeHide />);
  }, [showPassword]);

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
    if (togglePasswordVisibility) {
      togglePasswordVisibility(!showPassword);
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field }) => (
        <div className="relative w-full">
          <input
            {...field}
            type={showPassword && isPassword ? "text" : inputType}
            placeholder={inputPlaceholder}
            className={cn(
              inputVariants({ size: "md", variant: "default" }),
              "peer w-full placeholder-transparent focus:outline-none",
              isPassword && "pr-10", // Для кнопки показа пароля
              errors?.[name] && "border-red-500", // Ошибки подсвечиваются
              className
            )}
          />
          <label
            className={cn(
              "absolute left-3 top-2 text-gray-400 bg-white px-1 transition-all",
              "peer-placeholder-shown:opacity-0 peer-placeholder-shown:invisible",
              "peer-focus:opacity-100 peer-focus:visible peer-focus:top-[-10px] peer-focus:text-sm peer-focus:text-black"
            )}
          >
            {inputPlaceholder}
          </label>
          {errors?.[name] && (
            <div className="absolute left-3 top-full mt-1 text-red-500 flex items-center gap-1">
              {/* <XOctagon className="h-4 w-4" /> */}
              <span>{errors[name]?.message}</span>
            </div>
          )}
          {isPassword && (
            <button
              type="button"
              onClick={handleTogglePassword}
              className="absolute right-3 top-2"
            >
              {/* {eyeIcon} */}
            </button>
          )}
        </div>
      )}
    />
  );
};

export default Input;