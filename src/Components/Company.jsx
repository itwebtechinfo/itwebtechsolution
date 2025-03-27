import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

const menuItems = [
  { label: "SEO Service NYC", link: "/SEO-Service-NYC" },
  { label: "SEO Agency in California", link: "/SEO-Agency-in-California" },
  // { label: "Graphic Designing", link: "/graphic-designing" },
  // { label: "Video Marketing", link: "/video-marketing" },
];

const Company = () => {
  const [openDropdown, setOpenDropdown] = useState(false);


  const handleMouseEnter = () => {
    setOpenDropdown(true);
  };

  const handleMouseLeave = (event) => {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      setOpenDropdown(false);
    }
  };

  return (
    <li className="relative" onMouseLeave={handleMouseLeave}>
      {/* Location (Hover to Open Dropdown) */}
      <button
        onMouseEnter={handleMouseEnter}
        className="flex items-center space-x-1 -mt-4 text-black font-bold hover:text-[#ed1c94] focus:outline-none"
      >
        Company ▼
      </button>

      <AnimatePresence>
        {openDropdown && (
          <motion.ul
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bg-white px-2 shadow-lg border-t-4 border-blue-400 rounded-lg py-2 mt-2 w-48 text-start"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            {menuItems.map((item, index) => (
              <li
                key={index}
                className={`py-2 px-1 text-black hover:bg-gray-100 cursor-pointer `}
              >
                <a
                  href={item.link}
                  className="no-underline text-sm text-black hover:text-blue-500"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </li>
  );
};

export default Company;
