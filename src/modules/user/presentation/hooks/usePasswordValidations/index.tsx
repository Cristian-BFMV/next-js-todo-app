import { useMemo } from "react";

interface UsePasswordValidations {
  confirmPassword: string;
  password: string;
}

const hasANumberRegex = new RegExp(/[0-9]/);
const hasASpecialCharacterRegex = new RegExp(/[!@#$%^&*()\-_=+{}|\\:;'",.<>?]/);
const hasAUppercaseLetterRegex = new RegExp(/[A-Z]/);

export const usePasswordValidations = ({
  confirmPassword,
  password,
}: UsePasswordValidations) => {
  const passwordValidations = useMemo(
    () => ({
      hasANumber: hasANumberRegex.test(password),
      hasASpecialCharacter: hasASpecialCharacterRegex.test(password),
      hasAUppercaseLetter: hasAUppercaseLetterRegex.test(password),
      hasPasswordsMatch:
        confirmPassword !== "" &&
        password !== "" &&
        confirmPassword === password,
    }),
    [confirmPassword, password]
  );

  return {
    passwordValidations,
  };
};
