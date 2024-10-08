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

describe("SignUpForm Integration Test", () => {
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

  test("submits form and successfully signs up the user", async () => {
    createUserWithEmailAndPassword.mockResolvedValue({
      user: { email: "test@example.com" },
    });

    updateProfile.mockResolvedValue();
    signInWithEmailAndPassword.mockResolvedValue({
      user: { email: "test@example.com" },
    });

    render(<SignUpForm />);

    fillFormAndSubmit();

    await waitFor(() => {
      expect(createUserWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "Muideenjamiu01@gmail.com",
        "123456"
      );
      expect(updateProfile).toHaveBeenCalledWith(expect.any(Object), {
        displayName: "Muideenjamiu01",
      });
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "Muideenjamiu01@gmail.com",
        "123456"
      );
      expect(toast.success).toHaveBeenCalledWith("Registration  successful!");
      expect(mockPush).toHaveBeenCalledWith("/invoices");
    });
  });

  test("shows error message on failed signup", async () => {
    createUserWithEmailAndPassword.mockRejectedValue(
      new Error("Sign up failed")
    );

    render(<SignUpForm />);

    fillFormAndSubmit();

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Sign up failed");
    });
  });
});
