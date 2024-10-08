import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import LoginForm from "app/auth/components/LoginForm";

// Mock external dependencies
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

describe("LoginForm Integration Test", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders form and submits with valid data", async () => {
    signInWithEmailAndPassword.mockResolvedValueOnce({
      user: { email: "Muideenjamiu01@gmail.com" },
    });

    render(<LoginForm />);

    // Simulate typing into the email and password fields
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "Muideenjamiu01@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "123456" },
    });

    // Simulate clicking the login button
    fireEvent.click(screen.getByText("Login"));

    // Wait for async events to complete
    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "Muideenjamiu01@gmail.com",
        "123456"
      );
      expect(toast.success).toHaveBeenCalledWith(
        "Login successful!, You will be redirected shortly"
      );
      expect(mockPush).toHaveBeenCalledWith("/invoices");
    });
  });

  test("shows validation errors on invalid form submission", async () => {
    render(<LoginForm />);

    // Simulate clicking the login button without filling the form
    fireEvent.click(screen.getByText("Login"));

    // Wait for validation error messages to appear
    await waitFor(() => {
      expect(screen.getByText("The Email field is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  test("shows error toast on failed login attempt", async () => {
    signInWithEmailAndPassword.mockRejectedValueOnce(new Error("Login failed"));

    render(<LoginForm />);

    // Simulate filling the form with valid input
    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "Muideenjamiu01@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "123456" },
    });

    // Simulate clicking the login button
    fireEvent.click(screen.getByText("Login"));

    // Wait for error toast to appear
    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Login failed");
    });
  });
});
