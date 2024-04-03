import { prismaClient } from "@/config/db/prisma";
import { UserWithoutId } from "../../domain/entity/user.entity";
import { CreateUserRepository } from "../../domain/repository/user.repository";

export const createUserRepository: CreateUserRepository = async (
  user: UserWithoutId
) => {
  "use server";

  await prismaClient.user.create({
    data: {
      ...user,
    },
  });
};
