import React from "react";

function Testimonial() {
  return (
    // Testimonials Section
    <section className="py-10 relative overflow-y-hidden">
      {/* Wrapper for Gradient Background */}
      <div className="absolute inset-0 flex justify-center"></div>
      <div className="absolute inset-x-0 top-40 h-60 bg-gradient-to-r from-green-300 via-blue-300 to-pink-300 opacity-50 mx-auto max-w-5xl rounded-lg"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        {/* Section Title */}
        <h3 className="text-4xl font-bold text-gray-800 mb-4">
          What Students are saying about internee.pk
        </h3>
        <p className="text-gray-600 text-lg mb-12">
          Around 1500+ students have said how good internee.pk helped them in
          their career 👨‍🎓
        </p>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Testimonial Card 1 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "This platform helps students so boost their career with hands-on
              practice with learning as well."
            </p>
            <h4 className="font-bold text-gray-800">Rabia Zain</h4>
            <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
          </div>

          {/* Testimonial Card 2 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "Thanks to internee.pk, I grew up my skills here and now I am
              working as a Flutter Developer in a US company."
            </p>
            <h4 className="font-bold text-gray-800">Kashan Soomro</h4>
            <p className="text-gray-600 text-sm">Karachi, Pakistan</p>
          </div>

          {/* Testimonial Card 3 */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex items-center justify-center mb-4">
              <span className="text-yellow-500 text-xl">★★★★★</span>
            </div>
            <p className="text-gray-700 mb-4">
              "I find internee.pk to be an outstanding place to get hands-on
              experience. Sometimes you have to spend to make a lot of projects."
            </p>
            <h4 className="font-bold text-gray-800">Mohammad Rafiq</h4>
            <p className="text-gray-600 text-sm">Larkana, Pakistan</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
