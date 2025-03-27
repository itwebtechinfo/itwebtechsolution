import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ClientFeedback() {
  const testimonials = [
    {
      name: "Vikash Singh",
      feedback:
        "Positive approach towards education industry by providing them extra-ordinary systematic framework.. best wishes with you all...",
        image: "user.PNG",    },
    {
      name: "Rahul Tiwari",
      feedback:
        "This software company provides good service and very good work on software design. As per my best knowledge.",
        image: "user.PNG",    },
    {
      name: "Madan Mohan",
      feedback:
        "Thanks to It Web Tech Solution for providing us a good website",
      image: "user.PNG",
    },
  ];

  return (
    <div className="bg-[#0A0A32]  py-16 px-20 relative overflow-hidden">
      {/* Floating Circles */}
      <div className="absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full top-10 left-10"></div>
      <div className="absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full top-24 right-20"></div>
      <div className="absolute w-6 h-6 bg-white border-4 border-blue-500 rounded-full bottom-10 left-1/2"></div>

      <div className="text-center">
        <p className="text-blue-400 font-semibold">Our Clients</p>
        <h2 className="text-white text-3xl font-bold">
          Our Clients Feedback
        </h2>
      </div>

      {/* Swiper Slider */}
      <div className="mt-10 px-10">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3000 }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
               <div className="flex  gap-4 p-0 ">
               <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 border rounded-full "
                />
                <h3 className="text-xl  font-semibold mt-3">
                  {testimonial.name}
                </h3>
               </div>
                <p className="text-gray-500 text-left py-2 mt-2">{testimonial.feedback}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
