import { User } from "../entity/user.entity";

export type CreateUserRepository = (user: Omit<User, "id">) => Promise<void>;
