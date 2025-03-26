import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";

function InstructorPortal() {
    const controlsImage = useAnimation();
    const controlsText = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            const elementPosition = document.getElementById("instructor-portal-section")?.offsetTop;

            if (elementPosition && scrollPosition + viewportHeight > elementPosition + 100) {
                controlsImage.start({ x: 0, opacity: 1 });
                controlsText.start({ y: 0, opacity: 1 });
            } else {
                controlsImage.start({ x: "-100%", opacity: 0 });
                controlsText.start({ y: "100%", opacity: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controlsImage, controlsText]);

    return (
        <section id="instructor-portal-section" className="py-16 bg-white-50 overflow-y-hidden">
            <div className="container mx-auto flex flex-col md:flex-row items-center gap-12">
                {/* Left Section - Image */}
                <motion.div
                    initial={{ x: "-100%", opacity: 0 }}
                    animate={controlsImage}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="w-full md:w-1/2"
                >
                    <img
                        src="/instructor.png"
                        alt="Instructor Portal"
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
                        Are you Tech Instructor or Content Creator?
                    </h3>
                    <h2 className="text-3xl font-bold text-green-600 mb-4">
                        Create Courses In Local Language & Generate Income
                    </h2>
                    <p className="text-gray-600 text-lg mb-6">
                        Are you a professional wanting to start your journey as a tech instructor and content creator to make some revenue? Just visit our LMS Instructor Portal.
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
                                    Upload Tutorials & Exercises
                                </h4>
                                <p className="text-gray-600">
                                    Transform your expertise into impactful learning materials. Upload tutorials and exercises to shape the educational experience for countless learners.
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
                                    Generate Revenue
                                </h4>
                                <p className="text-gray-600">
                                    Teach what you love and earn what you deserve. Monetize your expertise, reach a global audience, and make meaningful income from your passion.
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
                                    Instructor Identity
                                </h4>
                                <p className="text-gray-600">
                                    Internee.pk LMS helps instructors build their brand by showcasing their skills and teaching style to create a unique, recognizable identity.
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
                                    Perfect Share Ratio
                                </h4>
                                <p className="text-gray-600">
                                    We ensure transparency and fairness with a perfect share ratio, rewarding your hard work while making sure you get your share.
                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

export default InstructorPortal;
