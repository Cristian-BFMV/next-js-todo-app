import { fireEvent, screen } from "@testing-library/react";

export const validateInputValueByRole = ({
  name,
  value,
}: {
  name: string;
  value: string;
}) => {
  const inputElement: HTMLInputElement = screen.getByRole("textbox", { name });

  expect(inputElement).toHaveValue(value);
};

export const validateInputValueByLabel = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const inputElement: HTMLInputElement = screen.getByLabelText(label);

  expect(inputElement).toHaveValue(value);
};

export const changeInputByLabel = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => {
  const inputElement: HTMLInputElement = screen.getByLabelText(label);

  fireEvent.change(inputElement, { target: { value } });
};
