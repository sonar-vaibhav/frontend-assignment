import { LabelHTMLAttributes, forwardRef } from "react";

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <label
        ref={ref}
        className={`text-sm font-bold text-gray-900 text-left block ${className}`}
        {...props}
      />
    );
  }
);

Label.displayName = "Label";

export default Label;
