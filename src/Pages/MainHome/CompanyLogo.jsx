import React from "react";
import Slider from "react-slick";

function Tect() {
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const logos = [
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "WordPress" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Mailchimp" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Meta" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Google Trends" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Shopify" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "HTML & CSS" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "SEMRush" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Ubersuggest" },
    { image: "https://randomuser.me/api/portraits/men/10.jpg", alt: "Google Analytics" },
  ];

  return (
    <>
      {/* Technology We Use Section Slider */}
      <div className="text-center mb-4  bg-gray-900 overflow-hidden">
        <h2 className="text-blue-500 text-2xl sm:text-4xl font-bold font-serif py-4">
          The Technologies We Employ
        </h2>
        <div className="max-w-screen-xl mx-auto px-4">
          <Slider {...sliderSettings} className="">
            
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Tect;
