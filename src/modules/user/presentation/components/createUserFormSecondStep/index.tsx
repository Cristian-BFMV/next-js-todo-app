import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import type { CreateUser } from "@/modules/user/domain/entity/user.entity";
import type { FocusEvent } from "react";
import { useCreateUserContext } from "../../hooks/useCreateUserFormContext";
import { usePasswordState } from "../../hooks/usePasswordState";
import { usePasswordValidations } from "../../hooks/usePasswordValidations";
import { CreateUserFormPasswordValidation } from "../createUserFormPasswordValidation";

interface CreateUserFormSecondStepProps {
  state: CreateUserState | undefined;
}

export const CreateUserFormSecondStep = ({
  state,
}: CreateUserFormSecondStepProps) => {
  const { updateUserInfo, user } = useCreateUserContext();
  const {
    confirmPassword,
    handleChangeConfirmPassword,
    handleChangePassword,
    password,
  } = usePasswordState();
  const { passwordValidations } = usePasswordValidations({
    confirmPassword,
    password,
  });

  const handleBlur =
    (userKey: keyof CreateUser) =>
    (event: FocusEvent<HTMLInputElement, Element>) => {
      const { value } = event.target;

      updateUserInfo({ [userKey]: value });
    };

  return (
    <>
      <fieldset>
        <Label htmlFor="password">Contraseña</Label>
        <Input
          id="password"
          name="password"
          onBlur={handleBlur("password")}
          onChange={handleChangePassword}
          placeholder="Ingresa tu contraseña"
          type="password"
          {...(user && user.password && { defaultValue: user.password })}
        />

        {state?.errors?.password && (
          <p className="text-sm text-red-500">{state?.errors?.password[0]}</p>
        )}
      </fieldset>
      <fieldset>
        <Label htmlFor="confirmPassword">Confirmar Contraseña</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          onBlur={handleBlur("confirmPassword")}
          onChange={handleChangeConfirmPassword}
          placeholder="Ingresa nuevamente tu contraseña"
          type="password"
          {...(user &&
            user.confirmPassword && { defaultValue: user.confirmPassword })}
        />
        {state?.errors?.confirmPassword && (
          <p className="text-sm text-red-500">
            {state?.errors?.confirmPassword[0]}
          </p>
        )}
      </fieldset>

      <div className="flex flex-col gap-2">
        <CreateUserFormPasswordValidation
          ariaLabel="de tener al menos un número"
          isValid={passwordValidations.hasANumber}
          label="La contraseña tiene un número"
        />
        <CreateUserFormPasswordValidation
          ariaLabel="de tener al menos un carácter especial"
          isValid={passwordValidations.hasASpecialCharacter}
          label="La contraseña tiene un carácter especial"
        />
        <CreateUserFormPasswordValidation
          ariaLabel="de tener al menos una mayúscula"
          isValid={passwordValidations.hasAUppercaseLetter}
          label="La contraseña tiene un carácter en mayúscula"
        />
        <CreateUserFormPasswordValidation
          ariaLabel="de coincidir las contraseñas"
          isValid={passwordValidations.hasPasswordsMatch}
          label="Las contraseñas coinciden"
        />
      </div>
    </>
  );
};
