import React from "react";
import JobCategories from "../components/JobCategories";

function GraduateProgram() {
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
            <section className="text-center py-12 bg-white">
                <div className="container mx-auto px-4">
                    {/* Title */}
                    <h1 className="text-5xl font-bold text-gray-800 leading-tight mb-4">
                        Let's Hire The <span className="relative inline-block">
                            <span className="z-10">Best Talent</span>
                            <span className="absolute inset-x-0 bottom-0 h-2 bg-green-400 -z-10"></span>
                        </span> For Organization
                    </h1>
                    {/* Description */}
                    <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-8">
                        Platform That Seamlessly Connects Companies with the Best Talent, Empowering Organizations to Thrive, Innovate, and Build a Strong Foundation for a Brighter and More Successful Future!
                    </p>
                    {/* Buttons */}
                    <div className="flex justify-center space-x-4">
                        <button className="bg-orange-500 text-white px-6 py-3 rounded-md hover:bg-orange-600 font-medium">
                            Start exploring
                        </button>
                        <button className="flex items-center space-x-2 text-black px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-100">
                            <span className="bg-orange-500 w-4 h-4 rounded-full"></span>
                            <span>Watch video</span>
                        </button>
                    </div>
                </div>
            </section>
            <JobCategories />
        </>
    );
}

export default GraduateProgram;
