import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faDownload,
    faUsers,
    faHeadphones,
    faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import GetInTouch from "../components/GetInTouch";

function CompColl() {
    const stats = [
        {
            icon: faDownload,
            value: "15k+",
            description: "Internship Provided",
        },
        {
            icon: faUsers,
            value: "48k+",
            description: "LinkedIn Family",
        },
        {
            icon: faHeadphones,
            value: "28",
            description: "Courses on LMS",
        },
        {
            icon: faCheckCircle,
            value: "15",
            description: "Companies Onboarded",
        },
    ];
    const steps = [
        {
            number: 1,
            title: "Fill The Form Below",
            description:
                "Begin by filling out the form below with your basic information. This will help us understand your needs and ensure we connect you with the right team.",
        },
        {
            number: 2,
            title: "Provide Details About Your Company or Organization",
            description:
                "Next, provide specific details about your company or organization. This information helps us tailor our services to suit your requirements and deliver the best results.",
        },
        {
            number: 3,
            title: "Team Will Contact You Within 24 Hrs",
            description:
                "Once you've submitted your details, our team will reach out to you within 24 hours. We'll guide you through the next steps and discuss how we can help you achieve your goals.",
        },
    ];

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
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-800 text-center mb-6">
                        Are You Looking For Hands-On Candidate For Your Company?
                    </h2>
                    <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                        Our end goal is to provide the best candidate for your company for
                        exponential growth. Let’s shake hands and create a win-win situation
                        on both sides.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
                        {stats.map((stat, index) => (
                            <div
                                key={index}
                                className="border-2 border-green-500 rounded-lg p-6 shadow-md"
                            >
                                {/* Font Awesome Icon */}
                                <div className="text-green-500 text-4xl mb-4">
                                    <FontAwesomeIcon icon={stat.icon} />
                                </div>
                                <h3 className="text-3xl font-bold text-gray-800">{stat.value}</h3>
                                <p className="text-gray-600 mt-2">{stat.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-12 bg-white-50">
                <div className="container mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                        How does it work?
                    </h2>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-10">
                        {steps.map((step, index) => (
                            <div
                                key={index}
                                className="flex flex-col items-center space-y-4 max-w-xs"
                            >
                                <div className="flex items-center justify-center w-12 h-12 rounded-full border-2 border-gray-300 text-gray-800 font-bold text-xl">
                                    {step.number}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-800">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">{step.description}</p>
                                {index !== steps.length - 1 && (
                                    <div className="hidden md:block w-20 border-dashed border-t-2 border-gray-300"></div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <GetInTouch/>
        </>
    );
}

export default CompColl;
