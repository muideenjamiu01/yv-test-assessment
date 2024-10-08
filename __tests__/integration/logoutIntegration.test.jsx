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

  test("integrates logout functionality correctly", async () => {
    // Simulating user session
    const user = { displayName: "Test User" };
    sessionStorage.setItem("user", JSON.stringify(user));

    render(<Navbar showNav={true} setShowNav={jest.fn()} />);

    // Check if the user avatar is displayed with initials
    const userAvatar = screen.getByTestId("user-avatar");
    expect(userAvatar).toBeInTheDocument();
    expect(userAvatar).toHaveTextContent(user.displayName.substring(0, 2).toUpperCase()); // Check for the initials

    // Click on user avatar to open the dropdown
    fireEvent.click(userAvatar);

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
