import React from "react";
import { render, screen } from "@testing-library/react";
import Footer from "../components/Footer"; // Adjust the import path if necessary

describe("Footer Component", () => {
  test("renders footer container", () => {
    render(<Footer />);
    
    // Check if footer is in the document
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("renders company information", () => {
    render(<Footer />);

    expect(screen.getByText("info@internee.pk")).toBeInTheDocument();
    expect(screen.getByText("+92312-3023645")).toBeInTheDocument();
    expect(screen.getByText("NIC Karachi, NED University")).toBeInTheDocument();
  });

  test("renders company links", () => {
    render(<Footer />);

    expect(screen.getByText("Contact Us")).toBeInTheDocument();
    expect(screen.getByText("Internships")).toBeInTheDocument();
    expect(screen.getByRole("link", { name: /Company/i })).toBeInTheDocument();

  });

  test("renders help section links", () => {
    render(<Footer />);

    expect(screen.getByText("Job Portal")).toBeInTheDocument();
    expect(screen.getByText("Task Portal")).toBeInTheDocument();
    expect(screen.getByText("LMS")).toBeInTheDocument();
  });

  test("renders subscription section", () => {
    render(<Footer />);

    // Check if subscription section is present
    expect(screen.getByText("Subscribe to Newsletter")).toBeInTheDocument();

    // Check input field presence
    const emailInput = screen.getByPlaceholderText("Enter your email");
    expect(emailInput).toBeInTheDocument();

    // Check button presence
    const subscribeButton = screen.getByRole("button", { name: "Subscribe" });
    expect(subscribeButton).toBeInTheDocument();
  });

  test("renders copyright text", () => {
    render(<Footer />);
    
    // Check if copyright text is present
    expect(screen.getByText("© 2025 Internee.pk. All rights reserved.")).toBeInTheDocument();
  });
});
