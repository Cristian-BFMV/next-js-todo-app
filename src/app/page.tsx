import { generateCreateUserCommand } from "@/modules/user/application/command/createUser.command";
import { createUserRepository } from "@/modules/user/infrastructure/repository/user.repository";
import { CreateUser } from "@/modules/user/presentation/pages/createUser";

const createUserCommand = generateCreateUserCommand(createUserRepository);

export default function Home() {
  return (
    <main>
      <CreateUser createUserCommand={createUserCommand} />
    </main>
  );
}
