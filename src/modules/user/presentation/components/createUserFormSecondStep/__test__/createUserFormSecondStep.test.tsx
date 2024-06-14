import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import {
  validateElementByRoleAsync,
  validateElementByText,
} from "@/utils/testUtils/element.utils";
import {
  changeInputByLabel,
  validateInputValueByLabel,
} from "@/utils/testUtils/input.utils";
import { render } from "@testing-library/react";
import { CreateUserFormSecondStep } from "..";
import * as useCreateUserContext from "../../../hooks/useCreateUserFormContext";

jest.mock("../../../hooks/useCreateUserFormContext", () => ({
  __esModule: true,
  ...jest.requireActual("../../../hooks/useCreateUserFormContext"),
}));

const updateUserInfo = jest.fn();
const user = {
  confirmPassword: "Confirm Password",
  email: "Email",
  lastName: "LastName",
  name: "Name",
  password: "Password",
  phone: "Phone",
  username: "Username",
};

const setup = (state?: CreateUserState) => {
  render(<CreateUserFormSecondStep state={state} />);
};

describe("CreateUserFormSecondStep component default values path", () => {
  beforeEach(() => {
    jest.spyOn(useCreateUserContext, "useCreateUserContext").mockReturnValue({
      updateUserInfo,
      user,
    });
  });

  it("Should render the password default value correctly when the user password is defined and not empty", () => {
    setup();

    validateInputValueByLabel({ label: "Contraseña", value: user.password });
  });

  it("Should render the confirm password default value correctly when the user confirm password is defined and not empty", () => {
    setup();

    validateInputValueByLabel({
      label: "Confirmar Contraseña",
      value: user.confirmPassword,
    });
  });
});

describe("CreateUserFormSecondStep component errors render path", () => {
  beforeEach(() => {
    jest.spyOn(useCreateUserContext, "useCreateUserContext").mockReturnValue({
      updateUserInfo,
      user: null,
    });
  });

  it("Should render the confirm password error correctly when the the confirm password error is defined", () => {
    setup({ errors: { confirmPassword: ["Confirm Password Error"] } });

    validateElementByText("Confirm Password Error");
  });

  it("Should render the password error correctly when the password error is defined", () => {
    setup({ errors: { confirmPassword: ["Password Error"] } });

    validateElementByText("Password Error");
  });
});

describe("CreateUserFormSecondStep component validations path", () => {
  beforeEach(() => {
    jest.spyOn(useCreateUserContext, "useCreateUserContext").mockReturnValue({
      updateUserInfo,
      user: null,
    });
  });

  it("Should render password has at least one number validation as is valid when the password typed has at least one number", async () => {
    setup();

    changeInputByLabel({ label: "Contraseña", value: "1" });

    await validateElementByRoleAsync(
      "status",
      "La contraseña cumple con el requerimiento de tener al menos un número"
    );
  });

  it("Should render password has at least one special character validation as is valid when the password typed has at least one special character", async () => {
    setup();

    changeInputByLabel({ label: "Contraseña", value: "@" });

    await validateElementByRoleAsync(
      "status",
      "La contraseña cumple con el requerimiento de tener al menos un carácter especial"
    );
  });

  it("Should render password has at least one upper case letter validation as is valid when the password typed has at least one upper case letter", async () => {
    setup();

    changeInputByLabel({ label: "Contraseña", value: "A" });

    await validateElementByRoleAsync(
      "status",
      "La contraseña cumple con el requerimiento de tener al menos una mayúscula"
    );
  });

  it("Should render passwords match validation as is valid when the passwords typed match", async () => {
    setup();

    changeInputByLabel({ label: "Contraseña", value: "A" });
    changeInputByLabel({ label: "Confirmar Contraseña", value: "A" });

    await validateElementByRoleAsync(
      "status",
      "La contraseña cumple con el requerimiento de coincidir las contraseñas"
    );
  });
});
