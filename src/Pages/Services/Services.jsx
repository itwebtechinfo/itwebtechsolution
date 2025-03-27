import React from "react";
import { FaAngleRight } from "react-icons/fa";

const Services = () => {
  const services = [
    {
      title: "Dynamic Website Development",
      image: "https://acmeosys.co.in/main/itf_public/services/acme1973384658.jpg",
      icon: "💻",
    },
    {
      title: "E-Commerce Development",
      image: "IMG_3587.JPG",
      
      icon: "🛒",
    },
    {
      title: "Website Management",
      image: "IMG_3586.JPG",
      icon: "🔧",
    },
    {
      title: "Website Development",
      image: "IMG_3585.PNG",
      icon: "💻",
    },
    // {
    //   title: "Website Maintenance",
    //   image: "https://acmeosys.co.in/main/itf_public/services/acme604636229.jpg",
    //   icon: "🔧",
    // },
    // {
    //   title: "E-Commerce Development",
    //   image: "https://acmeosys.co.in/main/itf_public/services/acme792413641.jpg",
    //   icon: "🛒",
    // },
  ];

  return (
    <div className="font-sans">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-[#0b0b39] to-[#1e1e5d] text-white py-16 text-center shadow-lg">
        <h1 className="text-4xl font-extrabold tracking-wide uppercase">
          Our Services
        </h1>
        <nav className="mt-3 text-sm flex justify-center items-center gap-3 opacity-90">
          <a
            href="/"
            className="text-gray-200 hover:text-white font-medium transition-colors duration-300 ease-in-out"
          >
            Home
          </a>
          <FaAngleRight className="text-gray-300" />
          <span className="text-gray-300 font-light">Our Services</span>
        </nav>
      </header>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h4 className="text-blue-700 font-semibold uppercase tracking-wider text-sm">
            What We Offer
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-3 leading-tight">
            Comprehensive IT Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent opacity-90 p-6 flex items-end">
                  <div className="bg-white/95 backdrop-blur-sm p-4 rounded-xl flex items-center w-full transform transition-all duration-300 group-hover:bg-blue-50">
                    <span className="text-3xl text-blue-600 mr-3">
                      {service.icon}
                    </span>
                    <h3 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;