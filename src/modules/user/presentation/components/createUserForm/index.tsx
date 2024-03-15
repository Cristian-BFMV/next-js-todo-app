"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { useFormState } from "react-dom";
import { Button } from "@/components/ui/button";

interface CreateUserProps {
  activeStep: 1 | 2;
  createUserCommand: (
    state: CreateUserState | undefined,
    formData: FormData
  ) => Promise<CreateUserState | undefined>;
  handleChangeActiveStep: (newActiveStep: 1 | 2) => void;
}

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
        <fieldset>
          <Label htmlFor="email">Correo Electrónico</Label>
          <Input
            id="email"
            name="email"
            placeholder="Ingresa tu correo electrónico"
            type="email"
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="name">Nombres</Label>
          <Input
            id="name"
            name="name"
            placeholder="Ingresa tus nombres"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="lastName">Apellidos</Label>
          <Input
            id="lastName"
            name="lastName"
            placeholder="Ingresa tus apellidos"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="password">Contraseña</Label>
          <Input
            id="password"
            name="password"
            placeholder="Ingresa tu contraseña"
            type="password"
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="phone">Teléfono</Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Ingresa tu teléfono"
            type="text"
          />
        </fieldset>
        <fieldset>
          <Label htmlFor="username">Nombre de usuario</Label>
          <Input
            id="username"
            name="username"
            placeholder="Ingresa tu nombre de usuario"
            type="text"
          />
        </fieldset>

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
