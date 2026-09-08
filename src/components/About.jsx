import React from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';

export default function About() {
  return (
    <div
      className="px-5 lg:px-28 flex justify-between flex-col lg:flex-row gap-10"
      id="about"
    >
      {/* Illustration */}
      <motion.div
        className="lg:w-1/2 flex items-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src="/assets/about-me.png"
          alt="About Me Illustration"
          className="w-full"
        />
      </motion.div>

      {/* About Content */}
      <motion.div
        className="lg:w-1/2"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.2,
        }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-[#71717A] text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a Software Developer with a strong foundation in web and mobile
          development. Skilled in building user-friendly applications and
          passionate about clean, efficient code. Adaptable and eager to learn
          new technologies. Seeking an opportunity to grow and contribute to
          impactful projects.
        </p>

        {/* Personal Information */}
        <div className="mt-8 space-y-4">

          {/* Address */}
          <div className="flex items-center gap-3 text-[#71717A]">
            <FiMapPin className="text-xl text-black shrink-0" />
            <span>
              Makati City, Metro Manila, Philippines
            </span>
          </div>

          {/* ZIP Code */}
          <div className="flex items-center gap-3 text-[#71717A]">
            <FiMapPin className="text-xl text-black shrink-0" />
            <span>
              ZIP Code: 1212
            </span>
          </div>

          {/* Email */}
          <div className="flex items-center gap-3 text-[#71717A]">
            <FiMail className="text-xl text-black shrink-0" />
            <a
              href="mailto:your@email.com"
              className="hover:text-black transition"
            >
              arifahabdulbasit@email.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 text-[#71717A]">
            <FiPhone className="text-xl text-black shrink-0" />
            <a
              href="tel:+639XXXXXXXXX"
              className="hover:text-black transition"
            >
              +63 912 155 3815
            </a>
          </div>
        </div>

        {/* Download CV Button */}
        <a
          href="/assets/Your-CV.pdf"
          download
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-black text-white rounded-lg font-medium hover:bg-[#27272A] transition-all duration-300"
        >
          <FiDownload />
          Download CV
        </a>
      </motion.div>
    </div>
  );
}