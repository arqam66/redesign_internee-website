import React from "react";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";  // ✅ Use MemoryRouter
import App from "../App";  // ✅ Import only App, not AppWithRouter
import userEvent from "@testing-library/user-event";

// ✅ Helper function to render App without nested Router issues
const renderWithRouter = (initialEntries = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

describe("App Routing and Layout", () => {
  
  test("renders Home page by default", () => {
    renderWithRouter();
    expect(screen.getByText(/Looking for dream internship?/i)).toBeInTheDocument();
  });

  test("renders Internship page when navigating to /InternshipPage", () => {
    renderWithRouter(["/InternshipPage"]);
    expect(screen.getByText(/Internship Opportunities/i)).toBeInTheDocument();
  });

  test("renders Graduate Program page when navigating to /GraduateProgram", () => {
    renderWithRouter(["/GraduateProgram"]);
    expect(screen.getByText(/Graduate Program Details/i)).toBeInTheDocument();
  });

  test("renders Company Collaboration page when navigating to /CompColl", () => {
    renderWithRouter(["/CompColl"]);
    expect(screen.getByText(/Company Collaboration/i)).toBeInTheDocument();
  });

  test("renders Contact page when navigating to /contact", () => {
    renderWithRouter(["/contact"]);
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  });

  test("renders About page when navigating to /about", () => {
    renderWithRouter(["/about"]);
    expect(screen.getByText(/About Our Company/i)).toBeInTheDocument();
  });

  test("hides Header and Footer on LoginPortal page", () => {
    renderWithRouter(["/LoginPortal"]);
    
    expect(screen.queryByTestId("header")).not.toBeInTheDocument();
    expect(screen.queryByTestId("footer")).not.toBeInTheDocument();
  });

  test("shows Header and Footer on all pages except LoginPortal", () => {
    renderWithRouter();
    
    expect(screen.getByTestId("header")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });

  test("navigates correctly when clicking navigation links", async () => {
    renderWithRouter();
    
    // Simulate user clicking on the Internship link
    const internshipLink = screen.getByText(/Internship/i);
    userEvent.click(internshipLink);
    
    // Wait for the new page to render
    expect(await screen.findByText(/Internship Opportunities/i)).toBeInTheDocument();
  });

});
