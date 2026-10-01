import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../components/SocialLinks";
import SpaceBackground from "../utils/SpaceBackground";

export default function Home() {
  return (
    <section id="home" className="relative overflow-hidden bg-[#020617] w-full min-h-screen mt-20">
      <SpaceBackground />
      <div className="relative z-10 text-white">
        <div className="flex justify-between py-10 lg:py-20 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">
          <motion.div className="lg:w-[45%]" initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
            <motion.div className="text-xl sm:text-2xl lg:text-4xl flex flex-col mt-8 lg:mt-0 gap-2 lg:gap-4 text-nowrap" initial="hidden" animate="visible" variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2, ease: "easeInOut" } } }}>
              <motion.h1 className="text-white/70 font-light tracking-wide" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>Hello,</motion.h1>
              
              <motion.h2 className="font-semibold tracking-tight" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                <TypeAnimation sequence={["I am Arifah Abdulbasit", 1000, "I am a Software Developer", 1000, "I am a Graphic Designer", 1000]} speed={10} style={{ fontWeight: 700 }} className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.45)]" repeat={Infinity} />
              </motion.h2>
              
              <motion.h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mt-1" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                <span className="text-white">Software</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 via-purple-400 to-pink-400 drop-shadow-[0_0_18px_rgba(217,70,239,0.45)]">Developer</span>
              </motion.h1>

              <motion.h1 className="text-xl sm:text-2xl lg:text-3xl text-white/80 font-light tracking-wide mt-1" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}>
                Based In{" "}
                <span className="font-bold text-cyan-300 drop-shadow-[0_0_12px_rgba(34,211,238,0.55)]">Philippines.</span>
              </motion.h1>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8, duration: 1 }}>
              <SocialLinks />
            </motion.div>

          </motion.div>
          <motion.div className="lg:w-[55%] w-full relative" initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, ease: "easeInOut" }}>
            <img
              className="w-[85%] object-contain relative lg:-left-8 drop-shadow-[0_0_20px_rgba(217,70,239,0.5)]"
              src={`${import.meta.env.BASE_URL}assets/about-vector.png`}
              alt="Home Vector"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}