import type { CreateUserState } from "@/modules/user/application/command/createUser.command";
import { validateElementByText } from "@/utils/testUtils/element.utils";
import { validateInputValueByRole } from "@/utils/testUtils/input.utils";
import { render } from "@testing-library/react";
import { CreateUserFormFirstStep } from "..";
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
  render(<CreateUserFormFirstStep state={state} />);
};

describe("CreateUserFormFirstStep component", () => {
  beforeEach(() => {
    jest.spyOn(useCreateUserContext, "useCreateUserContext").mockReturnValue({
      updateUserInfo,
      user,
    });
  });

  it("Should render the email default value correctly when the user email is defined and not empty", () => {
    setup();

    validateInputValueByRole({ name: "Correo Electrónico", value: user.email });
  });

  it("Should render the name default value correctly when the user name is defined and not empty", () => {
    setup();

    validateInputValueByRole({ name: "Nombres", value: user.name });
  });

  it("Should render the last name default value correctly when the user last name is defined and not empty", () => {
    setup();

    validateInputValueByRole({ name: "Apellidos", value: user.lastName });
  });

  it("Should render the phone default value correctly when the user phone is defined and not empty", () => {
    setup();

    validateInputValueByRole({ name: "Teléfono", value: user.phone });
  });

  it("Should render the username default value correctly when the user username is defined and not empty", () => {
    setup();

    validateInputValueByRole({
      name: "Nombre de usuario",
      value: user.username,
    });
  });

  it("Should render the email error correctly when the user email error is defined", () => {
    setup({ errors: { email: ["Email Error"] } });

    validateElementByText("Email Error");
  });

  it("Should render the name error correctly when the name error is defined", () => {
    setup({ errors: { name: ["Name Error"] } });

    validateElementByText("Name Error");
  });

  it("Should render the last name error correctly when the last name error is defined", () => {
    setup({ errors: { lastName: ["Last Name Error"] } });

    validateElementByText("Last Name Error");
  });

  it("Should render the phone error correctly when the phone error is defined", () => {
    setup({ errors: { lastName: ["Phone Error"] } });

    validateElementByText("Phone Error");
  });

  it("Should render the username error correctly when the username error is defined", () => {
    setup({ errors: { lastName: ["Username Error"] } });

    validateElementByText("Username Error");
  });
});
