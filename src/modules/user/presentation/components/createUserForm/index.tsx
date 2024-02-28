"use client";

import { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { useFormState } from "react-dom";

interface CreateUserProps {
  createUserCommand: (
    state: CreateUserState | undefined,
    formData: FormData
  ) => Promise<CreateUserState | undefined>;
}

const initialState = { message: "", errors: {} };

export const CreateUserForm = ({ createUserCommand }: CreateUserProps) => {
  const [state, dispatch] = useFormState(createUserCommand, initialState);

  return (
    <form action={dispatch}>
      <input type="text" name="email" id="" placeholder="Email" />
      <input type="text" name="name" id="" placeholder="Name" />
      <input type="text" name="lastName" id="" placeholder="LastName" />
      <input type="text" name="password" id="" placeholder="Password" />
      <input type="text" name="phone" id="" placeholder="Phone" />
      <input type="text" name="username" id="" placeholder="UserName" />
      <button type="submit">Submit</button>
    </form>
  );
};
