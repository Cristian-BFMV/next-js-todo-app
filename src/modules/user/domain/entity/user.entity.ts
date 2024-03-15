import { genSaltSync, hashSync } from "bcrypt";
import { z } from "zod";

export const UserSchema = z.object({
  email: z.string().email({ message: "El email ingresado es invalido" }),
  id: z.string(),
  lastName: z.string(),
  name: z.string(),
  password: z
    .string()
    .regex(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).*/, {
      message:
        "La contraseña debe incluir al menos un número, al menos un símbolo y al menos una mayúscula",
    })
    .transform((password: string) => {
      const salt = genSaltSync();

      return hashSync(password, salt);
    }),
  phone: z.string().length(10, "El teléfono debe de ser de 10 dígitos"),
  username: z.string(),
});

export const CreateUserSchema = UserSchema.omit({ id: true });


export type User = z.infer<typeof UserSchema>;

export type UserWithoutId = z.infer<typeof CreateUserSchema>
