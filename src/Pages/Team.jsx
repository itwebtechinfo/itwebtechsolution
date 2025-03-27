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
      name: "Arvind Dubey",
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
        name: "Gaurav Gupta",
        description:
          "A groundbreaking project that delivers high-performance results.",
        image: "Bola-removebg-preview.png",
      },
      {
        id: 3,
        name: "Arvind Dubey",
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
        name: "Gaurav Gupta",
        description:
          "A groundbreaking project that delivers high-performance results.",
        image: "Bola-removebg-preview.png",
      },
      {
        id: 3,
        name: "Arvind Dubey",
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
        <div className="max-w-7xl mx-auto  py-12 px-4 md:px-20 text-center">
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
                  <div className="bg-gray-800 shadow-lg mb-16  rounded-lg overflow-hidden">
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
        
      </div>
    </div>
  );
}

export default Team;
