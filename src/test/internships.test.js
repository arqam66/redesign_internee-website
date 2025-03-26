import React from "react";
import { render, screen } from "@testing-library/react";
import Internship from "../components/internships"; // Adjust the path as needed
import { BrowserRouter } from "react-router-dom";

describe("Internship Component", () => {
  test("renders the heading", () => {
    render(
      <BrowserRouter>
        <Internship />
      </BrowserRouter>
    );

    expect(screen.getByText("Explore Internships")).toBeInTheDocument();
  });

  test("renders all internship cards", () => {
    render(
      <BrowserRouter>
        <Internship />
      </BrowserRouter>
    );

    // Check internship titles
    const internships = [
      "Backend Development",
      "App Development Internship",
      "Graphic Design",
      "Chatbot Development",
      "Frontend Internship",
    ];

    internships.forEach((title) => {
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  test("renders images for each internship", () => {
    render(
      <BrowserRouter>
        <Internship />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Backend Development")).toBeInTheDocument();
    expect(screen.getByAltText("App Development Internship")).toBeInTheDocument();
    expect(screen.getByAltText("Graphic Design")).toBeInTheDocument();
    expect(screen.getByAltText("Chatbot Development")).toBeInTheDocument();
    expect(screen.getByAltText("Frontend Internship")).toBeInTheDocument();
  });

  test("renders 'Apply Now' buttons", () => {
    render(
      <BrowserRouter>
        <Internship />
      </BrowserRouter>
    );

    const buttons = screen.getAllByText("Apply Now");
    expect(buttons).toHaveLength(5);
  });

  test("renders the 'Browse More Internships' button", () => {
    render(
      <BrowserRouter>
        <Internship />
      </BrowserRouter>
    );

    expect(screen.getByText("Browse More Internships")).toBeInTheDocument();
  });
});
