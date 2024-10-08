import { render, fireEvent, screen, waitFor } from "@testing-library/react";

import { signOut } from "firebase/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Layout/Navbar";

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

describe("Navbar Logout Functionality Tests", () => {
  const mockPush = jest.fn();

  beforeEach(() => {
    useRouter.mockReturnValue({ push: mockPush });
    signOut.mockResolvedValue(); // Mock signOut to resolve
    jest.clearAllMocks();
  });

  test("calls signOut and redirects on logout", async () => {
    // Simulating user session
    sessionStorage.setItem("user", JSON.stringify({ displayName: "Test User" }));

    render(<Navbar showNav={true} setShowNav={jest.fn()} />);

    // Click on user avatar to open the dropdown
    fireEvent.click(screen.getByTestId("user-avatar"));

    // Click the logout button
    fireEvent.click(screen.getByTestId("logout-button"));

    // Wait for the signOut function to be called
    await waitFor(() => {
      expect(signOut).toHaveBeenCalled();
    });

    // Check the success message and redirection
    expect(toast.success).toHaveBeenCalledWith("Signed out successfully");
    expect(mockPush).toHaveBeenCalledWith("/");
  });
});
