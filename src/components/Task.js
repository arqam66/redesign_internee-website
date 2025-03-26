import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useRef } from "react";

function TaskPortal() {
    const controlsImage = useAnimation();
    const controlsText = useAnimation();
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controlsImage.start({ x: 0, opacity: 1 });
                    controlsText.start({ y: 0, opacity: 1 });
                } else {
                    controlsImage.start({ x: "-100%", opacity: 0 });
                    controlsText.start({ y: "100%", opacity: 0 });
                }
            },
            { threshold: 0.2 } // Trigger animation when 20% of the section is in view
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [controlsImage, controlsText]);

    return (
        <section ref={sectionRef} id="task-portal-section" className="py-16 bg-white-50 overflow-y-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Image */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={controlsImage}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/virtual-intern.jpg"
                        alt="Task Portal"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Right Section - Text */}
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={controlsText}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="w-full md:w-1/2"
                >
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Our own task portal
                    </h3>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Manage Project Via Own Task Portal
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Welcome to internee.pk task portal, where tasks transform into skills.
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
                                    Hands on Projects
                                </h4>
                                <p className="text-gray-600">
                                    Dive into hands-on projects that simulate real-world scenarios. From coding challenges to creative projects, every task is crafted to impart practical skills.
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
                                    SDLC Techniques
                                </h4>
                                <p className="text-gray-600">
                                    Understand the Software Development Life Cycle (SDLC) and boost your project management proficiency.
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
                                    Easy to Understand
                                </h4>
                                <p className="text-gray-600">
                                    Tasks are designed to be easily comprehensible, ensuring a smooth learning experience for everyone.
                                </p>
                            </div>
                        </div>

                        {/* New Section - How to Represent Yourself */}
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
                                    How to represent yourself
                                </h4>
                                <p className="text-gray-600">
                                    More than just completing tasks, it empowers you to showcase your journey. Every completed task contributes to your digital portfolio, a dynamic representation of your skills and accomplishments. Let your work speak volumes about your capabilities.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default TaskPortal;
