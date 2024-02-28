import { prisma } from "@/config/db/prisma";
import { User } from "../../domain/entity/user.entity";
import { CreateUserRepository } from "../../domain/repository/user.repository";

export const createUserRepository: CreateUserRepository = async (
  user: Omit<User, "id">
) => {
  "use server";

  await prisma.user.create({
    data: {
      ...user,
    },
  });
};
