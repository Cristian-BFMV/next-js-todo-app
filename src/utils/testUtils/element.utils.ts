import { ByRoleMatcher, screen, waitFor } from "@testing-library/react";

export const validateElementByText = (elementText: string) => {
  expect(screen.getByText(elementText)).toBeInTheDocument();
};

export const validateElementByRole = (role: ByRoleMatcher, name?: string) => {
  expect(screen.getByRole(role, { name })).toBeInTheDocument();
};

export const validateElementByRoleAsync = async (
  role: ByRoleMatcher,
  name?: string
) => {
  const element = await waitFor(() => screen.getByRole(role, { name }));

  expect(element).toBeInTheDocument();
};
