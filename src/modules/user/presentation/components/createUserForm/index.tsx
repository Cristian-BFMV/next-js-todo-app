"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";
import { CreateUserFormFirstStep } from "../createUserFormFirstStep";
import { CreateUserFormSecondStep } from "../createUserFormSecondStep";
import { ReactNode } from "react";

interface CreateUserProps {
  activeStep: 1 | 2;
  createUserCommand: (
    state: CreateUserState | undefined,
    formData: FormData
  ) => Promise<CreateUserState | undefined>;
  handleChangeActiveStep: (newActiveStep: 1 | 2) => void;
}

const formStepsComponents: Record<1 | 2, ReactNode> = {
  "1": <CreateUserFormFirstStep />,
  "2": <CreateUserFormSecondStep />,
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
        {formStepsComponents[`${activeStep}`]}

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
          <Button
            className="w-full"
            {...(activeStep === 1
              ? { onClick: () => handleChangeActiveStep(2), type: "button" }
              : { type: "submit" })}
          >
            {activeStep === 1 ? "Siguiente" : "Crear cuenta"}
          </Button>
        </div>
      </form>
    </div>
  );
};
