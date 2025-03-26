import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import LoginPortal from "../pages/LoginPortal";

describe("LoginPortal Component", () => {
    test("renders logo, title, and subtitle", () => {
        render(<LoginPortal />);

        expect(screen.getByAltText("Internee.pk Logo")).toBeInTheDocument();
        expect(screen.getByText("Internee.pk")).toBeInTheDocument();
        expect(screen.getByText("VIRTUAL INTERNSHIP PLATFORM")).toBeInTheDocument();
    });

    test("renders email and password input fields", () => {
        render(<LoginPortal />);

        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");

        expect(emailInput).toBeInTheDocument();
        expect(passwordInput).toBeInTheDocument();
    });

    test("allows user to type in email and password fields", () => {
        render(<LoginPortal />);

        const emailInput = screen.getByPlaceholderText("Email");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(emailInput, { target: { value: "test@example.com" } });
        fireEvent.change(passwordInput, { target: { value: "password123" } });

        expect(emailInput.value).toBe("test@example.com");
        expect(passwordInput.value).toBe("password123");
    });

    test("renders the Remember Me checkbox and Forgot Password link", () => {
        render(<LoginPortal />);

        const checkbox = screen.getByRole("checkbox");
        const forgotPasswordLink = screen.getByText("Forgot Password?");

        expect(checkbox).toBeInTheDocument();
        expect(forgotPasswordLink).toBeInTheDocument();
        expect(forgotPasswordLink).toHaveAttribute("href", "#");
    });

    test("renders and clicks the Sign In button", () => {
        render(<LoginPortal />);

        const signInButton = screen.getByRole("button", { name: /sign in/i });
        expect(signInButton).toBeInTheDocument();

        fireEvent.click(signInButton);
    });
});
