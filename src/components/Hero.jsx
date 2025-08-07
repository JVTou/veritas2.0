import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { fadeIn, staggerContainer } from "../utils/motion";

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
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="z-10 hero-content flex-col lg:flex-row-reverse items-center lg:items-start"
      >
        <video
          autoPlay
          loop
          muted
          playsInline
          className="max-w-xs rounded-b-box rounded-t-[14rem] shadow-2xl outline outline-base-content/5 md:max-w-md"
          src="/images/featured/painting.mp4"
        >
          Your browser does not support the video tag.
        </video>
        <div className="text-center lg:text-start flex flex-col justify-center items-center lg:items-start min-w-2/3">
          <div className="font-urbanist text-3xl font-black uppercase md:text-7xl">
            AP Building Maintenance Inc.
            <div className="h-[4.5rem] md:h-[9rem] md:w-[720px]">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(`<span class="text-primary">Painting</span>`)
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(
                      `<span class="text-secondary">Building Maintenance</span>`
                    )
                    .pauseFor(2500)
                    .deleteAll()
                    .typeString(`<span class="text-accent">Electrical</span>`)
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
            <span className="text-info">Serving Southern California</span>
          </div>
          <div className="py-6 flex gap-2 max-lg:justify-center">
            <a
              href="#contactus"
              className="btn btn-neutral md:btn-lg rounded-full font-urbanist shadow-md"
            >
              Contact Us
            </a>
            <a
              href="#projects"
              className="btn btn-ghost md:btn-lg rounded-full font-urbanist font-light"
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
