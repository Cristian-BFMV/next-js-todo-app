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
    <section>
      <header className="flex justify-center">
        <CreateUserFormSteps />
      </header>
      <article className="flex justify-center">
        <CreateUserForm createUserCommand={createUserCommand} />
      </article>
    </section>
  );
};
