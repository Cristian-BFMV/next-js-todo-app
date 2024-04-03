import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import type { CreateUser } from "@/modules/user/domain/entity/user.entity";
import type { FocusEvent } from "react";
import { useCreateUserContext } from "../../hooks/useCreateUserFormContext";

interface CreateUserFormFirstStepProps {
  state: CreateUserState | undefined;
}

export const CreateUserFormFirstStep = ({
  state,
}: CreateUserFormFirstStepProps) => {
  const { updateUserInfo, user } = useCreateUserContext();

  const handleBlur =
    (userKey: keyof CreateUser) =>
    (event: FocusEvent<HTMLInputElement, Element>) => {
      const { value } = event.target;

      updateUserInfo({ [userKey]: value });
    };

  return (
    <>
      <fieldset>
        <Label htmlFor="email">Correo Electrónico</Label>
        <Input
          id="email"
          name="email"
          onBlur={handleBlur("email")}
          placeholder="Ingresa tu correo electrónico"
          type="email"
          {...(user && user.email && { defaultValue: user.email })}
        />

        {state?.errors?.email && (
          <p className="text-sm text-red-500">{state?.errors?.email[0]}</p>
        )}
      </fieldset>
      <fieldset>
        <Label htmlFor="name">Nombres</Label>
        <Input
          id="name"
          name="name"
          onBlur={handleBlur("name")}
          placeholder="Ingresa tus nombres"
          type="text"
          {...(user && user.name && { defaultValue: user.name })}
        />
        {state?.errors?.name && (
          <p className="text-sm text-red-500">{state?.errors?.name[0]}</p>
        )}
      </fieldset>
      <fieldset>
        <Label htmlFor="lastName">Apellidos</Label>
        <Input
          id="lastName"
          name="lastName"
          onBlur={handleBlur("lastName")}
          placeholder="Ingresa tus apellidos"
          type="text"
          {...(user && user.lastName && { defaultValue: user.lastName })}
        />
        {state?.errors?.lastName && (
          <p className="text-sm text-red-500">{state?.errors?.lastName[0]}</p>
        )}
      </fieldset>
      <fieldset>
        <Label htmlFor="phone">Teléfono</Label>
        <Input
          id="phone"
          name="phone"
          onBlur={handleBlur("phone")}
          placeholder="Ingresa tu teléfono"
          type="text"
          {...(user && user.phone && { defaultValue: user.phone })}
        />
        {state?.errors?.phone && (
          <p className="text-sm text-red-500">{state?.errors?.phone[0]}</p>
        )}
      </fieldset>
      <fieldset>
        <Label htmlFor="username">Nombre de usuario</Label>
        <Input
          id="username"
          name="username"
          onBlur={handleBlur("username")}
          placeholder="Ingresa tu nombre de usuario"
          type="text"
          {...(user && user.username && { defaultValue: user.username })}
        />
        {state?.errors?.username && (
          <p className="text-sm text-red-500"> {state?.errors?.username[0]}</p>
        )}
      </fieldset>
    </>
  );
};
