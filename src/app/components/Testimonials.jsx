"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

const Testimonials = () => {
  return (
    <section className="my-[2rem] mx-auto overflow-hidden p-[1rem]">
      <h2 className="my-[1rem] text-center font-[family-name:var(--font-aclonica)] text-4xl text-[var(--primary)]">
        Hear what others had to say&hellip;
      </h2>
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          pauseOnMouseEnter: false,
        }}
        effect="slide"
        fadeEffect={{ crossFade: true }}
        speed={3000}
        allowTouchMove={true}
        className="w-full md:w-2/4 my-[2rem]"
      >
        {[
          {
            text: "She's so patient with students and makes sure you perfect your skill...Great work Dulsie and team",
            name: "Joy Gombera",
          },
          {
            text: "Very patient with her students, I really enjoyed her classes excellent!!",
            name: "Regina Zhakata",
          },
          {
            text: "We call her Dee Cakes!!!! This woman is amazing at what she does... To those who can, take advantage!! She's knows her stuff... Keep it up Dulsie👏🏿👏🏿👏🏿👊🏿👊🏿👊🏿",
            name: "Dereck Mukuku",
          },
          {
            text: "The best of the best. She makes food speak languages, the languages of heaven.",
            name: "Tinashe Bvirindi",
          },
          {
            text: "It is a top choice for future chefs and food lovers. This outstanding cooking school provides a wide variety of classes for all skill levels, from beginners to advanced cooks. With a strong emphasis on hands-on experience, students participate in practical sessions that focus on technique, creativity, and flavor enhancement.",
            name: "Su San",
          },
          {
            text: "The only place to be in Harare when you want to demystify cooking. I learnt a lot in a group of beginners like myself.",
            name: "Adama Konseiga",
          },
        ].map((item, index) => (
          <SwiperSlide
            key={`testimonial-${index}`}
            className="w-full bg-[var(--secondary)] rounded-md p-2 text-lg testimonial cursor-pointer"
          >
            <p className="text-2xl text-[var(--primary)]">
              <span className="inline md:hidden text-black">
                {item.text.slice(0, 200)}
                {item.text.length > 200 ? "..." : ""}
              </span>
              <span className="hidden md:inline text-black">{item.text}</span>
            </p>
            <span className="text-[var(--primary)] font-bold italic">
              ~{item.name}
            </span>
          </SwiperSlide>
        ))}
      </Swiper>
      <a
        href="https://www.google.com/search?q=dulsie+kys+cooking+school&rlz=1C1CHZO_enZW1044ZW1044&oq=dulsie+kys+cooking+school&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQABjvBTIKCAIQABiABBiiBDIKCAMQABiABBiiBDIKCAQQABiABBiiBDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPdIBCDg0NjZqMGo5qAIAsAIB&sourceid=chrome&ie=UTF-8#lrd=0x1931b1f34847a105:0xee61d0d757f50663,1,,,,"
        target="_blank"
        className="mx-auto block max-w-[15rem] text-center bg-[var(--secondary)] text-white p-4 rounded-2xl text-xl cursor-pointer hover:opacity-90"
      >
        Read More Reviews
      </a>
    </section>
  );
};

export default Testimonials;
