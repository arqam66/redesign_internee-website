import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header"; // Adjust the import path if necessary

describe("Header Component", () => {
  test("renders header container", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if header is in the document
    expect(screen.getByTestId("header")).toBeInTheDocument();
  });

  test("renders all navigation links", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if navigation links are present
    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("Internship")).toBeInTheDocument();
    expect(screen.getByText("Graduate Program")).toBeInTheDocument();
    expect(screen.getByText("Company Collaboration")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  test("renders Job Portal button", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if the job portal button is present
    const jobPortalButton = screen.getByRole("button", { name: "Job Portal" });
    expect(jobPortalButton).toBeInTheDocument();
  });

  test("renders login link", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    // Check if login link is present
    const loginLink = screen.getByText("Internee's Login");
    expect(loginLink).toBeInTheDocument();
    expect(loginLink.closest("a")).toHaveAttribute("href", "/LoginPortal");
  });
});
