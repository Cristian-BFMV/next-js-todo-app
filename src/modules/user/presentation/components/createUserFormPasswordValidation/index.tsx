import clsx from "clsx";
import { FaCheck } from "react-icons/fa6";
import { twMerge } from "tailwind-merge";

interface CreateUserFormPasswordValidationProps {
  ariaLabel: string;
  isValid: boolean;
  label: string;
}

export const CreateUserFormPasswordValidation = ({
  ariaLabel,
  isValid,
  label,
}: CreateUserFormPasswordValidationProps) => {
  return (
    <div
      aria-label={
        isValid
          ? `La contraseña cumple con el requerimiento ${ariaLabel}`
          : `La contraseña no cumple con el requerimiento ${ariaLabel}`
      }
      aria-live="polite"
      className={twMerge(
        clsx(
          "flex items-center fill-slate-900 gap-2 text-slate-900 font-medium",
          {
            "fill-green-800": isValid,
            "fill-red-800": !isValid,
            "text-green-800": isValid,
            "text-red-800": !isValid,
          }
        )
      )}
      role="status"
    >
      <FaCheck fill="inherit" size={"24px"} />
      <p>{label}</p>
    </div>
  );
};
