import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn, staggerContainer } from "../utils/motion";
import ServicesCard from "./ServicesCard";

const Hero = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="home"
      className="hero py-10 flex justify-center "
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="z-10 hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
      >
        <ServicesCard />
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start min-w-2/3">
          <div className="font-garamond text-3xl font-black md:text-7xl">
            veritas managed solutions, inc.
            <div className="h-[4.5rem] md:h-[9rem] md:w-[720px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<span class="text-primary">Cabling and Infrastructure</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">Wireless Solutions</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">Security Systems</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">Audio Visual</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">IT Services</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">Managed Services</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-primary">Consultation</span>`)
                    .pauseFor(2500)
                    .start();
                }}
                options={{
                  loop: true,
                  delay: 30,
                  cursor: "|",
                  parseHTML: true,
                }}
              />
            </div>
            <span className="text-info font-garamond">est. 2009</span>
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-garamond shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="btn btn-ghost md:btn-lg rounded-full font-garamond font-light"
            >
              See our work
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
