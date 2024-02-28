"use server";

import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { CreateUserForm } from "../../components/createUserForm";
import { CreateUserFormSteps } from "../../components/createUserFormSteps";

interface CreateUserProps {
  createUserCommand: (
    _prevState: CreateUserState | undefined,
    userData: FormData
  ) => Promise<CreateUserState | undefined>;
}

export const CreateUser = async ({ createUserCommand }: CreateUserProps) => {
  return (
    <>
      <CreateUserFormSteps />
      <CreateUserForm createUserCommand={createUserCommand} />
    </>
  );
};
