import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import SignUpForm from "app/auth/register/components/SignUpForm";

jest.mock("firebase/auth");
jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
}));
jest.mock("react-toastify", () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

describe("SignUpForm Unit Test", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  const fillFormAndSubmit = () => {
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "Muideenjamiu01@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "123456" },
    });
    fireEvent.click(screen.getByText("Sign Up"));
  };

  test("renders form inputs and button", () => {
    render(<SignUpForm />);
    expect(
      screen.getByPlaceholderText("Enter email address")
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Enter your password")
    ).toBeInTheDocument();
    expect(screen.getByText("Sign Up")).toBeInTheDocument();
  });

  test("shows validation errors on invalid form submission", async () => {
    render(<SignUpForm />);
    fireEvent.click(screen.getByText("Sign Up"));
    await waitFor(() => {
      expect(
        screen.getByText("The Email field is required")
      ).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });
  test("submits form and successfully signs up the user", async () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: { email: "test@example.com" },
    });

    updateProfile.mockResolvedValue(); // Mock the profile update
    signInWithEmailAndPassword.mockResolvedValue({
      user: { email: "test@example.com" },
    });

    render(<SignUpForm />);

    // Simulate filling in the form
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText("Sign Up"));

    // Ensure the async logic has finished before making assertions
    await waitFor(() => {
      // Assert the Firebase functions were called
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password123"
      );
      expect(updateProfile).toHaveBeenCalledWith(expect.any(Object), {
        displayName: "test",
      });

      // Assert that the toast success message is called
      expect(toast.success).toHaveBeenCalledWith("Registration  successful!");

      // Assert that the page is redirected
      expect(mockPush).toHaveBeenCalledWith("/invoices");
    });
  });

  test("shows error message on failed signup", async () => {
    createUserWithEmailAndPassword.mockRejectedValue(
      new Error("Sign up failed")
    );

    render(<SignUpForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Sign Up"));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Sign up failed");
    });
  });
});
