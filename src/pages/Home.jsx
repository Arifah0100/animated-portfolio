import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import SocialLinks from "../components/SocialLinks";
import SpaceBackground from "../utils/SpaceBackground";

export default function Home() {
  return (
    <section
      id="home"
      className="
        relative
        overflow-hidden
        bg-[#020617]
        w-full
        min-h-screen
        mt-20
      "
    >

      <SpaceBackground />

      <div className="relative z-10 text-white">
        <div className="flex justify-between py-10 items-center px-5 lg:px-28 lg:flex-row flex-col-reverse">



          <motion.div
            className="lg:w-[45%]"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >

            {/* Introduction */}
            <motion.div
              className="
                text-2xl
                lg:text-5xl
                flex
                flex-col
                mt-8
                lg:mt-0
                gap-2
                lg:gap-5
                text-nowrap
                text-white
              "
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
              <motion.h1
                className="text-white"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                Hello,
              </motion.h1>

              {/* Animated Introduction */}
              <motion.h2
                className="text-white"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
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
                  style={{
                    fontWeight: 600,
                    color: "white",
                  }}
                  repeat={Infinity}
                />
              </motion.h2>

              {/* Software Developer */}
              <motion.h1
                className="text-white"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                <span className="font-extrabold text-white">
                  Software
                </span>{" "}

                <span
                  className="text-white font-extrabold"
                  style={{
                    WebkitTextStroke: "1px white",
                  }}
                >
                  Developer
                </span>
              </motion.h1>

              {/* Location */}
              <motion.h1
                className="text-white"
                variants={{
                  hidden: {
                    opacity: 0,
                    y: 10,
                  },
                  visible: {
                    opacity: 1,
                    y: 0,
                  },
                }}
              >
                Based In{" "}
                <span className="font-extrabold text-white">
                  Philippines.
                </span>
              </motion.h1>

            </motion.div>

            {/* =====================================================
                SOCIAL LINKS
            ===================================================== */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
                duration: 1,
              }}
            >
              <SocialLinks />
            </motion.div>

          </motion.div>

          {/* =====================================================
              RIGHT SIDE - VECTOR
          ===================================================== */}

          <motion.div
            className="lg:w-[65%] w-full relative"
            initial={{
              opacity: 0,
              x: 50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              ease: "easeInOut",
            }}
          >
            <img
              className="w-full object-contain relative lg:left-10"
              src="/assets/about-vector.png"
              alt="Hero Vector"
            />
          </motion.div>

        </div>
      </div>

    </section>
  );
}