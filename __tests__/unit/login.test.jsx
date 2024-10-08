import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import { toast } from "react-toastify";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation";
import LoginForm from "app/auth/components/LoginForm";

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

describe("LoginForm", () => {
  const mockPush = jest.fn();
  
  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders form inputs and button", () => {
    render(<LoginForm />);
    expect(screen.getByPlaceholderText("Enter email address")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });

  test("toggles password visibility", () => {
    render(<LoginForm />);
    
    const toggleButton = screen.getByRole("button", { name: /toggle password visibility/i }); // Adjust based on actual name
    const passwordInput = screen.getByPlaceholderText("Enter your password");
  
    // Password should be hidden by default
    expect(passwordInput).toHaveAttribute("type", "password");
  
    // Click to show password
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "text");
  
    // Click to hide password again
    fireEvent.click(toggleButton);
    expect(passwordInput).toHaveAttribute("type", "password");
  });
  

  // test("toggles password visibility", () => {
  //   render(<LoginForm />);
  //   const toggleButton = screen.getByRole("button", { name: /eye/i });
  //   const passwordInput = screen.getByPlaceholderText("Enter your password");

  //   // Password should be hidden by default
  //   expect(passwordInput).toHaveAttribute("type", "password");

  //   // Click to show password
  //   fireEvent.click(toggleButton);
  //   expect(passwordInput).toHaveAttribute("type", "text");

  //   // Click to hide password again
  //   fireEvent.click(toggleButton);
  //   expect(passwordInput).toHaveAttribute("type", "password");
  // });

  test("shows validation errors on invalid form submission", async () => {
    render(<LoginForm />);
    const submitButton = screen.getByText("Login");

    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText("The Email field is required")).toBeInTheDocument();
      expect(screen.getByText("Password is required")).toBeInTheDocument();
    });
  });

  test("submits form and logs in successfully", async () => {
    signInWithEmailAndPassword.mockResolvedValue({
      user: { email: "test@example.com" },
    });

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(signInWithEmailAndPassword).toHaveBeenCalledWith(
        auth,
        "test@example.com",
        "password123"
      );
      expect(toast.success).toHaveBeenCalledWith(
        "Login successful!, You will be redirected shortly"
      );
      expect(mockPush).toHaveBeenCalledWith("/invoices");
    });
  });

  test("shows error message on failed login", async () => {
    signInWithEmailAndPassword.mockRejectedValue(new Error("Login failed"));

    render(<LoginForm />);

    fireEvent.change(screen.getByPlaceholderText("Enter email address"), {
      target: { value: "test@example.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("Enter your password"), {
      target: { value: "password123" },
    });

    fireEvent.click(screen.getByText("Login"));

    await waitFor(() => {
      expect(toast.error).toHaveBeenCalledWith("Login failed");
    });
  });
});
