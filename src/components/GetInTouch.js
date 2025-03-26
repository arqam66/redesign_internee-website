import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faLinkedin, faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faClock } from '@fortawesome/free-solid-svg-icons';

library.add(faTwitter, faLinkedin, faFacebook, faInstagram, faMapMarkerAlt, faClock);


function GetInTouch() {
    return (
        <section className="relative bg-gray-900 text-white py-12">
            <div
                className="absolute inset-0 bg-cover bg-center opacity-50"
                style={{
                    backgroundImage: "url('/C-2.jpg')",
                }}
            ></div>

            <div className="relative container mx-auto flex flex-col md:flex-row items-center gap-8 px-6 md:px-12">
                <div className="md:w-1/2 space-y-6">
                    <h2 className="text-4xl font-bold text-center md:text-left">
                        Get In Touch
                    </h2>
                    <p className="text-center md:text-left">
                        Our doors are always open! Drop by and let’s discuss how we can help you achieve your goals.
                    </p>
                    <div className="space-y-4 text-center md:text-left">
                        <div className="flex items-center gap-4">
                            <span className="text-green-500">
                                <FontAwesomeIcon icon="map-marker-alt" />
                            </span>
                            <p>
                                <strong>Address:</strong> NIC Karachi, NED University Karachi, Pakistan
                            </p>
                        </div>
                        <div className="flex items-start gap-4">
                            <span className="text-green-500">
                                <FontAwesomeIcon icon="clock" />
                            </span>
                            <div>
                                <p><strong>Working Hours:</strong></p>
                                <ul>
                                    <li>Monday to Friday: 9:00 AM - 6:00 PM</li>
                                    <li>Saturday: 10:00 AM - 4:00 PM</li>
                                    <li>Sunday: Closed</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="text-center md:text-left">
                        <button className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700">
                            Get In Touch
                        </button>
                    </div>
                    <div className="mt-4">
                        <p className="text-gray-300 mb-2">Follow us</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:text-white text-lg">
                                <FontAwesomeIcon icon={['fab', 'twitter']} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white text-lg">
                                <FontAwesomeIcon icon={['fab', 'linkedin']} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white text-lg">
                                <FontAwesomeIcon icon={['fab', 'facebook']} />
                            </a>
                            <a href="#" className="text-gray-300 hover:text-white text-lg">
                                <FontAwesomeIcon icon={['fab', 'instagram']} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="md:w-1/2 bg-gray-800 rounded-lg shadow-lg p-8">
                    <h3 className="text-2xl font-bold mb-4 text-center">Contact Form</h3>
                    <form className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-gray-300 mb-1">
                                Full Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Internee.pk"
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-gray-300 mb-1">
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                placeholder="info@internee.pk"
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded"
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-gray-300 mb-1">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                placeholder="Message"
                                className="w-full px-4 py-2 bg-gray-900 text-white border border-gray-700 rounded"
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="px-6 py-3 bg-green-600 text-white rounded hover:bg-green-700 w-full"
                        >
                            Get In Touch
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default GetInTouch;
