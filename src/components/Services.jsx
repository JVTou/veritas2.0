import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const services = [
  {
    name: "Building Maintenance",
    icon: "../../images/featured/maintenance.jpg",
    description:
      "AP Building Maintenance will do your minor painting touch up to complete siding replacement and repairs of all types.",
  },
  {
    name: "Electrical",
    icon: "../../images/featured/electrical.jpg",
    description:
      "AP Building will provide you with all of your electrical needs. We have a team of experienced electricians ready to take care of you. We perform electrical upgrades of all types.",
  },
  {
    name: "Painting",
    icon: "../../images/featured/painting.jpg",
    description:
      "We perform interior and exterior painting. Full repaints to graffiti removal. We can provide your properties with all of your painting needs.",
  },
];
const Services = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="services"
      className="mt-10 flex flex-col items-center justify-center md:mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center"
      >
        <h1 className="z-10 font-urbanist text-center text-2xl font-semibold md:text-5xl">
          Our Services
        </h1>
        <span className="z-10 text-md font-urbanist mt-2 px-2 text-center md:mt-4 md:px-5 md:text-xl">
          Uncover new paths, explore opportunities and chart your success with
          us.
        </span>
      </motion.div>
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="container mt-10 grid gap-10 p-4 md:grid-cols-2 xl:grid-cols-3"
      >
        {services.map((item, index) => (
          <div
            key={index}
            className="z-10 card max-w-2xl shadow-sm transition duration-300 hover:-translate-y-1"
          >
            <div className="card-body">
              <h2 className="font-urbanist card-title text-3xl font-black">
                {item.name}
              </h2>
              <p className="text-md font-urbanist font-medium opacity-60">
                {item.description}
              </p>
              <figure>
                <img className="p-4" src={item.icon} alt={item.description} />
              </figure>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Services;
