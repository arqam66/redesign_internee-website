import { Link, useLocation } from "react-router-dom";
import React from "react";

function Header() {
    const location = useLocation();

    const getLinkClass = (path) =>
        location.pathname === path
            ? "text-green-600 font-semibold"
            : "text-gray-700 hover:text-green-600";

    return (
        <header data-testid="header" className="bg-white shadow-md">
            <nav className="container mx-auto flex justify-between items-center py-4 px-4 md:px-8">
                {/* Logo Section */}
                <div className="flex items-center space-x-4">
                    <img
                        src="/logo-intern.png"
                        alt="Internee.pk Logo"
                        className="w-20 h-10"
                    />
                </div>

                {/* Menu Toggle for Mobile */}
                <input
                    type="checkbox"
                    id="menu-toggle"
                    className="hidden peer"
                />
                <label
                    htmlFor="menu-toggle"
                    className="block md:hidden cursor-pointer"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="w-6 h-6 text-gray-700"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4 6h16M4 12h16m-7 6h7"
                        />
                    </svg>
                </label>

                {/* Navigation Links */}
                <ul className="hidden md:flex space-x-6 peer-checked:flex flex-col md:flex-row md:space-x-6 absolute md:static bg-white left-0 right-0 md:left-auto md:right-auto w-full md:w-auto top-14 md:top-auto z-10 md:z-auto p-4 md:p-0 shadow md:shadow-none">
                    <li>
                        <Link to="/" className={getLinkClass("/")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/InternshipPage"
                            className={getLinkClass("/InternshipPage")}
                        >
                            Internship
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/GraduateProgram"
                            className={getLinkClass("/GraduateProgram")}
                        >
                            Graduate Program
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/CompColl"
                            className={getLinkClass("/CompColl")}
                        >
                            Company Collaboration
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/contact"
                            className={getLinkClass("/contact")}
                        >
                            Contact
                        </Link>
                    </li>
                </ul>

                {/* Buttons */}
                <div className="hidden md:flex space-x-4">
                    <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Job Portal
                    </button>
                    <Link
                        to="/LoginPortal"
                        className="border border-green-600 text-green-600 px-4 py-2 rounded hover:bg-green-600 hover:text-white"
                    >
                        Internee's Login
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default Header;
