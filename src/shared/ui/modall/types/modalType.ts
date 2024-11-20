import { type DetailedHTMLProps, type HTMLAttributes, type ReactNode } from "react";

// Типизация пропсов для Modal
export interface ModalProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  isOpen?: boolean; // Указывает, открыт ли модал (необязательное свойство)
  onClose?: () => void; // Функция для закрытия модала (необязательное свойство)
  children?: ReactNode; // Вложенный контент (необязательное свойство)
}