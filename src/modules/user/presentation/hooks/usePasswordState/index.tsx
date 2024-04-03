import { useState, type ChangeEvent } from "react";

export const usePasswordState = () => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const handleChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleChangeConfirmPassword = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  return {
    confirmPassword,
    handleChangePassword,
    handleChangeConfirmPassword,
    password,
  };
};
