import { ComponentProps } from "react"
import { cn } from "../../app/utils/cn";
import { Spinner } from "./Spinner";

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean;
}

export function Button({ className, isLoading, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 transition-all text-white font-medium disabled:text-gray-400 h-12 rounded-2xl px-6 disabled:cursor-not-allowed active:brightness-110 flex items-center justify-center ',
        className
      )}
    >

      {!isLoading && <span>{children}</span>}
      {isLoading && <Spinner className="w-6 h-6" />}
    </button>
  );
}
