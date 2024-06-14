"use client";

import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useEffect, useState, type ReactNode } from "react";
import { useFormState } from "react-dom";
import { CreateUserFormActions } from "../createUserFormActions";
import { CreateUserFormFirstStep } from "../createUserFormFirstStep";
import { CreateUserFormSecondStep } from "../createUserFormSecondStep";
import { CreateUserFormSuccess } from "../createUserFormSuccess";

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

const initialState = { errors: {}, message: "" };

export const CreateUserForm = ({
  activeStep,
  createUserCommand,
  handleChangeActiveStep,
}: CreateUserProps) => {
  const [state, dispatch] = useFormState(createUserCommand, initialState);
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleCloseModal = () => {
    router.push("/auth/login");
  };

  useEffect(() => {
    if (state?.message === "SUCCESS") setOpen(true);
  }, [state]);

  return (
    <>
      <div className="border p-6 rounded w-full max-w-[40rem]">
        <form action={dispatch} className="flex flex-col gap-4">
          <div
            aria-hidden={activeStep === 2}
            aria-labelledby="step-1-label"
            aria-live="polite"
            className={clsx("flex flex-col gap-4", {
              block: activeStep === 1,
              hidden: activeStep === 2,
            })}
            id="step-1-content"
          >
            {formStepsComponents[1](state)}
          </div>
          <div
            aria-labelledby="step-2-label"
            aria-hidden={activeStep === 1}
            aria-live="polite"
            className={clsx("flex flex-col gap-4", {
              block: activeStep === 2,
              hidden: activeStep === 1,
            })}
            id="step-2-content"
          >
            {formStepsComponents[2](state)}
          </div>

          {state && state.message && state.message !== "SUCCESS" && (
            <p className="text-sm text-red-500">{state.message}</p>
          )}

          <CreateUserFormActions
            activeStep={activeStep}
            handleChangeActiveStep={handleChangeActiveStep}
          />
        </form>
      </div>
      <CreateUserFormSuccess handleCloseModal={handleCloseModal} open={open} />
    </>
  );
};
