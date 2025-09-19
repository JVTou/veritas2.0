import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
const testimonials = [
  {
    name: "Sarah Chen",
    position: "IT Director, TechCorp Solutions",
    quote:
      "Veritas transformed our network infrastructure completely. Their team's expertise in wireless solutions and security systems exceeded our expectations. We've seen a 40% improvement in network reliability since implementation.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Michael Rodriguez",
    position: "Operations Manager, Bay Area Manufacturing",
    quote:
      "The CCTV and security installation was flawless. Veritas handled everything from planning to implementation, and their 24/7 support has been invaluable. Our facility security has never been better.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Jennifer Walsh",
    position: "CEO, Silicon Valley Startups",
    quote:
      "Working with Veritas has been a game-changer for our growing company. Their managed IT services allowed us to focus on our core business while they handled all our technology needs. Highly professional and reliable.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "David Kim",
    position: "Facilities Director, Regional Healthcare Group",
    quote:
      "The audiovisual systems Veritas installed across our medical facilities have been outstanding. Their attention to detail and understanding of healthcare requirements made all the difference. Patient experience has improved significantly.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
  {
    name: "Lisa Thompson",
    position: "IT Manager, Financial Services Inc.",
    quote:
      "Veritas's cable infrastructure work was exceptional. They completed our office renovation project on time and under budget. Their team's knowledge of current standards and future-proofing our network was impressive.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  },
];
const Testimonial = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="testimonial"
      className="my-20 flex flex-col items-center justify-center md:my-32"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="z-10 text-center font-garamond text-2xl font-semibold md:text-5xl">
          Testimonials
        </h1>
        <span className="z-10 text-md mt-2 px-2 font-garamond md:mt-4 md:px-5 md:text-xl">
          What Our Clients Says About Us
        </span>
      </motion.div>

      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="max-w-7xl py-10"
      >
        <Swiper
          cssMode={true}
          navigation={false}
          pagination={{ clickable: true }}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Autoplay, Pagination, Mousewheel, Keyboard]}
          className="container mx-4 h-96 rounded-xl border border-base-content/10 max-sm:max-w-sm"
        >
          {testimonials.map((item, index) => (
            <SwiperSlide className="h-full" key={index}>
              <div className="z-10 flex h-full items-center justify-center">
                <figure className="mx-10 mt-10">
                  <blockquote className="text-center font-garamond font-bold leading-8 text-base-content lg:text-3xl">
                    <p>“{item.quote}”</p>
                  </blockquote>
                  <div className="mt-10 flex flex-col items-center">
                    <img
                      className="mx-auto h-14 w-14 rounded-full"
                      src={item.image}
                      alt={item.name}
                    />
                    <div className="mt-4 flex justify-center gap-2 lg:tracking-widest">
                      <div className="font-garamond">{item.name}</div>
                      <div className="text-base-content/50 font-garamond">
                        {item.position}
                      </div>
                    </div>
                  </div>
                </figure>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </motion.div>
  );
};

export default Testimonial;
