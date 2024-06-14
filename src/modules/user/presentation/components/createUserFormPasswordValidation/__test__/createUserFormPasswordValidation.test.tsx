import { validateElementByText } from "@/utils/testUtils/element.utils";
import { render, screen } from "@testing-library/react";
import { CreateUserFormPasswordValidation } from "..";

const ariaLabel = "Aria Label";
const label = "Label";

const setup = (isValid: boolean = true) => {
  render(
    <CreateUserFormPasswordValidation
      ariaLabel={ariaLabel}
      isValid={isValid}
      label={label}
    />
  );
};

describe("CreateUserFormPasswordValidation component", () => {
  it("Should render the label element correctly", () => {
    setup();

    validateElementByText(label);
  });

  it("Should set the correct class name to the component container when the is valid flag is set to true", () => {
    setup();

    const element = screen.getByRole("status", {
      name: `La contraseña cumple con el requerimiento ${ariaLabel}`,
    });

    expect(element).toHaveClass("fill-green-800");
    expect(element).toHaveClass("text-green-800");
  });

  it("Should set the correct class name to the component container when the is valid flag is set to false", () => {
    setup(false);

    const element = screen.getByRole("status", {
      name: `La contraseña no cumple con el requerimiento ${ariaLabel}`,
    });

    expect(element).toHaveClass("fill-red-800");
    expect(element).toHaveClass("text-red-800");
  });
});
