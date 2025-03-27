import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaHeadset, FaPaperPlane } from "react-icons/fa";
import { ImArrowUp } from "react-icons/im";
import { FaWhatsapp } from "react-icons/fa";
import { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";
import Chatbot from "./Pages/Chatbot";

export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [showButton, setShowButton] = useState(false);


  const contacts = [
    { location: "Dwarka", number: "917483000400" },
    { location: "Gurugram", number: "916000040010" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer className="bg-gray-800 text-white py-10 px-6">
      <div className="container mx-auto grid md:grid-cols-3 gap-8">
        {/* It Web Tech Solution */}
        <div>
        <div className="flex items-center  space-x-3">
              <a href="/">
                <img
                  src="It-web-tech-solution.png"
                  alt="It Web Tech Solution"
                  className="h-20 cursor-pointer w-auto object-cover"
                />
              </a>
              <h1 className="font-bold text-lg">It Web Tech Solution</h1>
            </div>
          {/* <h2 className="text-2xl font-bold">It Web Tech Solution</h2> */}
          <p className="text-sm mt-4">
            KNOW MORE ABOUT It Web Tech Solution. HERE'S OUR STORY
          </p>
          <p className="text-sm mt-2">
            It Web Tech Solution was founded in 2019 with a primary focus on
            complete Web-based solutions and offers a wide range of services.
          </p>
          <div className="mt-4 p-4 bg-white text-blue-900 rounded-md flex items-center justify-between space-x-6 shadow-md">
          
            <div>
              <p className="text-lg font-semibold">Talk to Our Support</p>
              <p className="text-sm">+91 979 462 9024</p>
            </div>
                <div className=" p-3 rounded-full hover:bg-gray-200">
                <FaHeadset className="text-2xl" />
                </div>
          </div>
        </div>

        {/* Services Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Services</h3>
          <ul className="space-y-2">
            <li>➤ Dynamic Website Development</li>
            <li>➤ Website Maintenance</li>
            <li>➤ E-Commerce Development</li>
          </ul>
        </div>

        {/* Blog Section */}
        {/* <div>
          <h3 className="text-xl font-bold mb-4">Our Blog</h3>
          <ul className="space-y-4">
            <li>
              <p className="font-semibold">Good Meta Description</p>
              <p className="text-xs">19 Oct 2022</p>
            </li>
            <li>
              <p className="font-semibold">Should we need Website</p>
              <p className="text-xs">11 Oct 2018</p>
            </li>
            <li>
              <p className="font-semibold">Advantages of Social Media</p>
              <p className="text-xs">02 Oct 2018</p>
            </li>
          </ul>
        </div> */}

        {/* Newsletter Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">Newsletter</h3>
          <p className="text-sm mb-4">
            A company newsletter can be filled with important company news,
            project updates, customer stories, upcoming events, job postings,
            and more.
          </p>
          <div className="relative z-0">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 py-3 rounded-md text-black"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white p-2 rounded-md">
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-10 text-center text-sm border-t border-gray-500 pt-4">
        <p>
          Copyright © 2019 <span className="font-bold">It Web Tech Solution</span> All Rights Reserved
        </p>
        <div className="mt-2 space-x-4">
          <a href="#" className="hover:text-gray-300">Privacy Policy</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">Terms and Conditions</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">Cancellation and Refund</a>
          <span>•</span>
          <a href="#" className="hover:text-gray-300">Shipping and Delivery</a>
        </div>
      </div>

      <div className="fixed bottom-5 right-5 flex flex-row gap-4 justify-center items-end space-y-3">
        {/* WhatsApp Chat Window */}
        {isOpen && (
          // <div className="bg-white shadow-lg rounded-lg p-4 w-64 border border-gray-200">
          //   <div className="flex justify-between items-center mb-2">
          //     <h3 className="text-green-600 font-semibold">
          //       Start a Conversation
          //     </h3>
          //     <button
          //       onClick={() => setIsOpen(false)}
          //       className="text-gray-500 hover:text-red-500"
          //     >
          //       <IoClose size={20} />
          //     </button>
          //   </div>
          //   <p className="text-sm text-gray-600">
          //     Click on a member below to chat on <b>WhatsApp</b>
          //   </p>
          //   <div className="mt-3 space-y-2">
          //     {contacts.map((contact, index) => (
          //       <a
          //         key={index}
          //         href={`https://wa.me/${contact.number}`}
          //         target="_blank"
          //         rel="noopener noreferrer"
          //         className="flex items-center p-2 border rounded-lg hover:bg-green-100 transition-all"
          //       >
          //         <FaWhatsapp className="text-green-500 text-xl mr-2" />
          //         <div>
          //           <p className="font-medium">{contact.location}</p>
          //           <span className="text-xs text-gray-500">
          //             Support {contact.location}
          //           </span>
          //         </div>
          //       </a>
          //     ))}
          //   </div>
          // </div>

          <Chatbot/>
        )}

        {/* WhatsApp Floating Button */}
        {isOpen ?
        <button 
        onClick={() => setIsOpen(false)}
        className="bg-gray-500 p-4 rounded-lg font-bold text-2xl text-white shadow-lg hover:bg-red-600 transition-all"
        >
            X
        </button>
          :
          <a href="https://api.whatsapp.com/message/AMGSKEWM2TL3M1?autoload=1&app_absent=0">
          <button
          // onClick={() => setIsOpen(true)}
          className="bg-green-500 p-4 rounded-full text-white shadow-lg hover:bg-green-600 transition-all"
        >
          <FaWhatsapp className="text-2xl z-1" />
        </button>
        </a>
        }
        

        {/* Scroll to Top Button */}
        {showButton  && (
        <button
          className="bg-yellow-500 px-4  py-4 rounded-lg text-white shadow-md hover:bg-orange-600 transition-all"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {/* &uarr; */}
          <ImArrowUp />
        </button>
        )}
      </div>
    </footer>
  );
}
