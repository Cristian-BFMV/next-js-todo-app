import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CreateUserFormStepsProps {
  activeStep: 1 | 2;
}

export const CreateUserFormSteps = ({
  activeStep,
}: CreateUserFormStepsProps) => {
  return (
    <ul className="flex justify-center items-center gap-4 w-full max-w-[36rem]">
      <li className="text-base flex items-center gap-2">
        <p
          className={twMerge(
            clsx(
              "h-8 w-8 bg-slate-500 rounded-full flex items-center justify-center text-slate-100",
              { "bg-slate-900": activeStep === 1 }
            )
          )}
        >
          1
        </p>
        <p
          className={twMerge(
            clsx("text-slate-500", {
              "text-slate-900": activeStep === 1,
            })
          )}
        >
          Información General
        </p>
      </li>

      <li className=" bg-slate-400 flex-1 h-[1px] rounded-sm" />

      <li className="text-base flex items-center gap-2">
        <p
          className={twMerge(
            clsx(
              "h-8 w-8 bg-slate-400 rounded-full flex items-center justify-center text-slate-100",
              { "bg-slate-900": activeStep === 2 }
            )
          )}
        >
          2
        </p>
        <p
          className={twMerge(
            clsx("text-slate-500", {
              "text-slate-900": activeStep === 2,
            })
          )}
        >
          Creación de contraseña
        </p>
      </li>
    </ul>
  );
};
