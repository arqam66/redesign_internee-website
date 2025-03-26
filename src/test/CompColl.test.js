import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import CompColl from "../pages/CompColl";
import GetInTouch from "../components/GetInTouch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Mock GetInTouch component
jest.mock("../components/GetInTouch", () => () => <div data-testid="get-in-touch"></div>);

// Mock FontAwesomeIcon to avoid rendering issues
jest.mock("@fortawesome/react-fontawesome", () => ({
    FontAwesomeIcon: () => <svg data-testid="fa-icon"></svg>,
}));

describe("CompColl Component", () => {
    test("renders back button and calls history.back when clicked", () => {
        render(<CompColl />);

        const backButton = screen.getByRole("button");
        expect(backButton).toBeInTheDocument();

        // Mock history back function
        const historyBackMock = jest.spyOn(window.history, "back").mockImplementation(() => {});

        fireEvent.click(backButton);
        expect(historyBackMock).toHaveBeenCalled();

        historyBackMock.mockRestore();
    });

    test("renders title and description", () => {
        render(<CompColl />);

        expect(
            screen.getByText(/Are You Looking For Hands-On Candidate For Your Company/i)
        ).toBeInTheDocument();
        expect(
            screen.getByText(/Our end goal is to provide the best candidate/i)
        ).toBeInTheDocument();
    });

    test("renders statistics section correctly", () => {
        render(<CompColl />);

        expect(screen.getByText("15", { exact: true })).toBeInTheDocument();

        expect(screen.getByText(/Internship Provided/i)).toBeInTheDocument();

        expect(screen.getByText(/48k\+/i)).toBeInTheDocument();
        expect(screen.getByText(/LinkedIn Family/i)).toBeInTheDocument();

        expect(screen.getByText(/28/i)).toBeInTheDocument();
        expect(screen.getByText(/Courses on LMS/i)).toBeInTheDocument();

        expect(screen.getByText("15", { exact: true })).toBeInTheDocument();

        expect(screen.getByText(/Companies Onboarded/i)).toBeInTheDocument();
    });

    test("renders step-by-step process correctly", () => {
        render(<CompColl />);

        expect(screen.getByText(/Fill The Form Below/i)).toBeInTheDocument();
        expect(screen.getByText(/Provide Details About Your Company/i)).toBeInTheDocument();
        expect(screen.getByText(/Team Will Contact You Within 24 Hrs/i)).toBeInTheDocument();
    });

    test("renders GetInTouch component", () => {
        render(<CompColl />);
        expect(screen.getByTestId("get-in-touch")).toBeInTheDocument();
    });
});
