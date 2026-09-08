import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub } from "react-icons/bs";

export default function SocialLinks() {
  const socialLinks = [
    {
      icon: BiLogoGmail,
      url: "https://mail.google.com/mail/u/0/?fs=1&to=arifahabdulbasit@gmail.com&tf=cm",
    },
    {
      icon: IoLogoLinkedin,
      url: "https://www.linkedin.com/in/arifahabdulbasit",
    },
    {
      icon: BsGithub,
      url: "https://github.com/Arifah0100",
    },
  ];

  return (
    <div className="flex items-center gap-x-5 mt-10 lg:mt-14">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <motion.a
          key={index}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-2 lg:p-3 rounded border-2 border-black"
          whileHover={{
            scale: 1.1,
            backgroundColor: "#000",
            color: "#fff",
          }}
          whileTap={{ scale: 0.9 }}
        >
          <Icon className="w-4 h-4 lg:w-5 lg:h-5" />
        </motion.a>
      ))}
    </div>
  );
}