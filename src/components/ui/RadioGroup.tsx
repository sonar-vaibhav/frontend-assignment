import { InputHTMLAttributes, forwardRef } from "react";

interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <input
        ref={ref}
        type="radio"
        className={`w-5 h-5 text-primary bg-white border-2 border-gray-300 focus:ring-2 focus:ring-primary cursor-pointer accent-primary ${className}`}
        {...props}
      />
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
