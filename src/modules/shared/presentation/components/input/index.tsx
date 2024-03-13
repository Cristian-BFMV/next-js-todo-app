import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = ({ label, ...props }: InputProps) => {
  return (
    <label className="text-base text-gray-400 w-full">
      {label}

      <input
        {...props}
        className="w-full my-2 border-gray-400 border rounded"
      />
    </label>
  );
};
