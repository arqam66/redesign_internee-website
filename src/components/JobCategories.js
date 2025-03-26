import React from "react";

function JobCategories() {
  const categories = [
    {
      title: "Information Technology",
      image: "/tech.jpg",
    },
    {
      title: "Health Care",
      image: "/doctor.jpg",
    },
    {
      title: "Agriculture",
      image: "/agri.jpg",
    },
    {
      title: "Textile",
      image: "/textile.jpg",
    },
    {
      title: "Engineering",
      image: "/engineer.jpg",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">
          Explore Job Categories
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h4 className="text-lg font-semibold text-gray-800">
                  {category.title}
                </h4>
                <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JobCategories;
