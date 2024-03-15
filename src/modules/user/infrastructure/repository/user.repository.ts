import { prisma } from "@/config/db/prisma";
import { CreateUserRepository } from "../../domain/repository/user.repository";
import { UserWithoutId } from "../../domain/entity/user.entity";

export const createUserRepository: CreateUserRepository = async (
  user: UserWithoutId
) => {
  "use server";

  await prisma.user.create({
    data: {
      ...user,
    },
  });
};
