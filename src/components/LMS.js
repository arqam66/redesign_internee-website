import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

function LMS() {
    const controlsImage = useAnimation();
    const controlsText = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            const elementPosition = document.getElementById("lms-section")?.offsetTop;

            if (elementPosition && scrollPosition + viewportHeight > elementPosition + 100) {
                controlsImage.start({ x: 0, opacity: 1 });
                controlsText.start({ y: 0, opacity: 1 });
            } else {
                controlsImage.start({ x: "100%", opacity: 0 });
                controlsText.start({ y: "100%", opacity: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controlsImage, controlsText]);

    return (
        <section id="lms-section" className="py-16 bg-white-50 overflow-y-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Text */}
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={controlsText}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">Our LMS</h3>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Guided Tutorials in Learning Management System
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Want to learn something but don't know what's the roadmap or your English is not too good?
                        That's why we launched LMS for you.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M12 6v12m6-6H6"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Sell Courses and Earn
                                </h4>
                                <p className="text-gray-600">
                                    Are you an expert in your field? Share your knowledge on our LMS. Create and sell courses, or contribute as an instructor. Empower others while earning rewards.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M9 5v14l7-7-7-7z"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Certification
                                </h4>
                                <p className="text-gray-600">
                                    Complete courses on our LMS and earn certifications that validate your expertise. Showcase your accomplishments to employers and stand out.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M8 16l4-4-4-4m4 8l4-4-4-4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Courses in Urdu
                                </h4>
                                <p className="text-gray-600">
                                    Dive into the world of knowledge with our courses in Urdu. Breaking language barriers, our LMS ensures accessible education for everyone.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-green-100 p-3 rounded-full">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6 text-green-600"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3 10h11m-6-7h6a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2v-5H3m0 0l4-4m-4 4l4 4"
                                    />
                                </svg>
                            </div>
                            <div>
                                <h4 className="text-lg font-semibold text-gray-800">
                                    Practice Exercises
                                </h4>
                                <p className="text-gray-600">
                                    Our LMS goes beyond theory by offering practical exercises that challenge and refine your skills.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Right Section - Image */}
                <motion.div
                    initial={{ x: "100%", opacity: 0 }}
                    animate={controlsImage}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/lms.png"
                        alt="LMS Portal"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default LMS;
