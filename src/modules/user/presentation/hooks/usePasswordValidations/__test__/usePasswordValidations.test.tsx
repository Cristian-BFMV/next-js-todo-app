import { renderHook } from "@testing-library/react";
import { usePasswordValidations } from "..";

type SetupParams = Parameters<typeof usePasswordValidations>[0];

const setup = (params: SetupParams) =>
  renderHook(() => usePasswordValidations(params));

describe("usePasswordValidations hook", () => {
  it("Should set the has a number flag as false when the password does not contain a number", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password",
    });

    expect(result.current.passwordValidations.hasANumber).toBeFalsy();
  });

  it("Should set the has a number flag as true when the password contain a number", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password1",
    });

    expect(result.current.passwordValidations.hasANumber).toBeTruthy();
  });

  it("Should set the has a special character flag as false when the password does not contain a special character", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password",
    });

    expect(result.current.passwordValidations.hasASpecialCharacter).toBeFalsy();
  });

  it("Should set the has a special character flag as true when the password contain a special character", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password@",
    });

    expect(
      result.current.passwordValidations.hasASpecialCharacter
    ).toBeTruthy();
  });

  it("Should set the has a upper case letter flag as false when the password does not contain a upper case letter", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password",
    });

    expect(result.current.passwordValidations.hasAUppercaseLetter).toBeFalsy();
  });

  it("Should set the has a special character flag as true when the password contain a special character", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "Password",
    });

    expect(result.current.passwordValidations.hasAUppercaseLetter).toBeTruthy();
  });

  it("Should set the has passwords match flag as false when the passwords does not match", () => {
    const { result } = setup({
      confirmPassword: "confirmPassword",
      password: "password",
    });

    expect(result.current.passwordValidations.hasPasswordsMatch).toBeFalsy();
  });

  it("Should set the has passwords match flag as true when the passwords match", () => {
    const { result } = setup({
      confirmPassword: "password",
      password: "password",
    });

    expect(result.current.passwordValidations.hasPasswordsMatch).toBeTruthy();
  });
});
