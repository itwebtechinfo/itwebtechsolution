import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function ProjectsShowcase() {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 md:px-20 text-center">
      {/* Section Header */}
      <h4 className="text-blue-600 font-semibold">Case Study</h4>
      <h2 className="text-3xl md:text-4xl font-bold mt-2">
        Introduce Our Projects and <br /> Check Recent Work
      </h2>

      {/* Swiper Slider */}
      <div className="mt-10">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white shadow-lg mb-16 rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-74 object-cover"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

// Sample project data
const projects = [
  { image: "https://acmeosys.co.in/main/itf_public/gal/acme1655883822p2.jpg", title: "Project 1" },
  { image: "https://acmeosys.co.in/main/itf_public/gal/acme1655883822p2.jpg", title: "Project 2" },
  { image: "https://acmeosys.co.in/main/itf_public/gal/acme1655883822p2.jpg", title: "Project 3" },
  { image: "https://acmeosys.co.in/main/itf_public/gal/acme1655883822p2.jpg", title: "Project 4" },
  { image: "https://acmeosys.co.in/main/itf_public/gal/acme1655883822p2.jpg", title: "Project 5" },
];
