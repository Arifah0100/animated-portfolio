import React from "react";
import { motion } from "framer-motion";
import { IoLogoLinkedin } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import { BsGithub , BsDiscord} from "react-icons/bs";

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
    {
      icon: BsDiscord,
      url: "https://discordapp.com/users/1460842417207906421",
    },
  ];

  return (
    <div className="flex items-center gap-x-5 mt-10 lg:mt-14">
      {socialLinks.map(({ icon: Icon, url }, index) => (
        <motion.a key={index} href={url} data-cursor="card" className="relative group p-3 rounded-xl bg-white/5 border border-purple-500/20 text-white/70 overflow-hidden transition-all duration-300" whileHover={{ scale: 1.1, y: -3 }} whileTap={{ scale: 0.9 }}>
                         
          <span className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/20 via-purple-500/10 to-cyan-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                          <Icon className="relative z-10 w-5 h-5 group-hover:text-cyan-300 transition-colors duration-300" />
        </motion.a>
      ))}
    </div>
  );
}