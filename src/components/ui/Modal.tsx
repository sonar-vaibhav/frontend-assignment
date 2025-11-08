import { ReactNode, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  title?: string;
  description?: string;
}

const Modal = ({ open, onClose, children, title, description }: ModalProps) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div 
        className="fixed inset-0 bg-black/50" 
        onClick={onClose}
      />
      <div className="relative bg-white rounded-lg shadow-xl max-w-lg w-full mx-4 max-h-[90vh] overflow-y-auto scrollbar-thin">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>
        <div className="p-6 text-left">
          {(title || description) && (
            <div className="mb-6 text-left pr-8">
              {title && <h2 className="text-2xl font-bold mb-2 text-left">{title}</h2>}
              {description && <p className="text-muted-foreground text-left">{description}</p>}
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
