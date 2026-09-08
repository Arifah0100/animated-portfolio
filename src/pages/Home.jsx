import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../components/SocialLinks";

export default function Home() {
  return (
    <div className="mt-20" id="home">
      <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">

        {/* Left Side */}
        <motion.div
          className="lg:w-[45%]"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >

          {/* Introduction */}
          <motion.div
            className="text-2xl lg:text-5xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-5 text-nowrap"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {
                opacity: 0,
                y: 20,
              },
              visible: {
                opacity: 1,
                y: 0,
                transition: {
                  staggerChildren: 0.2,
                  ease: "easeInOut",
                },
              },
            }}
          >

            {/* Hello */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Hello,
            </motion.h2>

            {/* Animated Introduction */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <TypeAnimation
                sequence={[
                  "I am Arifah Abdulbasit",
                  1000,
                  "I am a Software Developer",
                  1000,
                  "I am a UI/UX Designer",
                  1000,
                ]}
                speed={10}
                style={{ fontWeight: 600 }}
                repeat={Infinity}
              />
            </motion.h2>

            {/* Mobile App */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="font-extrabold">
                Software Developer
              </span>

              <span
                className="text-white font-extrabold"
                style={{
                  WebkitTextStroke: "1px black",
                }}
              >
                Developer
              </span>
              
            </motion.h2>

            {/* Location */}
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Based In{" "}
              <span className="font-extrabold">
                Philippines.
              </span>
            </motion.h2>

          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.8,
              duration: 1,
            }}
          >
            <SocialLinks />
          </motion.div>

        </motion.div>

        {/* Right Side - Vector */}
        <motion.div
          className="lg:w-[65%] w-full"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{
            duration: 1,
            ease: "easeInOut",
          }}
        >
          <img
            className="h-full w-full"
            src="/assets/about-vector.png"
            alt="Hero Vector"
          />
        </motion.div>

      </div>
    </div>
  );
}
