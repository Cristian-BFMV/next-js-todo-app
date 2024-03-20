import { CreateUserFormContext } from "../../context/createUserForm";
import { useContext } from "react";

export const useCreateUserContext = () => {
  const { updateUserInfo, user } = useContext(CreateUserFormContext);

  return {
    updateUserInfo,
    user,
  };
};
