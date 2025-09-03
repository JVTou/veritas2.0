import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../utils/motion";

const Team = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      id="team"
      className="flex flex-col items-center justify-center font-garamond"
    >
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="flex flex-col items-center justify-center font-garamond"
      >
        <h1 className="z-10 font-garamond text-center text-2xl font-semibold md:text-5xl">
          History
        </h1>
      </motion.div>
      
      <motion.div
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-10 sm:mx-16 lg:mx-64"
      >
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical font-garamond">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end font-garamond">
              <time className="font-mono italic">1980s</time>
              <div className="text-lg font-black font-garamond">Tom P. Tuttle</div>
              <strong className="font-garamond">Tom Tuttle</strong> began his career in telecommunications at Pac
              Bell, gaining significant expertise in the field. His time there laid the
              foundation for his later ventures and established him as a trusted industry
              professional.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end mb-10 font-garamond">
              <time className="font-mono italic">1990s</time>
              <div className="text-lg font-black font-garamond">Tim C. Bowdish</div>
              <strong className="font-garamond">Tim Bowdish</strong> started at T&R Communications in the early
              1990s, advancing from technician to Project Manager. His experience managing
              telecom projects sharpened his leadership and technical skills.
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-start mb-10 md:text-end font-garamond">
              <time className="font-mono italic">Early 2000s</time>
              <div className="text-lg font-black font-garamond">Foundation in telecommunications</div>
              <ul>
                <li>
                  <strong className="font-garamond">Tom Tuttle</strong> founded T&R Communications and later joined
                  Netversant Solutions, contributing to its growth.
                </li>
                <br />
                <li>
                  <strong className="font-garamond">Tim Bowdish</strong> also rose through the ranks at Netversant,
                  becoming Director of Northern California and focusing on project success
                  and operational excellence.
                </li>
              </ul>
            </div>
            <hr />
          </li>
          <li>
            <hr />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <div className="timeline-end mb-10 font-garamond">
              <time className="font-mono italic">2009</time>
              <div className="text-lg font-black font-garamond">Veritas Managed Solutions, inc.</div>
              In 2009, <strong className="font-garamond">Tom Tuttle</strong> and <strong className="font-garamond">Tim Bowdish</strong> co-founded
              Veritas Managed Solutions Inc., combining decades of industry experience.
              <strong className="font-garamond">Tom Tuttle</strong> managed the financial aspects, while <strong className="font-garamond">
                Tim Bowdish
              </strong> focused on operations and growth, creating a company built on trust and
              integrity.
            </div>
            <hr />
          </li>
        </ul>
      </motion.div>
    </motion.div>
  );
};

export default Team;
