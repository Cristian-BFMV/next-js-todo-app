"use client";

import { Input } from "@/modules/shared/presentation/components/input";
import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { useFormState } from "react-dom";

interface CreateUserProps {
  createUserCommand: (
    state: CreateUserState | undefined,
    formData: FormData
  ) => Promise<CreateUserState | undefined>;
}

const initialState = { message: "", errors: {} };

export const CreateUserForm = ({ createUserCommand }: CreateUserProps) => {
  const [state, dispatch] = useFormState(createUserCommand, initialState);

  return (
    <div className="w-full max-w-[40rem]">
      <form action={dispatch}>
        <Input
          id=""
          label="Correo electrónico"
          name="email"
          placeholder="Ingresa tu correo electrónico"
          type="text"
        />
        <Input
          id=""
          label="Nombres"
          name="name"
          placeholder="Ingresa tus nombres"
          type="text"
        />
        <Input
          id=""
          label="Apellidos"
          name="lastName"
          placeholder="Ingresa tus apellidos"
          type="text"
        />
        <Input
          id=""
          label="Contraseña"
          name="name"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
        <Input
          id=""
          label="Teléfono"
          name="name"
          placeholder="Ingresa tu Teléfono"
          type="text"
        />
        <Input
          id=""
          label="Nombre de usuario"
          name="name"
          placeholder="Ingresa tu nombre de usuario"
          type="text"
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
