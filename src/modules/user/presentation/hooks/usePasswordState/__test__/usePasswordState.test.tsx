import { act, renderHook } from "@testing-library/react";
import { type ChangeEvent } from "react";
import { usePasswordState } from "..";

const confirmPassword = "Confirm Password";
const password = "Password";

const setup = () => renderHook(() => usePasswordState());

describe("usePasswordState hook", () => {
  it("Should update the password field correctly when the handleChangePassword function is called", () => {
    const { result } = setup();

    act(() => {
      result.current.handleChangePassword({
        target: { value: password },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.password).toEqual(password);
  });

  it("Should update the confirmPassword field correctly when the handleChangePassword function is called", () => {
    const { result } = setup();

    act(() => {
      result.current.handleChangeConfirmPassword({
        target: { value: confirmPassword },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.confirmPassword).toEqual(confirmPassword);
  });
});
