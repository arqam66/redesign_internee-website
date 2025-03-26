import React from "react";

function Footer() {
    return (
        <footer data-testid="footer" className="bg-gray-100 text-gray-600 py-4 mt-6 text-center">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Left Section - Logo and Info */}
                <div>
                    <img
                        src="/logo-intern.png"
                        alt="Internee.pk Logo"
                        className="mb-4"
                    />
                    <p className="text-gray-600">
                        The ultimate platform designed to turbocharge the IT sector in Pakistan.
                    </p>
                    <p className="mt-2 text-green-600 font-semibold">info@internee.pk</p>
                    <p className="text-gray-600">+92312-3023645</p>
                    <p className="text-gray-600">NIC Karachi, NED University</p>

                    {/* Social Media Links */}
                    <div className="flex space-x-4 mt-4">
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-600 transition"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-600 transition"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="text-gray-600 hover:text-green-600 transition"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                {/* Column - Company */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Company</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="/Contact" className="hover:text-green-600 transition">
                                Contact Us
                            </a>
                        </li>
                        <li>
                            <a href="/InternshipPage" className="hover:text-green-600 transition">
                                Internships
                            </a>
                        </li>
                        <li>
                            <a href="/CompColl" className="hover:text-green-600 transition">
                                Company
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Column - Help */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Help</h4>
                    <ul className="space-y-2 text-gray-600">
                        <li>
                            <a href="#" className="hover:text-green-600 transition">
                                Job Portal
                            </a>
                        </li>
                        <li>
                            <a href="/LoginPortal" className="hover:text-green-600 transition">
                                Task Portal
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-green-600 transition">
                                LMS
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Subscribe Section */}
                <div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Subscribe to Newsletter
                    </h4>
                    <form>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full border border-gray-300 rounded-lg py-2 px-4 mb-4 focus:outline-none focus:ring-2 focus:ring-green-600"
                        />
                        <button
                            type="submit"
                            className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                        >
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
            <p>&copy; 2025 Internee.pk. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
