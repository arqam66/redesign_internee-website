import React from "react";
import { useNavigate } from "react-router-dom";

function FeaturedOpp({ title, location, duration, type, mode, logo }) {
    const navigate = useNavigate();
    return (
        <div className="flex items-center justify-between bg-white shadow-md rounded-lg p-4 mb-4 border border-green-500">
            <div className="flex items-center space-x-4">
                <img src={logo} alt={`${title} Logo`} className="w-16 h-16 rounded-full" />
                <div>
                    <h3 className="text-lg font-bold">{title}</h3>
                    <p className="text-gray-600 flex items-center">
                        <span className="text-red-500">📍</span> {location}
                    </p>
                    <p className="text-gray-600 flex items-center">
                        <span className="text-green-500">⏱️</span> {duration}
                    </p>
                </div>
            </div>
            <div className="flex flex-col items-end space-y-3">
                <div className="flex space-x-3">
                    <span className="px-3 py-1 bg-black text-white text-sm rounded">{type}</span>
                    <span className="px-3 py-1 bg-black text-white text-sm rounded">{mode}</span>
                </div>
                <div className="mt-2">
                    <button 
                    onClick={()=> navigate("/SignupPage")}
                    className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
  );
}

export default FeaturedOpp;
