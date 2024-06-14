import { genSaltSync, hashSync } from "bcrypt";
import { z } from "zod";

const salt = genSaltSync();

export const UserSchema = z.object({
  email: z.string().email({ message: "El email ingresado es invalido" }),
  id: z.string(),
  lastName: z
    .string({ required_error: "Los apellidos son requeridos" })
    .min(1, { message: "Los apellidos son requeridos" }),
  name: z
    .string({ required_error: "Los nombres son requeridos" })
    .min(1, { message: "Los nombres son requeridos" }),
  password: z
    .string({ required_error: "La contraseña es requerida" })
    .regex(/(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).*/, {
      message:
        "La contraseña debe incluir al menos un número, al menos un símbolo y al menos una mayúscula",
    })
    .transform((password: string) => {
      return hashSync(password, salt);
    }),
  phone: z.string().length(10, "El teléfono debe de ser de 10 dígitos"),
  username: z
    .string({ required_error: "El nombre de usuario es requerido" })
    .min(1, { message: "El nombre de usuario es requerido" }),
});

export const CreateUserSchema = UserSchema.omit({ id: true })
  .extend({
    confirmPassword: z
      .string({
        required_error: "La confirmación de la contraseña es requerida",
      })
      .min(1, { message: "La confirmación de la contraseña es requerida" })
      .transform((password: string) => {
        return hashSync(password, salt);
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden",
    path: ["confirmPassword"],
  });

export type User = z.infer<typeof UserSchema>;

export type CreateUser = z.infer<typeof CreateUserSchema>;
