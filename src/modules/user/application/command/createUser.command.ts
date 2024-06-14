import { Prisma } from "@prisma/client";
import { CreateUserSchema } from "../../domain/entity/user.entity";
import { CreateUserRepository } from "../../domain/repository/user.repository";

export type CreateUserState = {
  errors?: {
    confirmPassword?: string[];
    email?: string[];
    name?: string[];
    lastName?: string[];
    password?: string[];
    phone?: string[];
    username?: string[];
  };
  message?: string;
};

export const generateCreateUserCommand =
  (createUserRepository: CreateUserRepository) =>
  async (_prevState: CreateUserState | undefined, userData: FormData) => {
    "use server";

    const validatedFields = CreateUserSchema.safeParse({
      confirmPassword: userData.get("confirmPassword"),
      email: userData.get("email"),
      lastName: userData.get("lastName"),
      name: userData.get("name"),
      password: userData.get("password"),
      phone: userData.get("phone"),
      username: userData.get("username"),
    });

    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Por favor llena todos los campos requeridos",
      };
    }

    try {
      const { confirmPassword, ...user } = validatedFields.data;
      await createUserRepository(user);
      return {
        errors: {},
        message: "SUCCESS",
      };
    } catch (error) {
      if (
        error instanceof Prisma.PrismaClientKnownRequestError &&
        error.code === "P2002"
      ) {
        const target = error.meta?.target as Array<string>;

        return {
          message: `Una cuenta con este ${
            target.includes("email") ? "correo y/o" : ""
          } ${
            target.includes("username") ? "nombre de usuario" : ""
          } ya ha sido creado`,
        };
      }

      return {
        message: "Lo sentimos, ha ocurrido un problema",
      };
    }
  };
