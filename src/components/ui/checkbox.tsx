import { InputHTMLAttributes, forwardRef } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="checkbox"
        className={`w-5 h-5 text-primary bg-white border-2 border-gray-300 rounded focus:ring-2 focus:ring-primary cursor-pointer accent-primary ${className}`}
        {...props}
      />
    );
  }
);

Checkbox.displayName = "Checkbox";

export default Checkbox;
