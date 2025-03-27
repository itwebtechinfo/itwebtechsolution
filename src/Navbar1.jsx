import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { BiSolidUpArrow } from "react-icons/bi";
import { useLocation } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const timeoutRef = useRef(null);
  const [activeLink, setActiveLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setActiveLink(location.pathname);
  }, [location.pathname]);

  const handleMouseEnter = (index) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(index);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 100);
  };

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", link: "/" },

    {
      label: "Company",
      submenu: [
        { label: "About Us", link: "/about-us" },
        // { label: "Testimonials", link: "/" },
        { label: "Our Team", link: "/team" },
      ],
    },
    { label: "Services", link: "/services" },
    // { label: "Pricing", link: "/pricing" },
    { label: "Portfolio", link: "/portfolio" },

    {
      label: "Career",
      submenu: [
        { label: "Job Apply", link: "/job-apply" },
        { label: "Volunteer", link: "/" },
        { label: "Track Your Work", link: "/" },
      ],
    },
    // { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  return (
    <>
      <nav className="bg-white">
        {/* Top Bar */}
        {/* <div className="flex md:flex-row flex-col bg-blue-800 md:justify-between justify-center px-4 py-1 text-white item-center">
          <p className="text-center">Yogesh123@gmail.com</p>
          <ul>
            <li className="flex space-x-4 md:justify-between justify-center mt-2 md:mt-0  text-xl">
              <a
                href="https://www.linkedin.com/company/qiconindia/?viewAsMember=true"
                rel="noopener noreferrer"
                className="text-gray-600  text-white hover:text-[#ed1c94] dark:text-white"
              >
                <FaFacebookF size="16px"/>
              </a>
              <a
                href="https://www.instagram.com/biz_with_qicon"
                rel="noopener noreferrer"
                className="text-gray-600 text-white hover:text-[#ed1c94] dark:text-white"
              >
                <FaTwitter size="16px"/>
                
              </a>
              <a
                href="https://www.linkedin.com/company/qiconindia/?viewAsMember=true"
                rel="noopener noreferrer"
                className="text-gray-600  text-white hover:text-[#ed1c94] dark:text-white"
              >
                <FaLinkedinIn size="16px"/>
              </a>
              <a
                href="https://www.instagram.com/biz_with_qicon"
                rel="noopener noreferrer"
                className="text-gray-600 text-white hover:text-[#ed1c94] dark:text-white"
              >
                <FaInstagram size="16px"/>
                
              </a>
            </li>
          </ul>
        </div> */}

        {/* Navbar */}
        <div
          className={`bg-white shadow-md w-full border-b-2 border-yellow-500 z-50 transition-all ${
            isScrolled ? "fixed top-0" : "relative"
          }`}
        >
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              <a href="/">
                <img
                  src="It-web-tech-solution.png"
                  alt="It Web Tech Solution"
                  className="h-20 cursor-pointer w-auto object-cover"
                />
              </a>
              
              <h1 className="font-bold text-2xl -ml-4">It Web Tech Solution</h1>
            </div>

            {/* Mobile Menu Icon */}
            <div className="lg:hidden">
              {mobileMenuOpen ? (
                <FiX
                  className="text-3xl cursor-pointer"
                  onClick={() => setMobileMenuOpen(false)}
                />
              ) : (
                <FiMenu
                  className="text-3xl cursor-pointer"
                  onClick={() => setMobileMenuOpen(true)}
                />
              )}
            </div>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex space-x-6">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="relative group"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className={`flex items-center space-x-1 transition-all cursor-pointer ${
                      activeLink === item.link
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-700 hover:text-blue-500 hover:border-b-2 hover:border-blue-500"
                    }`}
                  >
                    <a href={item.link || "#"} className="font-bold">{item.label}</a>

                    {item.submenu && (
                      <span className="transition-transform  duration-300">
                        {openDropdown === index ? <BiSolidUpArrow /> : "▼"}
                      </span>
                    )}
                  </div>

                  {item.submenu && openDropdown === index && (
                    <ul className="absolute left-0 font-bold mt-2 w-56 bg-white border-l-4 border-blue-500 shadow-lg rounded-lg">
                      {item.submenu.map((subItem, subIndex) => (
                        <li key={subIndex}>
                          <a
                            href={subItem.link}
                            className="block px-4 py-2 border-b-2 rounded text-gray-700 hover:bg-blue-500 transition-all"
                          >
                            {subItem.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
            <a
              href="/contact-us"
              className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
            >
              Get A Quote
            </a>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="lg:hidden bg-white shadow-md p-4 absolute w-full">
              <ul>
                {menuItems.map((item, index) => (
                  <li key={index} className="relative">
                    <div
                      className={`flex justify-between items-center py-2 transition-all cursor-pointer ${
                        activeLink === item.link
                          ? "text-orange-500 border-b-2 border-yellow-500"
                          : "text-gray-700 hover:text-yellow-500"
                      }`}
                      onClick={() =>
                        setOpenDropdown(openDropdown === index ? null : index)
                      }
                    >
                      <div className="flex items-center space-x-1">
                        <a href={item.link || "#"}>{item.label}</a>

                        {item.submenu && (
                          <span className="transition-transform duration-300">
                            {openDropdown === index ? <BiSolidUpArrow /> : "▼"}
                          </span>
                        )}
                      </div>
                    </div>
                    {item.submenu && openDropdown === index && (
                      <ul className="ml-4 bg-gray-100 border-t-4 border-yellow-500 rounded-md p-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <li key={subIndex}>
                            <a
                              href={subItem.link}
                              className="block px-4 py-2 text-gray-700 hover:text-yellow-500 rounded transition-all"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
