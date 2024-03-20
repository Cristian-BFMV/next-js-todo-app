import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export const CreateUserFormFirstStep = () => {
  return (
    <>
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
    </>
  );
};
