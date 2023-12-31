import { ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'> {
  name: string;
}

export function Input({ placeholder, name, id, ...props }: InputProps) {
  const inputID = id ?? name;

  return (
    <div className="relative">
      <input
        {...props}
        name={name}
        id={inputID}
        className="w-full bg-white rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 pt-4 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none"
        placeholder=" "
      />

      <label
        htmlFor={inputID}
        className="absolute left-[13px] top-1.5 text-xs text-gray-700 pointer-events-none peer-placeholder-shown:text-base peer-placeholder-shown:top-3.5 transition-all"
      >
        {placeholder}
      </label>
    </div>
  )
}
