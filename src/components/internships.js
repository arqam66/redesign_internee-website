import React from "react";
import { useNavigate } from "react-router-dom";

function Internship (){
    const navigate = useNavigate();

    const handleCardClick = (path) => {
      navigate(path);
    };

    return (
        <section className="py-12 bg-white-50">
        <div className="container mx-auto px-4">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Explore Internships</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/BackendDevelopment.jpg" alt="Backend Development" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800">Backend Development</h4>
                        <button 
                        onClick={() => handleCardClick("/BackendOpp")}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Apply Now
                        </button>
                    </div>
                </div>
                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/App-Devel.jpg" alt="App Development Internship" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800">App Development Internship</h4>
                        <button 
                        onClick={() => handleCardClick("/AppDevOpp")}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Apply Now
                        </button>
                    </div>
                </div>
                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/graphic.jpg" alt="Graphic Design" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800">Graphic Design</h4>
                        <button 
                        onClick={() => handleCardClick("/GraphicDesOpp")}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Apply Now
                        </button>
                    </div>
                </div>
                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/chatbot.jpg" alt="Chatbot Development" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800">Chatbot Development</h4>
                        <button 
                        onClick={() => handleCardClick("/ChatbotOpp")}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Apply Now
                        </button>
                    </div>
                </div>
                {/* Card 5 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src="/Frontend.jpg" alt="Frontend Internship" className="w-full h-48 object-cover" />
                    <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800">Frontend Internship</h4>
                        <button 
                        onClick={() => handleCardClick("/FrontendOpp")}
                        className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                            Apply Now
                        </button>
                    </div>
                </div>
            </div>
            {/* Browse More Button */}
            <div className="text-center mt-8">
                <button 
                //onClick={() => navigate("/InternshipPage")} 
                className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 font-medium">
                    Browse More Internships
                </button>
            </div>
        </div>
    </section>
    );
}

export default Internship;