import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";
import ProjectsShowcase from "./MainHome/ProjectsShowcase";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function Team() {
  const projects = [
    {
      id: 1,
      name: "Ashish Kumar Gupta",
      description:
        "This is a description of Project One. It showcases innovative solutions.",
      image: "Ashish-removebg-preview.png",
    },
    {
      id: 2,
      name: "Gaurav Gupta,",
      description:
        "A groundbreaking project that delivers high-performance results.",
      image: "Bola-removebg-preview.png",
    },
    {
      id: 3,
      name: "Arvind Dubey,",
      description: "An advanced project featuring cutting-edge technologies.",
      image: "Arvind-removebg-preview.png",
    },
    {
        id: 1,
        name: "Ashish Kumar Gupta",
        description:
          "This is a description of Project One. It showcases innovative solutions.",
        image: "Ashish-removebg-preview.png",
      },
      {
        id: 2,
        name: "Gaurav Gupta,",
        description:
          "A groundbreaking project that delivers high-performance results.",
        image: "Bola-removebg-preview.png",
      },
      {
        id: 3,
        name: "Arvind Dubey,",
        description: "An advanced project featuring cutting-edge technologies.",
        image: "Arvind-removebg-preview.png",
      },
      {
        id: 1,
        name: "Ashish Kumar Gupta",
        description:
          "This is a description of Project One. It showcases innovative solutions.",
        image: "Ashish-removebg-preview.png",
      },
      {
        id: 2,
        name: "Gaurav Gupta,",
        description:
          "A groundbreaking project that delivers high-performance results.",
        image: "Bola-removebg-preview.png",
      },
      {
        id: 3,
        name: "Arvind Dubey,",
        description: "An advanced project featuring cutting-edge technologies.",
        image: "Arvind-removebg-preview.png",
      },
  ];

  

  return (
    <div className="">
      {/* portFoli0 */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Our Team</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          {/* <span className="text-gray-400">Our Team</span> */}
        </div>
      </div>

      {/* pagination */}
      <div className="min-h-screen bg-gray-100 py-12 px-4 lg:px-16">
        <div className="max-w-7xl mx-auto py-12 px-4 md:px-20 text-center">
          {/* Section Header */}
          {/* <h4 className="text-blue-600 font-semibold">Our Team</h4> */}
          <h2 className="text-3xl md:text-4xl font-bold mt-2">
            Our Team
          </h2>

          {/* Swiper Slider */}
          <div className="mt-10">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={3}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              breakpoints={{
                0: { slidesPerView: 1 },
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index}>
                  <div className="bg-gray-800 shadow-lg mb-16 rounded-lg overflow-hidden">
                    {/* Image Section */}
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-64 object-contain"
                    />

                    {/* Project Info */}
                    <div className="p-4">
                      <h2 className="text-xl text-white font-bold text-gray-800">
                        {project.name}
                      </h2>
                      {/* <p className="text-gray-600 text-white mt-2">
                        {project.description}
                      </p> */}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
        {/* <div className="flex justify-center">
          <h1 className="text-4xl">Comming soon...</h1>
        </div> */}

        {/* <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Our Work</h1>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Check out some of our latest projects. Click on the images to explore more.
        </p>
      </div> */}

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentItems.map((project) => (
          <div
            key={project.id}
            className="bg-white shadow-md rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
          >
            <img
              src={project.image}
              alt={`Project ${project.id}`}
              className="w-full h-74 object-cover"
            />
          </div>
        ))}
      </div> */}

        {/* <div className="flex justify-center mt-8 space-x-2">
        <button
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
          className={`px-4 py-2 border rounded-md ${
            currentPage === 1 ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-4 py-2 border rounded-md ${
              currentPage === i + 1 ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {i + 1}
          </button>
        ))}

        <button
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
          className={`px-4 py-2 border rounded-md ${
            currentPage === totalPages ? "bg-gray-300 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          →
        </button>
      </div> */}
      </div>
    </div>
  );
}

export default Team;
