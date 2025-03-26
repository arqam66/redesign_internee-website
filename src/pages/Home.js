import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { ReactTyped as Typed } from "react-typed"; // Install this using `npm install react-typed`
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Carousel styles
import { Carousel } from "react-responsive-carousel"; // Install using `npm install react-responsive-carousel`
import TaskPortal from "../components/Task";
import LMS from "../components/LMS";
import InstructorPortal from "../components/instructorportal";
import JobPortal from "../components/jobportal";
import Testimonial from "../components/testimonals";
import Internship from "../components/internships";

function Home() {
    const controls = useAnimation();

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const viewportHeight = window.innerHeight;

            // Check if the element is in view
            if (scrollPosition >= viewportHeight / 2) {
                controls.start({ width: "100%" });
            } else {
                controls.start({ width: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [controls]);

    return (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <section className="bg-white-50 py-12">
                <div className="container mx-auto flex flex-col md:flex-row items-center">
                    {/* Left Section */}
                    <div className="md:w-1/2 mb-6 md:mb-0 text-center md:text-left">
                        {/* Adjust Heading */}
                        <div className="mb-20">
                            <h2 className="text-6xl font-bold text-gray-800 mb-4 leading-tight">
                                Looking for dream internship?
                            </h2>
                            <Typed
                                className="text-4xl font-bold text-green-600 mb-4 block"
                                strings={[
                                    "Market Competitive Salary",
                                    "Gain Hands-on Experience",
                                    "Work in Your Desired Domain",
                                ]}
                                typeSpeed={50}
                                backSpeed={60}
                                loop
                            />
                        </div>
                        {/* Description */}
                        <p className="text-gray-600 mt-4 text-lg">
                            Internee.pk kickstarts students' tech careers with first internships, providing industry exposure, practical skills, and networking opportunities, paving the way for their success in the tech industry.
                        </p>
                        {/* Logos and Buttons Section */}
                        <div className="flex flex-col items-center mt-10">
                            <div className="flex space-x-10 justify-center">
                                <img src="/see-pak.png" alt="Logo 1" className="w-18 h-20" />
                                <img src="/NEP.png" alt="Logo 2" className="w-18 h-20" />
                                <img src="/pitb.png" alt="Logo 3" className="w-18 h-20" />
                                <img src="/GC.png" alt="Logo 4" className="w-18 h-20" />
                            </div>
                            {/* Buttons */}
                            <div className="flex space-x-6 mt-8">
                                <div>
                                    <button className="px-6 py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white font-medium">
                                        Job Portal
                                    </button>
                                    <p className="text-gray-500 text-sm mt-2 text-center">Get latest Job Updates</p>
                                </div>
                                <div>
                                    <button className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 font-medium">
                                        Our LMS
                                    </button>
                                    <p className="text-gray-500 text-sm mt-2 text-center">90% Courses are in Urdu</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Section */}
                    <div className="md:w-1/2">
                        <Carousel
                            showThumbs={false}
                            infiniteLoop
                            autoPlay
                            interval={5000}
                            showStatus={false}
                            className="rounded-lg shadow-md"
                        >
                            <div>
                                <img src="/C-1.jpg" alt="Slide 1" className="object-cover" />
                            </div>
                            <div>
                                <img src="/C-2.jpg" alt="Slide 2" className="object-cover" />
                            </div>
                            <div>
                                <img src="/C-3.jpg" alt="Slide 3" className="object-cover" />
                            </div>
                            <div>
                                <img src="/C-4.jpg" alt="Slide 4" className="object-cover" />
                            </div>
                            <div>
                                <img src="/C-5.jpg" alt="Slide 5" className="object-cover" />
                            </div>
                            <div>
                                <img src="/C-6.jpg" alt="Slide 6" className="object-cover" />
                            </div>
                        </Carousel>
                    </div>
                </div>
            </section>

            {/* Green Line Animation */}
            <motion.div
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="h-1 bg-green-600 my-8"
            ></motion.div>

            {/* Trusted By Section */}
            <section className="text-center py-12">
                <h3 className="text-4xl font-bold text-gray-800 mb-8">Trusted By The Tech Giants</h3>
                <div className="flex flex-wrap justify-center items-center space-x-10">
                    {/* Logo 1 */}
                    <a href="https://moitt.gov.pk/" target="_blank" rel="noopener noreferrer">
                        <img src="/MITT.png" alt="Google" className="w-25 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 1 */}
                    <a href="https://www.google.com" target="_blank" rel="noopener noreferrer">
                        <img src="/google.png" alt="Google" className="w-25 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 2 */}
                    <a href="https://www.microsoft.com" target="_blank" rel="noopener noreferrer">
                        <img src="/microsoft.png" alt="Microsoft" className="w-25 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 3 */}
                    <a href="https://ignite.org.pk" target="_blank" rel="noopener noreferrer">
                        <img src="/ignite.png" alt="Ignite" className="w-25 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 4 */}
                    <a href="https://jsbl.com/zindigi" target="_blank" rel="noopener noreferrer">
                        <img src="/zin.png" alt="Zindigi" className="w-27 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 5 */}
                    <a href="https://www.saylaniwelfare.com/smit" target="_blank" rel="noopener noreferrer">
                        <img src="/smit.png" alt="SMIT" className="w-25 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                    {/* Logo 6 */}
                    <a href="https://www.pfla.org.pk" target="_blank" rel="noopener noreferrer">
                        <img src="/pfla.png" alt="Freelancers" className="w-24 h-20 hover:scale-110 transition-transform duration-300" />
                    </a>
                </div>
                {/* What is Internee.pk? */}
                <div className="mt-12">
                    <h3 className="text-3xl font-bold text-gray-800 mb-4">What is internee.pk?</h3>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto">
                        The ultimate platform designed to turbocharge the IT sector in Pakistan! We recognize the immense
                        potential of talented individuals in the country and aim to bridge the gap between them and the thriving
                        IT industry. Internee.pk offers a comprehensive range of virtual internship opportunities exclusively in the IT field.
                    </p>
                </div>
            </section>
            {/* Green Line Animation */}
            <motion.div
                role="presentation"
                initial={{ width: 0 }}
                animate={controls}
                transition={{ duration: 1 }}
                className="h-1 bg-green-600 my-8"
            ></motion.div>

            <Internship/>

            
            {/* Blog Section */}
            <section className="py-12 bg-gray-100">
                <div className="container mx-auto px-4">
                    {/* Section Title */}
                    <h3 className="text-3xl font-bold text-gray-800 text-center mb-4">Our Blog</h3>
                    <h4 className="text-2xl font-bold text-gray-700 text-center mb-8">Recent Blog</h4>

                    {/* Blog Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {/* Blog Card 1 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/certificate.jpeg" alt="Blog 1" className="w-full h-50 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">
                                    Complete all of the task but didn't get certification yet? 🙁
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Drop us a quick email at issues@internee.pk with the subject "Didn't get certification yet".
                                    Our team will swiftly resolve the matter, ensuring you get your recognition promptly.
                                </p>
                            </div>
                        </div>

                        {/* Blog Card 2 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/mentor.jpeg" alt="Blog 2" className="w-full h-50 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">
                                    Looking to make a meaningful impact in the community? 🌟🎉
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Our goal is to make Pakistan an IT Hub. For this, we need more hands-on developers and
                                    tech enthusiasts who will lift Pakistan's IT export into the top tier. 🚀
                                </p>
                            </div>
                        </div>

                        {/* Blog Card 3 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/comunity.jpeg" alt="Blog 3" className="w-full h-50 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-2">
                                    🚀 Calling communities to Empower Students with Internee.pk! ✌️
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    We'd love to discuss how a collaboration with Internee.pk can benefit your universities,
                                    societies, institutes, and educational institutions, especially with students.
                                </p>
                            </div>
                        </div>

                        {/* Blog Card 4 */}
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img src="/expertise.png" alt="Blog 4" className="w-full h-50 object-cover" />
                            <div className="p-4">
                                <h4 className="text-lg font-bold text-gray-800 mb-4">
                                    Ready to Showcase Your Expertise? Follow These Simple Steps! 🌟
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    To complete the process, send us all the task details via email at careers@internee.pk.
                                    This ensures that we have all the necessary information to validate your certification.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Testimonial/>
            
            <TaskPortal />
            <LMS/>
            <InstructorPortal/>
            <JobPortal/>
        </motion.div>

    );

}

export default Home;
