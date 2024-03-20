import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CreateUserFormSecondStep = () => {
  return (
    <>
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
        <Label htmlFor="confirmPassword">Contraseña</Label>
        <Input
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Ingresa tu contraseña"
          type="password"
        />
      </fieldset>
    </>
  );
};
