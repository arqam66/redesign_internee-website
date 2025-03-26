import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "../pages/Home"; // Adjust the path as per your directory structure


describe("Home Component", () => {

    test("renders buttons with correct text", () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Print available elements in the test output
        screen.debug();

        const jobPortalButton = screen.getByRole("button", { name: /job portal/i });
        const lmsButton = screen.getByRole("button", { name: /our lms/i });



        expect(jobPortalButton).toBeInTheDocument();
        expect(lmsButton).toBeInTheDocument();
    });


    test("renders the carousel with images", async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Wait for images to be rendered
        const carouselImage1 = await screen.findByAltText("Slide 1");
        const carouselImage2 = await screen.findByAltText("Slide 2");

        expect(carouselImage1).toBeInTheDocument();
        expect(carouselImage2).toBeInTheDocument();
    });

    test("renders the 'Trusted By' section", () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const trustedByHeading = screen.getByText("Trusted By The Tech Giants");
        expect(trustedByHeading).toBeInTheDocument();
    });

    test("renders the blogs section with cards", () => {
        render(
            <Router>
                <Home />
            </Router>
        );
        const blogCard1 = screen.getByText(
            "Complete all of the task but didn't get certification yet? 🙁"
        );
        const blogCard2 = screen.getByText(
            "Looking to make a meaningful impact in the community? 🌟🎉"
        );
        expect(blogCard1).toBeInTheDocument();
        expect(blogCard2).toBeInTheDocument();
    });

    test("triggers animations on scroll", async () => {
        render(
            <Router>
                <Home />
            </Router>
        );

        // Mock scroll behavior
        fireEvent.scroll(window, { target: { scrollY: 500 } });

        // Wait for the element to appear
        await waitFor(() => {
            expect(screen.getByRole("presentation")).toBeInTheDocument();
        });
    });
})