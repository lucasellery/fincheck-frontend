import { ComponentProps } from "react"
import { cn } from "../../app/utils/cn";

interface ButtonProps extends ComponentProps<'button'> {}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={cn(
        'bg-teal-900 hover:bg-teal-800 disabled:bg-gray-100 transition-all text-white font-medium disabled:text-gray-400 h-12 rounded-2xl px-6 disabled:cursor-not-allowed active:brightness-110',
        className
      )}
    />
  );
}
