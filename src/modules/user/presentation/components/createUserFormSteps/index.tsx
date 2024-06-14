import clsx from "clsx";
import { twMerge } from "tailwind-merge";

interface CreateUserFormStepsProps {
  activeStep: 1 | 2;
}

export const CreateUserFormSteps = ({
  activeStep,
}: CreateUserFormStepsProps) => {
  return (
    <ul
      aria-label="Pasos para la creación de un usuario"
      className="flex justify-center items-center gap-4 w-full max-w-[36rem]"
    >
      <li className="text-base flex items-center gap-2">
        <p
          aria-current={activeStep === 1 ? "step" : undefined}
          aria-label="Paso 1: Información general"
          className={twMerge(
            clsx(
              "h-8 w-8 bg-slate-500 rounded-full flex items-center justify-center text-slate-100",
              { "bg-slate-900": activeStep === 1 }
            )
          )}
          id="step-1-label"
        >
          1
        </p>
        <p
          aria-hidden="true"
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
          aria-current={activeStep === 2 ? "step" : undefined}
          aria-label="Paso 2: Creación de contraseña"
          className={twMerge(
            clsx(
              "h-8 w-8 bg-slate-400 rounded-full flex items-center justify-center text-slate-100",
              { "bg-slate-900": activeStep === 2 }
            )
          )}
          id="step-2-label"
        >
          2
        </p>
        <p
          aria-hidden="true"
          className={twMerge(
            clsx("text-slate-500", {
              "text-slate-900": activeStep === 2,
            })
          )}
        >
          Creación de Contraseña
        </p>
      </li>
    </ul>
  );
};
