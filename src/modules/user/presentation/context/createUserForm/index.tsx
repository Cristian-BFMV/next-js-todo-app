"use client";

import { ReactNode, createContext, useState } from "react";
import { UserWithoutId } from "../../../domain/entity/user.entity";

export const CreateUserFormContext = createContext<{
  updateUserInfo: (userInfo: Partial<UserWithoutId>) => void;
  user: UserWithoutId | null;
}>({ updateUserInfo: () => null, user: null });

export const CreateUserFormProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [user, setUser] = useState<UserWithoutId | null>(null);

  const updateUserInfo = (userInfo: Partial<UserWithoutId>) => {
    setUser((prevUser) => {
      if (!prevUser) return null;

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
