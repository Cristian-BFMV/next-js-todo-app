"use client";

import { Button } from "@/components/ui/button";
import { LoadingButton } from "@/components/ui/loadingButton";
import { useFormStatus } from "react-dom";

interface CreateUserFormActionsProps {
  activeStep: 1 | 2;
  handleChangeActiveStep: (newActiveStep: 1 | 2) => void;
}

export const CreateUserFormActions = ({
  activeStep,
  handleChangeActiveStep,
}: CreateUserFormActionsProps) => {
  const { pending } = useFormStatus();

  return (
    <div className="grid grid-cols-2 gap-4 items-center">
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
        <LoadingButton className="w-full" loading={pending} type="submit">
          Crear cuenta
        </LoadingButton>
      )}
    </div>
  );
};
