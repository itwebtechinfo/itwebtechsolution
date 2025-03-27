import React from "react";
import ProjectsShowcase from "./Pages/MainHome/ProjectsShowcase";
import CompanyLogo from "./Pages/MainHome/CompanyLogo";
import ClientFeedback from "./Pages/MainHome/ClientFeedback";
import { Link } from "react-router-dom";

function MainHome() {
  const ITSecurity = [
    {
      title: "Our Approach",
      description:
        "We take up projects with a pinch of realism. Be it in estimating the timeline, preparing the budget.",
      icon: "💡",
    },
    {
      title: "Timely Responses and Deliveries",
      description:
        "All our projects go through different layers of testing and quality assurance.",
      icon: "⏳",
    },
    {
      title: "Our Experience",
      description:
        "Everyone claims to be a digital media expert these days. How many of them..",
      icon: "📊",
    },
    {
      title: "Focus on Quality",
      description:
        "We believe our focus on quality deliverables is what brought us to where we are now.",
      icon: "🎯",
    },
    {
      title: "International Exposure",
      description:
        "Our work spans mission-critical applications for top-tier enterprises, international start-ups.",
      icon: "🌍",
    },
    {
      title: "Going an Extra Mile",
      description:
        "We believe in going that extra mile, beyond just design and development.",
      icon: "🚀",
    },
  ];

  // our services
  const services = [
    {
      title: "Dynamic Website Development",
      image:
        "https://acmeosys.co.in/main/itf_public/services/acme1973384658.jpg",
      icon: "💻",
    },
    {
      title: "Website Maintenance",
      image:
        "https://acmeosys.co.in/main/itf_public/services/acme604636229.jpg",
      icon: "🔧",
    },
    {
      title: "E-Commerce Development",
      image:
        "https://acmeosys.co.in/main/itf_public/services/acme792413641.jpg",
      icon: "🛒",
    },
  ];

  // technology
  const technology = [
    { name: "Android", icon: "🤖" },
    { name: "Web", icon: "💻" },
    { name: "IOS", icon: "🍏" },
    { name: "Adsense", icon: "📺" },
    { name: "PPC", icon: "⚡" },
  ];

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
      {/* <DigitalITService/> */}
      <section className="bg-white dark:bg-gray-900 py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Text Content */}
          <div className="md:w-1/2 space-y-6">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Digital IT Service With Excellent Quality
            </h1>
            <p className="text-gray-600 dark:text-gray-300">
              Excellent quality is the arrangement of measures and methods to
              follow with the end goal of guaranteeing that the quality of an
              item is kept up and enhanced against an arrangement of benchmarks.
            </p>
            <div className="flex gap-4">
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-3 rounded-lg font-medium">
                Become a Suppoter
              </button>
              <Link to={"/contact-us"}>
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-5 py-3 rounded-lg font-medium">
                  Get Quote
                </button>
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2">
            <img src="It_home.jpeg" alt="IT Service" className="rounded-lg " />
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-6xl mx-auto mt-10 grid grid-cols-3 gap-4 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h2 className="text-3xl font-bold text-orange-500">172+</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Projects Completed
            </p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h2 className="text-3xl font-bold text-orange-500">3</h2>
            <p className="text-gray-700 dark:text-gray-300">Products Owned</p>
          </div>
          <div className="bg-gray-100 dark:bg-gray-800 p-5 rounded-lg">
            <h2 className="text-3xl font-bold text-orange-500">2</h2>
            <p className="text-gray-700 dark:text-gray-300">
              Countries Worldwide
            </p>
          </div>
        </div>
      </section>

      {/* SoftwareInnovation */}
      <section className="bg-[#0a1132] text-white py-12 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          {/* Image Section */}
          <div className="md:w-1/2">
            <img
              src="IMG_3578.PNG"
              alt="Office Work"
              className="rounded-lg shadow-lg"
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

      {/* ITSolutions security */}
      <div className="max-w-6xl mx-auto text-center px-4 md:px-20 py-12">
        <h4 className="text-blue-600 font-semibold">IT Security & Computing</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          Searching for a Solution! We Provide <br /> Truly Prominent IT
          Solutions
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {ITSecurity.map((solution, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all"
            >
              <div className="text-3xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p className="text-gray-600 mt-2">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* OurServies */}

      <div className="relative max-w-6xl mx-auto text-center px-4 md:px-20 py-12">
        <h4 className="text-blue-600 font-semibold">Our Services</h4>
        <h2 className="text-3xl md:text-4xl font-bold mt-2">
          We Provide a Wide <br /> Variety of IT Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="relative bg-white hover:text-yellow-500 shadow-md rounded-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-60 object-cover"
              />
              {/* Overlay Container */}
              <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent p-4">
                {/* Service Info Box */}
                <div className="bg-white p-3 rounded-lg shadow-md flex items-center absolute bottom-4 left-4">
                  <span className="text-2xl text-blue-600 mr-2">
                    {service.icon}
                  </span>
                  <h3 className="text-lg font-semibold hover:text-yellow-500">
                    {service.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study
      <ProjectsShowcase /> */}

      {/* HeroSection */}

      <div
        className="relative w-full  h-[300px] flex items-center justify-center bg-gray-800 bg-center"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative text-center text-white px-4">
          <p className="text-yellow-400 font-semibold text-sm md:text-base">
            Let's Talk
          </p>
          <h1 className="text-2xl md:text-4xl font-bold mt-2">
            We Are Adding Kinds of IT <br />
            Services That Help You Grow Success
          </h1>
          <button className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg transition">
            Contact Us
          </button>
        </div>
      </div>

      {/* technology */}
      <div className="text-center py-10  px-20 bg-gray-50">
        <p className="text-blue-500 font-semibold">Technology Index</p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-2">
          We Deliver Our Best Solution With <br /> The Goal of Trusting
        </h2>

        {/* Services */}
        <div className="grid grid-cols-2 py-10 md:grid-cols-5 gap-6 mt-8 px-6">
          {technology.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center  justify-center border border-blue-500 rounded-lg p-6 hover:bg-blue-50 transition"
            >
              <span className="text-4xl text-blue-500">{service.icon}</span>
              <p className="mt-2 text-lg font-semibold text-gray-800">
                {service.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* <CompanyLogo/> */}

      {/* client feedback */}
      <ClientFeedback />

      {/* Latest Blog */}

      {/* <div className="py-12 bg-gray-100">
        <div className="text-center mb-8">
          <p className="text-blue-500 font-semibold">Latest Blog</p>
          <h2 className="text-3xl font-bold">Let's Check Some Latest Blog</h2>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
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
      </div> */}
    </div>
  );
}

export default MainHome;
