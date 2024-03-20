"use client";

import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { CreateUserForm } from "../../components/createUserForm";
import { CreateUserFormSteps } from "../../components/createUserFormSteps";
import { useState } from "react";
import { CreateUserFormProvider } from "../../context/createUserForm";

interface CreateUserProps {
  createUserCommand: (
    _prevState: CreateUserState | undefined,
    userData: FormData
  ) => Promise<CreateUserState | undefined>;
}

export const CreateUser = ({ createUserCommand }: CreateUserProps) => {
  const [activeStep, setActiveStep] = useState<1 | 2>(1);

  const handleChangeActiveStep = (newActiveStep: 1 | 2) => {
    setActiveStep(newActiveStep);
  };

  return (
    <section className="flex flex-col gap-8 h-full justify-center">
      <header className="flex justify-center">
        <CreateUserFormSteps activeStep={activeStep} />
      </header>
      <article className="flex justify-center">
        <CreateUserFormProvider>
          <CreateUserForm
            activeStep={activeStep}
            createUserCommand={createUserCommand}
            handleChangeActiveStep={handleChangeActiveStep}
          />
        </CreateUserFormProvider>
      </article>
    </section>
  );
};
