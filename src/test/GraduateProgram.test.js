import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import GraduateProgram from "../pages/GraduateProgram";
import JobCategories from "../components/JobCategories";

// Mock JobCategories component
jest.mock("../components/JobCategories", () => () => <div data-testid="job-categories"></div>);

describe("GraduateProgram Component", () => {
    test("renders back button and calls history.back when clicked", () => {
        render(<GraduateProgram />);
    
        // Find the first button element (which is the back button)
        const backButton = screen.getAllByRole("button")[0]; 
        expect(backButton).toBeInTheDocument();
    
        // Mock history.back function
        const historyBackMock = jest.spyOn(window.history, "back").mockImplementation(() => {});
    
        fireEvent.click(backButton);
        expect(historyBackMock).toHaveBeenCalled();
    
        historyBackMock.mockRestore();
    });
    

    test("renders title, description, and buttons", () => {
        render(<GraduateProgram />);

        expect(screen.getByText(/Let's Hire The/i)).toBeInTheDocument();
        expect(screen.getByText(/Platform That Seamlessly Connects Companies/i)).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Start exploring/i })).toBeInTheDocument();
        expect(screen.getByRole("button", { name: /Watch video/i })).toBeInTheDocument();
    });

    test("renders JobCategories component", () => {
        render(<GraduateProgram />);
        expect(screen.getByTestId("job-categories")).toBeInTheDocument();
    });
});
