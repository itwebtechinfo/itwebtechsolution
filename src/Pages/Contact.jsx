import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { useForm } from "react-hook-form";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <div className="">
      {/* portFoli0 */}
      <div className="bg-[#0b0b39] text-white py-16 text-center">
        <h1 className="text-3xl font-bold">Contact Us</h1>
        <div className="mt-2 text-sm flex justify-center items-center gap-2">
          <a href="/" className="text-gray-300 hover:text-white">
            Home
          </a>
          <FaAngleRight className="text-gray-400" />
          <span className="text-gray-400">Contact Us</span>
        </div>
      </div>

      {/* form */}
      <div className="max-w-5xl mx-auto py-16  ">
        <h2 className="text-2xl font-semibold text-center  mb-16">
          Let's Send Us a Message Below
        </h2>

        <div className="grid  md:grid-cols-3 gap-6">
          {/* Left Contact Info Box */}
          <div className="bg-blue-900  text-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">
              Let's Connect With Us
            </h3>
            <div className="flex items-center gap-4">
              <div className=" rounded-full px-3 bg-gray-200 py-3">📞</div>
              <div>
                <p className="text-[18px] font-semibold">Phone Number</p>
                <p className="mb-3 text-sm">+91 979 462 9024</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 mt-2">
              <div className=" rounded-full  px-3 bg-gray-200 py-3">🌍</div>
              <div>
                <p className="text-[18px] font-semibold">Address</p>
                <p className="mb-3 text-sm">Vill + Post Sakhwaniya kushinagar</p>
              </div>
            </div>

            {/* Contact */}
            <div className="flex items-center gap-4 mt-2">
              <div className=" rounded-full  px-3 bg-gray-200 py-3">✉️</div>
              <div>
                <p className="text-[18px] font-semibold">Contact Info</p>
                <p>itwebtechinfo@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Right Form */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:col-span-2 bg-white p-6 rounded-lg shadow-lg"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Name Field */}
              <div>
                <label className="block text-sm font-medium">Your Name *</label>
                <input
                  {...register("name", { required: "Name is required" })}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Name"
                />
                {errors.name && (
                  <p className="text-red-500 text-xs">{errors.name.message}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-medium">
                  Your Email *
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                      message: "Invalid email format",
                    },
                  })}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Email"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs">{errors.email.message}</p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-medium">
                  Phone Number *
                </label>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Phone Number"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>

              {/* Subject Field */}
              <div>
                <label className="block text-sm font-medium">
                  Your Subject
                </label>
                <input
                  {...register("subject")}
                  className="w-full p-2 border rounded-lg"
                  placeholder="Your Subject"
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="mt-4">
              <label className="block text-sm font-medium">Your Message</label>
              <textarea
                {...register("message")}
                className="w-full p-2 border rounded-lg h-24"
                placeholder="Your Message"
              />
            </div>

            {/* Submit Button */}
            <div className="mt-4 text-right">
              <button
                type="submit"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* location map */}
      <div className="flex flex-col items-center justify-center p-4">
      <h2 className="text-xl font-semibold mb-2">South Ganesh Nagar, Delhi</h2>
      <div className="w-full  h-[400px] overflow-hidden rounded-lg shadow-lg">
        <iframe
          className="w-full h-full border-0 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1757.2819622293625!2d77.29190697838849!3d28.625853583589798!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce39628786f23%3A0x6dfcbeb6ecdf9b9a!2sSouth%20Ganesh%20Nagar%2C%20Delhi!5e0!3m2!1sen!2sin!4v1711545624791!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
    </div>
  );
}

export default Contact;
