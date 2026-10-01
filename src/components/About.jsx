import { motion } from 'framer-motion';
import { FiMapPin, FiMail, FiPhone, FiDownload } from 'react-icons/fi';

export default function About() {
  return (
    <div
      className="relative z-10 px-5 lg:px-28 flex justify-between flex-col lg:flex-row gap-10"
      id="about"
    >
      <motion.div
        className="lg:w-1/2 flex items-center -mt-6 lg:-mt-16"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
        viewport={{ once: true }}
      >
        <img
          src={`${import.meta.env.BASE_URL}assets/about-me.png`}
          alt="About Me Illustration"
          className="w-[75%] mx-auto"
        />

      <motion.div
        className="lg:w-1/2 text-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 10,
          delay: 0.2
        }}
        viewport={{ once: true }}
      >
        <h2 className="lg:text-4xl text-2xl mt-4 lg:mt-0">
          About <span className="font-extrabold">Me</span>
        </h2>

        <p className="text-gray-300 text-sm/6 lg:text-base mt-5 lg:mt-10">
          I'm a Software Developer with a strong foundation in web and mobile development.
          Skilled in building user-friendly applications and passionate about clean, efficient code.
          Adaptable and eager to learn new technologies.
          Seeking an opportunity to grow and contribute to impactful projects.
        </p>

        <div className="mt-8 space-y-4">
          <div className="flex items-center gap-3 text-gray-300">
            <FiMapPin className="text-xl text-white shrink-0" />
            <span>Makati City, Metro Manila, Philippines</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FiMapPin className="text-xl text-white shrink-0" />
            <span>ZIP Code: 1212</span>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FiMail className="text-xl text-white shrink-0" />
            <a
              href="mailto:arifahabdulbasit@email.com"
              className="hover:text-white transition"
            >
              arifahabdulbasit@email.com
            </a>
          </div>

          <div className="flex items-center gap-3 text-gray-300">
            <FiPhone className="text-xl text-white shrink-0" />
            <a
              href="tel:+639121553815"
              className="hover:text-white transition"
            >
              +63 912 155 3815
            </a>
          </div>
        </div>

        <a
          href="https://drive.google.com/uc?export=download&id=1TFfWY0-gqW9Eme3rq62BbNroKLmREcgE"
          download
          className="inline-flex items-center gap-2 mt-8 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-200 transition-all duration-300"
        >
          <FiDownload />
          Download CV
        </a>
        
      </motion.div>
    </div>
  );
}