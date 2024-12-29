import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const IndestriesWeServe = () => {
  const industries = [
    { name: "Technology", color: "bg-blue-100" },
    { name: "Pharma", color: "bg-blue-800 text-white" },
    { name: "Automotive", color: "bg-blue-200" },
    { name: "Healthcare", color: "bg-blue-300" },
    { name: "Finance", color: "bg-blue-400 text-white" },
  ];

  return (
    <div className="industries-section py-8 px-6">
      <div className="container mx-auto max-w-[1240px] px-0 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-light text-grays-800">
            Industries{" "}
            <span className="text-primary-500 font-semibold">We Serve</span>
          </h2>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mt-6"
        >
          {industries.map((industry, index) => (
            <SwiperSlide key={index}>
              <div
                className={`h-64 flex items-center justify-center rounded-lg ${industry.color}`}
              >
                <h3 className="text-lg font-semibold">{industry.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default IndestriesWeServe;
