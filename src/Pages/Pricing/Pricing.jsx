import React from "react";
import { FaAngleRight, FaCheckCircle } from "react-icons/fa";

function Pricing() {

    const pricingPlans = [
        {
          name: "BASIC PACKAGE",
          price: "₹6999/Year",
          features: [
            "Home Page Slider",
            "Front-end Unique Design",
            "Domain Registration",
            "Web Hosting",
            "Admin Panel",
            "Logo Design",
            "Email Hosting",
            "Bulk SMS",
            "Tech Support",
            "Photo Gallery",
            "Mobile Version",
          ],
        },
        {
          name: "STANDARD PACKAGE",
          price: "₹12000/Year",
          features: [
            "Home Page Slider",
            "Front-end Unique Design",
            "Domain Registration",
            "Web Hosting",
            "Admin Panel",
            "Logo Design",
            "Email Hosting",
            "Bulk SMS",
            "Tech Support",
            "Photo Gallery",
            "Mobile Version",
          ],
        },
        {
          name: "PREMIUM PACKAGE",
          price: "₹19000/Year",
          features: [
            "Home Page Slider",
            "Front-end Unique Design",
            "Domain Registration",
            "Web Hosting",
            "Admin Panel",
            "Logo Design",
            "Email Hosting",
            "Bulk SMS",
            "Tech Support",
            "Photo Gallery",
            "Mobile Version",
          ],
        },
      ];
  return (
    <div className="">
      {/* services */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Pricing</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">Pricing</span>
        </div>
      </div>

      {/* Card */}
      <div className="min-h-screen bg-gray-100 py-12 px-4 lg:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900">Our Pricing Plans</h1>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Below is our price list for website development and designing services. Choose the plan that fits your needs, or contact us for a custom quote.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 border-b-4  border-blue-500 hover:shadow-lg hover:-translate-y-2 transition-all duration-300"
          >
            <h2 className="text-xl font-bold text-center text-blue-600">{plan.name}</h2>
            <p className="text-center text-gray-700 font-semibold text-lg mt-2">{plan.price}</p>
            <hr className="my-4" />
            
            {/* Features List */}
            <ul className="space-y-2 text-gray-600">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <FaCheckCircle  className="text-blue-600" /> {feature}
                </li>
              ))}
            </ul>

            {/* Purchase Button */}
            <div className="mt-6 text-center">
              <button className="bg-blue-600 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-700 transition-all duration-300">
                Purchase
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Pricing;
