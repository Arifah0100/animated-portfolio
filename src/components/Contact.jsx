
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";
import { IoLogoLinkedin, IoLogoTwitter } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialIcons = [BiLogoGmail, IoLogoLinkedin, IoLogoTwitter, BsGithub];

  return (
    <motion.section ref={ref} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="relative overflow-hidden bg-[#020617] text-white lg:my-16 my-8 px-5 lg:px-28 py-16 lg:py-20" id="contact">
      <div className="absolute top-10 left-10 w-40 h-40 bg-fuchsia-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-52 h-52 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <motion.h2 initial={{ y: -30, opacity: 0 }} animate={isInView ? { y: 0, opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="relative z-10 text-2xl lg:text-4xl text-center font-light">
        Contact <span className="font-extrabold bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">Me</span>
      </motion.h2>

      <div className="relative z-10 flex justify-between items-center mt-10 lg:mt-16 flex-col lg:flex-row gap-12 lg:gap-20">
        <motion.div initial={{ x: -50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="lg:w-[48%] w-full">
          <form action="https://formspree.io/f/mvzjeknl" method="POST" className="w-full space-y-4 lg:space-y-5">
            <input className="bg-white/5 backdrop-blur-sm border border-purple-500/20 focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-400/10 outline-none px-5 py-3.5 text-white rounded-xl placeholder:text-white/35 text-sm w-full transition-all duration-300" type="text" name="name" placeholder="Your name" required />
            <input className="bg-white/5 backdrop-blur-sm border border-purple-500/20 focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-400/10 outline-none px-5 py-3.5 text-white rounded-xl placeholder:text-white/35 text-sm w-full transition-all duration-300" type="email" name="email" placeholder="Email" required />
            <input className="bg-white/5 backdrop-blur-sm border border-purple-500/20 focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-400/10 outline-none px-5 py-3.5 text-white rounded-xl placeholder:text-white/35 text-sm w-full transition-all duration-300" type="text" name="website" placeholder="Your website (If exists)" />
            <textarea className="bg-white/5 backdrop-blur-sm border border-purple-500/20 focus:border-fuchsia-400/70 focus:ring-2 focus:ring-fuchsia-400/10 outline-none px-5 py-3.5 h-36 text-white resize-none rounded-xl placeholder:text-white/35 text-sm w-full transition-all duration-300" name="message" placeholder="How can I help?*" required></textarea>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="flex justify-between items-center gap-4 flex-col sm:flex-row">
              <motion.button initial={{ opacity: 0, y: 5 }} animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0 }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }} whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(217,70,239,0.45)" }} whileTap={{ scale: 0.95 }} type="submit" className="bg-gradient-to-r from-purple-700 to-fuchsia-500 text-white border-2 border-fuchsia-400 hover:from-fuchsia-500 hover:to-purple-700 transition-all cursor-pointer rounded-xl px-6 py-3 flex items-center justify-center gap-x-3 font-bold shadow-[0_0_20px_rgba(217,70,239,0.25)]">
                Get In Touch
              </motion.button>

              <div className="flex items-center gap-3">
                {socialIcons.map((Icon, index) => (
                  <motion.a key={index} href="#" data-cursor="card" className="relative group p-3 rounded-xl bg-white/5 border border-purple-500/20 text-white/70 overflow-hidden transition-all duration-300" whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.9 }}>
                    <span className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    <Icon className="relative z-10 w-5 h-5 group-hover:text-cyan-300 transition-colors duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </form>
        </motion.div>

        <motion.div initial={{ x: 50, opacity: 0 }} animate={isInView ? { x: 0, opacity: 1 } : { opacity: 0 }} transition={{ duration: 0.8 }} className="lg:w-[45%] w-full">
          <div className="font-extrabold text-3xl lg:text-5xl leading-tight space-y-1 lg:space-y-2">
            <h2 className="text-white">Let's <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">talk</span> for</h2>
            <h2 className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400">Something special</h2>
          </div>

          <p className="text-white/50 text-sm leading-6 lg:text-base mt-5 lg:mt-6 max-w-lg">I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.</p>

          <div className="font-semibold text-sm lg:text-lg flex flex-col mt-7 gap-4">
            <motion.a whileHover={{ x: 6 }} className="flex items-center gap-3 group text-white/80 hover:text-white transition-colors duration-300" href="mailto:arifahabdulbasit@gmail.com">
              <span className="p-2 rounded-full bg-fuchsia-500/10 border border-fuchsia-500/20 group-hover:border-fuchsia-400/60 group-hover:bg-fuchsia-500/20 transition-all duration-300">
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5 text-fuchsia-400" />
              </span>
              arifahabdulbasit@gmail.com
            </motion.a>

            <motion.a whileHover={{ x: 6 }} className="flex items-center gap-3 group text-white/80 hover:text-white transition-colors duration-300" href="tel:1234567890">
              <span className="p-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 group-hover:border-cyan-400/60 group-hover:bg-cyan-500/20 transition-all duration-300">
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4 text-cyan-300" />
              </span>
              1234567890
            </motion.a>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}