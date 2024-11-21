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

// import React, { useState, useEffect } from "react";
// import { Controller } from "react-hook-form";
// import { cn } from "../../../lib/cn";

// export interface InputWithHookFormProps {
//   name: string;
//   control?: any;
//   rules?: any;
//   errors?: any;
//   inputPlaceholder?: string;
//   inputType?: string;
//   isPassword?: boolean;
//   togglePasswordVisibility?: (visible: boolean) => void;
//   className?: string;
// }

// const Input: React.FC<InputWithHookFormProps> = ({
//   name,
//   control,
//   rules,
//   errors,
//   inputPlaceholder,
//   inputType = "text",
//   isPassword = false,
//   togglePasswordVisibility,
//   className,
// }) => {
//   const [showPassword, setShowPassword] = useState(false);

//   useEffect(() => {}, [showPassword]);

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//     if (togglePasswordVisibility) {
//       togglePasswordVisibility(!showPassword);
//     }
//   };

//   return (
//     <Controller
//       name={name}
//       control={control}
//       rules={rules}
//       render={({ field }) => (
//         <div
//           className={`relative flex flex-col w-full bg-white`}
//           data-input-type={name}
//         >
//           {/* Input Field */}
//           <input
//             {...field}
//             type={showPassword && isPassword ? "text" : inputType}
//             placeholder={inputPlaceholder}
//             className={cn(
//               `peer px-4 py-4 rounded-md border border-black text-black
//               text-lg font-medium outline-none transition-all
//               focus:ring-2 focus:ring-blue-500 focus:border-blue-500
//               bg-transparent`,
//               errors?.[name] && `border-red-500 text-red-500`,
//               className
//             )}
//           />

//           {/* Label */}
//           <span
//             className={`absolute -top-2 left-4 px-2 text-sm text-gray-500
//               bg-white transition-all peer-placeholder-shown:opacity-0
//               peer-placeholder-shown:invisible peer-focus:visible
//               peer-focus:opacity-100 peer-focus:-top-5`}
//           >
//             {name}
//           </span>

//           {/* Error Message */}
//           {errors?.[name] && (
//             <div className="text-red-500 text-sm mt-2">
//               {errors[name]?.message}
//             </div>
//           )}

//           {/* Password Toggle */}
//           {isPassword && (
//             <button
//               type="button"
//               onClick={handleTogglePassword}
//               className="absolute right-4 top-4 text-gray-500"
//             >
//               {/* Добавьте иконки сюда */}
//               {showPassword ? "👁️" : "🙈"}
//             </button>
//           )}
//         </div>
//       )}
//     />
//   );
// };

// export default Input;

