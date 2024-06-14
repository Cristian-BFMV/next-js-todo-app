import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { CreateUserFormProvider } from "..";
import { useCreateUserContext } from "../../../hooks/useCreateUserFormContext";

const confirmPassword = "Confirm Password",
  email = "email",
  lastName = "lastName",
  name = "name",
  password = "password",
  phone = "phone",
  username = "username";

const ConsumerComponent = () => {
  const { updateUserInfo, user } = useCreateUserContext();

  if (!user) return null;

  return (
    <>
      <h1>{user.confirmPassword}</h1>
      <h1>{user.email}</h1>
      <h1>{user.lastName}</h1>
      <h1>{user.name}</h1>
      <h1>{user.password}</h1>
      <h1>{user.phone}</h1>
      <h1>{user.username}</h1>

      <button
        onClick={() => {
          updateUserInfo({
            confirmPassword,
            email,
            lastName,
            name,
            password,
            phone,
            username,
          });
        }}
      >
        Update user
      </button>
    </>
  );
};

const setup = () => {
  render(
    <CreateUserFormProvider>
      <ConsumerComponent />
    </CreateUserFormProvider>
  );
};

const clickUpdateUserButton = () => {
  const buttonElement = screen.getByRole("button");

  fireEvent.click(buttonElement);
};

describe("CreateUserForm context provider", () => {
  it("Should update the confirm password correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() =>
      expect(allParagraphs[0]).toHaveTextContent(confirmPassword)
    );
  });

  it("Should update the email correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[1]).toHaveTextContent(email));
  });

  it("Should update the last name correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[2]).toHaveTextContent(lastName));
  });

  it("Should update the name correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[3]).toHaveTextContent(name));
  });

  it("Should update the password correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[4]).toHaveTextContent(password));
  });

  it("Should update the phone correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[5]).toHaveTextContent(phone));
  });

  it("Should update the username correctly when the update user function is called", async () => {
    setup();
    const allParagraphs = screen.getAllByRole("heading");

    clickUpdateUserButton();

    await waitFor(() => expect(allParagraphs[6]).toHaveTextContent(username));
  });
});
