import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

function JobPortal() {
    const controlsImage = useAnimation();
    const controlsText = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            const elementPosition = document.getElementById("job-portal-section")?.offsetTop;

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
        <section id="job-portal-section" className="py-16 bg-white-50 overflow-y-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Text */}
                <motion.div
                    initial={{ y: "100%", opacity: 0 }}
                    animate={controlsText}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.5 }}
                    className="w-full md:w-1/2"
                >
                    <h3 className="text-4xl font-bold text-gray-800 mb-4">
                        Already have a good skill but looking for a job?
                    </h3>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Job Portal, Ultimate Place To Find The Best Job
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Streamline the approval process with your customer to quickly close the deal, get the sale, and start production.
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
                                    100% Mobile friendly
                                </h4>
                                <p className="text-gray-600">
                                    Enjoy online approvals that work seamlessly across all devices.
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
                                    Speed up the design process
                                </h4>
                                <p className="text-gray-600">
                                    Everything is done online, from mockup to final design.
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
                                    Communicate easier
                                </h4>
                                <p className="text-gray-600">
                                    Add multiple recipients to approvals to reduce email clutter.
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
                                    Add changes faster
                                </h4>
                                <p className="text-gray-600">
                                    Students can add comments to approvals for changes, saving time on finalizing designs.
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
                        src="/job.png"
                        alt="Job Portal"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>
            </div>
        </section>
    );
}

export default JobPortal;
