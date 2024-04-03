"use client";

import { createContext, useState, type ReactNode } from "react";
import type { CreateUser } from "../../../domain/entity/user.entity";

export const CreateUserFormContext = createContext<{
  updateUserInfo: (userInfo: Partial<CreateUser>) => void;
  user: CreateUser | null;
}>({ updateUserInfo: () => null, user: null });

export const CreateUserFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<CreateUser>({
    confirmPassword: "",
    email: "",
    lastName: "",
    name: "",
    password: "",
    phone: "",
    username: "",
  });

  const updateUserInfo = (userInfo: Partial<CreateUser>) => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        ...userInfo,
      };
    });
  };

  return (
    <CreateUserFormContext.Provider
      value={{
        updateUserInfo,
        user,
      }}
    >
      {children}
    </CreateUserFormContext.Provider>
  );
};
