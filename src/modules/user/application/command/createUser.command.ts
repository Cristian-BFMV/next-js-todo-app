import { CreateUserSchema } from "../../domain/entity/user.entity";
import { CreateUserRepository } from "../../domain/repository/user.repository";

export type CreateUserState = {
  errors?: {
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
      email: userData.get("email"),
      lastName: userData.get("lastName"),
      name: userData.get("name"),
      password: userData.get("password"),
      phone: userData.get("phone"),
      username: userData.get("username"),
    });

    if (!validatedFields.success)
      return {
        errors: validatedFields.error.flatten().fieldErrors,
        message: "Por favor llena todos los campos requeridos",
      };

    try {
      await createUserRepository(validatedFields.data);
    } catch (error) {
      return {
        message: "Lo sentimos, ha ocurrido un problema",
      };
    }
  };
