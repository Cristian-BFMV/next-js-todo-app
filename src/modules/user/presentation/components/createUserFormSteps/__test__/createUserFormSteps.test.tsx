import { render, screen } from "@testing-library/react";
import { CreateUserFormSteps } from "..";

const setup = ({ activeStep }: { activeStep: 1 | 2 }) => {
  render(<CreateUserFormSteps activeStep={activeStep} />);
};

describe("CreateUserFormSteps component", () => {
  it("Should set the correct active state tailwind classes to the first step element when the active step is equal to 1", () => {
    setup({ activeStep: 1 });

    expect(screen.getByText("1")).toHaveClass("bg-slate-900");
  });

  it("Should set the correct active state tailwind classes to the first step label when the active step is equal to 1", () => {
    setup({ activeStep: 1 });

    expect(screen.getByText("Información General")).toHaveClass(
      "text-slate-900"
    );
  });

  it("Should not set the correct active state tailwind classes to the first step element when the active step is equal to 2", () => {
    setup({ activeStep: 2 });

    expect(screen.getByText("1")).not.toHaveClass("bg-slate-900");
  });

  it("Should not set the correct active state tailwind classes to the first step label when the active step is equal to 2", () => {
    setup({ activeStep: 2 });

    expect(screen.getByText("Información General")).not.toHaveClass(
      "text-slate-900"
    );
  });

  it("Should set the correct active state tailwind classes to the second step element when the active step is equal to 2", () => {
    setup({ activeStep: 2 });

    expect(screen.getByText("2")).toHaveClass("bg-slate-900");
  });

  it("Should set the correct active state tailwind classes to the second step label when the active step is equal to 2", () => {
    setup({ activeStep: 2 });

    expect(screen.getByText("Creación de contraseña")).toHaveClass(
      "text-slate-900"
    );
  });

  it("Should not set the correct active state tailwind classes to the second step element when the active step is equal to 1", () => {
    setup({ activeStep: 1 });

    expect(screen.getByText("2")).not.toHaveClass("bg-slate-900");
  });

  it("Should not set the correct active state tailwind classes to the second step label when the active step is equal to 2", () => {
    setup({ activeStep: 1 });

    expect(screen.getByText("Creación de contraseña")).not.toHaveClass(
      "text-slate-900"
    );
  });
});
