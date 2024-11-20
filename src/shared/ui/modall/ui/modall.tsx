import { type ModalProps } from '../types/modalType';

// Импортируем типизацию

export const Modal = ({ isOpen, onClose, children, ...props }: ModalProps) => {
  if (!isOpen) return null;

  return (
    <div
      {...props}
      className={`fixed inset-0 flex items-center justify-center bg-black/50 ${
        props.className || ''
      }`}
      onClick={onClose}
    >
      <div
        className="relative w-96 rounded-md bg-white p-6 shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};
