import React from "react";
import { FaAngleRight } from "react-icons/fa";

function About() {
  return (
    <div>
      {/* services */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">About Us</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">About Us</span>
        </div>
      </div>

      {/* SoftwareInnovation */}
      <section className="bg-[#0a1132] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="IMG_3574.PNG"
              alt="Office Work"
              className="rounded-lg h-[450px] shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h3 className="text-yellow-400 text-lg font-semibold">About Us</h3>
            <h1 className="text-3xl md:text-5xl font-bold">
              Right Partner for Software Innovation
            </h1>
            <p className="text-gray-300">
              It Web Tech Solution was founded in 2019 with a primary focus on
              complete web-based solutions and offers a wide range of portal
              development skills spanning many industries. We are a
              full-service, results-based internet marketing company with
              experience in multiple business verticals like education, finance,
              travel, and e-commerce.
            </p>
            <div className="flex gap-8">
              <div className="flex items-center gap-2">
                <span className="text-xl">💼</span>
                <p className="text-gray-300">Experience</p>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xl">❓</span>
                <p className="text-gray-300">Quick Support</p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Floating Button */}
        {/* <div className="fixed right-0 top-1/3 z-40 bg-blue-600 text-white px-4 py-2 rounded-l-lg cursor-pointer">
          Facebook
        </div> */}
      </section>
    </div>
  );
}

export default About;
