import React from "react";
import Internship from "../components/internships";
import Testimonial from "../components/testimonals";
import WhyInternee from "../components/WhyInternee";

function InternshipPage() {
    return (
        <>
        <button
                className="absolute top-35 left-19 bg-green-100 text-green-600 p-2 rounded-full shadow hover:bg-green-200"
                onClick={() => window.history.back()} // Navigates back
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="w-6 h-6"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 19l-7-7 7-7"
                    />
                </svg>
            </button>
            <Internship />
            <Testimonial />
            <WhyInternee/>
        </>
    );
}

export default InternshipPage;
