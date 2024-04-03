"use client";

import { Button } from "@/components/ui/button";
import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import clsx from "clsx";
import type { ReactNode } from "react";
import { useFormState } from "react-dom";
import { CreateUserFormFirstStep } from "../createUserFormFirstStep";
import { CreateUserFormSecondStep } from "../createUserFormSecondStep";

interface CreateUserProps {
  activeStep: 1 | 2;
  createUserCommand: (
    state: CreateUserState | undefined,
    formData: FormData
  ) => Promise<CreateUserState | undefined>;
  handleChangeActiveStep: (newActiveStep: 1 | 2) => void;
}

const formStepsComponents: Record<
  1 | 2,
  (state: CreateUserState | undefined) => ReactNode
> = {
  "1": (state) => <CreateUserFormFirstStep state={state} />,
  "2": (state) => <CreateUserFormSecondStep state={state} />,
};

const initialState = { message: "", errors: {} };

export const CreateUserForm = ({
  activeStep,
  createUserCommand,
  handleChangeActiveStep,
}: CreateUserProps) => {
  const [state, dispatch] = useFormState(createUserCommand, initialState);

  return (
    <div className="border p-6 rounded w-full max-w-[40rem]">
      <form action={dispatch} className="flex flex-col gap-4">
        <div
          className={clsx("flex flex-col gap-4", {
            block: activeStep === 1,
            hidden: activeStep === 2,
          })}
        >
          {formStepsComponents[1](state)}
        </div>
        <div
          className={clsx("flex flex-col gap-4", {
            block: activeStep === 2,
            hidden: activeStep === 1,
          })}
        >
          {formStepsComponents[2](state)}
        </div>

        {state && state.message && (
          <p className="text-sm text-red-500">{state.message}</p>
        )}

        <div className="grid grid-cols-2 gap-4 items-center ">
          <Button
            className="w-full"
            type="button"
            variant="outline"
            {...(activeStep === 1
              ? { onClick: () => alert("Cancelar") }
              : { onClick: () => handleChangeActiveStep(1) })}
          >
            {activeStep === 1 ? "Cancelar" : "Atrás"}
          </Button>
          {activeStep === 1 && (
            <Button
              className="w-full"
              onClick={() => handleChangeActiveStep(2)}
              type="button"
            >
              Siguiente
            </Button>
          )}
          {activeStep === 2 && (
            <Button className="w-full" type="submit">
              Crear cuenta
            </Button>
          )}
        </div>
      </form>
    </div>
  );
};
