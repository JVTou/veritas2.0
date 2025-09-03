import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Footer = () => {
  const yearNow = new Date().getFullYear();

  return (
    <motion.section
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="footer"
      className="mt-20"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex w-full flex-col justify-center"
      >
        <div className="flex items-center justify-center py-10 font-garamond text-sm lg:text-lg">
          <h1>© Veritas Managed Solutions, Inc. 2009-{yearNow}. All rights reserved.</h1>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Footer;
