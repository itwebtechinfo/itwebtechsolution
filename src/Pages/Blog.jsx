import React from "react";
import { FaAngleRight } from "react-icons/fa";

function Blog() {
  const blogs = [
    {
      image: "https://acmeosys.co.in/main/itf_public/blog/acme7860.jpg",
      date: "19 Oct",
      title: "Good Meta Description",
      description:
        "Meta tags give search engines more information about a web page...",
    },
    {
      image: "https://acmeosys.co.in/main/itf_public/blog/acme7860.jpg",
      date: "11 Oct",
      title: "Should we need Website for our business",
      description:
        "This factor plays an important role in spreading your brand...",
    },
    {
      image: "https://acmeosys.co.in/main/itf_public/blog/acme7860.jpg",
      date: "02 Oct",
      title: "Advantages of Social Media Branding",
      description:
        "Social Media Marketing is at the forefront of online marketing...",
    },
  ];
  return (
    <div className="">
      {/* portFoli0 */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Recent Blog</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">Recent Blog</span>
        </div>
      </div>

      {/* Latest Blog */}

      <div className="py-12 bg-gray-100">
        <div className="text-center mb-8">
          <p className="text-blue-500 font-semibold">Latest Blog</p>
          <h2 className="text-3xl font-bold">Let's Check Some Latest Blog</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md hover:text-yellow-500 rounded-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-sm text-gray-500">By Admin</p>
                  <span className="bg-yellow-500 text-white px-3 py-1 rounded text-sm">
                    {blog.date}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">{blog.title}</h3>
                <p className="text-gray-600 text-sm">{blog.description}</p>
                <a
                  href="#"
                  className="text-blue-500 font-medium mt-2 inline-block"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
