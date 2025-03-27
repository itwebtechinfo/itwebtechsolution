import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

function PortFolio() {

    const projects = [
        { id: 1, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 2, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 3, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 4, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 5, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 6, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 7, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 8, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
        { id: 9, image: "https://acmeosys.co.in/main/itf_public/gal/acme1712624895.jpg" },
      ];

    const [currentPage, setCurrentPage] = useState(1);
    const item_per_page = 5;
    const totalPages = Math.ceil(projects.length / item_per_page);
  
    // Get current projects to display
    const indexOfLastItem = currentPage * item_per_page;
    const indexOfFirstItem = indexOfLastItem - item_per_page;
    const currentItems = projects.slice(indexOfFirstItem, indexOfLastItem);
  
  return (
    <div className="">
      {/* portFoli0 */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Portfolio</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">Portfolio</span>
        </div>
      </div>

      {/* pagination */}
      <div className="min-h-screen bg-gray-100 py-12 px-4 lg:px-16">
        <div className="flex justify-center">
          <h1 className="text-4xl">Comming soon...</h1>
        </div>
      
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

export default PortFolio;
