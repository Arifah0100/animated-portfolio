import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TbDownload } from "react-icons/tb";
import { HiOutlineMenu, HiX } from "react-icons/hi";

export default function Navbar() {
  const [hasShadow, setHasShadow] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setHasShadow(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 110,
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`fixed lg:px-28 px-5 top-0 left-0 w-full z-50 bg-[#020617]/90 backdrop-blur-md p-5 transition-all duration-300 border-b border-purple-500/10 ${hasShadow ? "shadow-[0_4px_30px_rgba(139,92,246,0.15)]" : "shadow-none"}`}
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-20 h-9"></div>
        <ul className="hidden lg:flex items-center gap-x-7 font-semibold text-white/80">
          {["about", "skills", "projects", "contact"].map((section) => (
            <motion.li key={section} className="group" whileHover={{ scale: 1.1 }}>
              <button onClick={() => scrollToSection(section)} className="transition-colors duration-300 group-hover:text-fuchsia-400">
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
              <motion.span className="w-0 transition-all duration-300 group-hover:w-full h-[2px] bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 flex shadow-[0_0_8px_rgba(217,70,239,0.6)]" layout></motion.span>
            </motion.li>
          ))}
        </ul>

        <motion.a href="https://drive.google.com/uc?export=download&id=1TFfWY0-gqW9Eme3rq62BbNroKLmREcgE" className="hidden relative lg:inline-block px-5 py-2.5 font-medium group rounded-lg overflow-hidden" whileHover={{ scale: 1.05 }}>
          <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500 p-[1px]">
            <span className="block w-full h-full rounded-lg bg-[#020617]"></span>
          </span>
          <span className="relative text-white group-hover:text-white flex items-center gap-x-3">
            Resume <TbDownload size={16} className="text-cyan-300 group-hover:text-white" />
          </span>
        </motion.a>

        <motion.button className="lg:hidden text-2xl text-white" onClick={() => setIsOpen(!isOpen)} whileHover={{ scale: 1.2 }}>
          {isOpen ? <HiX /> : <HiOutlineMenu />}
        </motion.button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: 0.3 }} className="lg:hidden fixed top-0 right-0 h-full w-full bg-[#020617] shadow-[0_0_40px_rgba(139,92,246,0.2)] border-l border-purple-500/20">
            <button className="absolute top-5 right-5 text-2xl text-white hover:text-fuchsia-400 transition-colors" onClick={() => setIsOpen(false)}>
              <HiX />
            </button>
            <ul className="flex flex-col items-start ml-16 mt-28 h-full gap-y-6 font-semibold text-white/80">
              {["about", "skills", "projects", "contact"].map((section) => (
                <motion.li key={section} className="border-b border-purple-500/20 pb-1" whileHover={{ scale: 1.1 }}>
                  <button onClick={() => scrollToSection(section)} className="hover:text-fuchsia-400 transition-colors">
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </button>
                </motion.li>
              ))}
              <motion.a href="https://drive.google.com/uc?export=download&id=1TFfWY0-gqW9Eme3rq62BbNroKLmREcgE" className="relative inline-block px-4 py-2 font-semibold group" whileHover={{ scale: 1.1 }}>
                <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-gradient-to-r from-fuchsia-500 to-purple-500 group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                <span className="absolute inset-0 w-full h-full bg-[#020617] border border-purple-400/70 group-hover:bg-gradient-to-r group-hover:from-fuchsia-500 group-hover:to-purple-500 transition-all duration-300"></span>
                <span className="relative text-white flex items-center gap-x-3">
                  Resume <TbDownload size={16} className="text-cyan-300 group-hover:text-white" />
                </span>
              </motion.a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}