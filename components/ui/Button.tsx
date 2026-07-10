import { ArrowRight } from "lucide-react";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  showArrow?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  showArrow = true,
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-4 font-semibold transition-all";

  const variantClasses =
    variant === "primary"
      ? "bg-slate-900 text-white hover:bg-blue-600 hover:scale-105"
      : "border border-slate-300 hover:bg-slate-100";

  const disabledClasses = disabled
    ? "opacity-60 cursor-not-allowed hover:scale-100"
    : "";

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses} ${disabledClasses}`}
    >
      {children}

      {showArrow && (
        <ArrowRight size={18} aria-hidden="true" />
      )}
    </button>
  );
}