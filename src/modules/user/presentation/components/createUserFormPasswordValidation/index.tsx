import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface CreateUserFormPasswordValidationProps {
  isValid: boolean;
  label: string;
}

export const CreateUserFormPasswordValidation = ({
  isValid,
  label,
}: CreateUserFormPasswordValidationProps) => {
  return (
    <div
      className={twMerge(
        clsx(
          "flex items-center fill-slate-900 gap-2 text-slate-900 font-medium",
          {
            "fill-green-800": isValid,
            "text-green-800": isValid,
          }
        )
      )}
    >
      <FaCheck fill="inherit" size={"24px"} />
      <p>{label}</p>
    </div>
  );
};
