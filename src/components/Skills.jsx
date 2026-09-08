import { useState } from "react";
import { motion } from "framer-motion";
import { FaDatabase, FaJava, FaUnity, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiAndroidstudio, SiXcode, SiJetbrains, SiMysql, SiCplusplus, SiSwift } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { PiFileCSharpLight } from "react-icons/pi";
import SpaceBackground from "../utils/SpaceBackground";

export default function Skills() {
  const [skills] = useState([
    {
      id: 1,
      name: "C#",
      icon: <PiFileCSharpLight size={50} />,
    },
    {
      id: 2,
      name: "C++",
      icon: <SiCplusplus size={50} />,
    },
    {
      id: 3,
      name: "MySQL",
      icon: <SiMysql size={50} />,
    },
    {
      id: 4,
      name: "Swift",
      icon: <SiSwift size={50} />,
    },
    {
      id: 5,
      name: "Objective-C",
      icon: <FaDatabase size={50} />,
    },
    {
      id: 6,
      name: "Java",
      icon: <FaJava size={50} />,
    },
    {
      id: 7,
      name: "Unity",
      icon: <FaUnity size={50} />,
    },
    {
      id: 8,
      name: "Javascript",
      icon: <RiNextjsFill size={50} />,
    },
    {
      id: 9,
      name: "Android Studio",
      icon: <SiAndroidstudio size={50} />,
    },
    {
      id: 10,
      name: "TypeScript",
      icon: <CgFigma size={50} />,
    },
    {
      id: 11,
      name: "JetBrain",
      icon: <SiJetbrains size={50} />,
    },
    {
      id: 12,
      name: "Firebase",
      icon: <RiFirebaseFill size={50} />,
    },
    {
      id: 13,
      name: "Xcode",
      icon: <SiXcode size={50} />,
    },
    {
      id: 14,
      name: "HTML",
      icon: <FaHtml5 size={50} />,
    },
    {
      id: 15,
      name: "CSS",
      icon: <DiCss3 size={50} />,
    },
  ]);

  const [experiences] = useState([
    {
      id: 1,
      company: "EasyBus PH",
      role: "iOS Developer",
      period: "July 2026 - Present",
      description:
        "Develop and maintain iOS applications using Swift and Xcode. Build responsive and user-friendly interfaces with SwiftUI, implement app features and API integrations, and troubleshoot bugs and performance issues. Focus on writing clean, reusable code while improving application functionality and user experience.",
      logo: "/assets/Easybus-logo.jpeg",
    },
    {
      id: 2,
      company: "Kooapps",
      role: "Mobile App Developer",
      period: "June 2023 - Dec 2025",
      description:
        "Developed and maintained mobile applications while working on new features, UI improvements, debugging, and application performance. Collaborated with team members to implement reliable and user-friendly mobile experiences.",
      logo: "/assets/kooapps-logo.png",
    },
    {
      id: 3,
      company: "Ascenders Business Services OPC",
      role: "IT Intern",
      period: "Sept 2022 - Dec 2022",
      description:
        "Assisted with IT-related tasks, software troubleshooting, system support, and technical documentation. Gained practical experience in maintaining systems and supporting day-to-day technology operations.",
      logo: "/assets/ascenders-logo.png",
    },
  ]);

  return (
    <div className="mt-3 lg:mt-16" id="skills">

      {/* =====================================================
          SKILLS
      ===================================================== */}

      <div className="px-5 lg:px-28">

        <motion.h2
          className="text-2xl lg:text-4xl text-center"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 text-lg font-bold mt-7 lg:mt-16 w-full place-items-center gap-y-6 lg:gap-y-12">

          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              className="
                bg-white
                border-2
                hover:bg-black
                hover:text-white
                transition-all
                cursor-pointer
                border-black
                rounded
                p-3
                h-36
                w-36
                lg:h-44
                lg:w-44
                flex
                flex-col
                items-center
                justify-center
                gap-5
              "
              initial={{
                opacity: 0,
                y: 5,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeOut",
                delay: skill.id * 0.1,
              }}
              viewport={{ once: true }}
            >
              {skill.icon}

              <p>{skill.name}</p>
            </motion.div>
          ))}

        </div>
      </div>


      {/* =====================================================
          EXPERIENCE - OUTER SPACE
      ===================================================== */}

      <section
        className="
          relative
          overflow-hidden
          bg-[#020617]
          w-full
          my-8
          py-12
          lg:my-16
          lg:py-20
        "
      >

        {/* ===================================================
            SPACE BACKGROUND
        =================================================== */}

        <SpaceBackground />


        {/* ===================================================
            EXPERIENCE CONTENT
        =================================================== */}

        <div className="relative z-10">

          <motion.h2
            className="text-2xl lg:text-4xl text-center text-white"
            initial={{
              opacity: 0,
              y: -20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
            viewport={{
              once: true,
            }}
          >
            My <span className="font-extrabold">Experience</span>
          </motion.h2>


          {/* =================================================
              TIMELINE
          ================================================= */}

          <div
            className="
              relative
              max-w-7xl
              mx-auto
              px-5
              lg:px-10
              mt-12
              lg:mt-20
            "
          >

            {/* Desktop timeline line */}

            <div
              className="
                hidden
                lg:block
                absolute
                left-1/2
                top-0
                bottom-0
                w-[2px]
                bg-[#52525B]
                -translate-x-1/2
              "
            />


            {/* Mobile timeline line */}

            <div
              className="
                lg:hidden
                absolute
                left-[22px]
                top-0
                bottom-0
                w-[2px]
                bg-[#52525B]
              "
            />


            {/* =================================================
                EXPERIENCE ITEMS
            ================================================= */}

            <div className="space-y-14 lg:space-y-24">

              {experiences.map((exp, index) => {

                const isLeft = index % 2 === 1;

                return (
                  <div
                    key={exp.id}
                    className="
                      relative
                      lg:grid
                      lg:grid-cols-[1fr_80px_1fr]
                      lg:items-start
                    "
                  >

                    {/* =========================================
                        LEFT SIDE
                    ========================================= */}

                    <div
                      className={`hidden lg:block ${
                        isLeft ? "text-right" : ""
                      }`}
                    >

                      {isLeft ? (
                        <TimelineCard
                          exp={exp}
                          align="right"
                          index={index}
                        />
                      ) : (
                        <TimelineDate
                          period={exp.period}
                          align="right"
                        />
                      )}

                    </div>


                    {/* =========================================
                        CENTER NODE
                    ========================================= */}

                    <div
                      className="
                        relative
                        hidden
                        lg:flex
                        justify-center
                      "
                    >

                      <motion.div
                        className="
                          z-10
                          w-5
                          h-5
                          rounded-full
                          bg-fuchsia-500
                          border-4
                          border-[#020617]
                          shadow-[0_0_0_3px_#d946ef]
                        "
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                          delay: index * 0.15,
                        }}
                        viewport={{
                          once: true,
                        }}
                      />

                    </div>


                    {/* =========================================
                        RIGHT SIDE
                    ========================================= */}

                    <div className="hidden lg:block">

                      {isLeft ? (
                        <TimelineDate
                          period={exp.period}
                          align="left"
                        />
                      ) : (
                        <TimelineCard
                          exp={exp}
                          align="left"
                          index={index}
                        />
                      )}

                    </div>


                    {/* =========================================
                        MOBILE
                    ========================================= */}

                    <div
                      className="
                        lg:hidden
                        relative
                        pl-12
                      "
                    >

                      {/* Mobile node */}

                      <motion.div
                        className="
                          absolute
                          left-[13px]
                          top-5
                          z-10
                          w-5
                          h-5
                          rounded-full
                          bg-fuchsia-500
                          border-4
                          border-[#020617]
                          shadow-[0_0_0_3px_#d946ef]
                        "
                        initial={{
                          scale: 0,
                        }}
                        whileInView={{
                          scale: 1,
                        }}
                        transition={{
                          duration: 0.5,
                        }}
                        viewport={{
                          once: true,
                        }}
                      />


                      {/* Date */}

                      <TimelineDate
                        period={exp.period}
                        align="left"
                      />


                      {/* Card */}

                      <TimelineCard
                        exp={exp}
                        align="left"
                        index={index}
                      />

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}


/* =========================================================
   TIMELINE DATE
========================================================= */

function TimelineDate({
  period,
  align = "left",
}) {
  return (
    <div
      className={`
        mb-5
        ${
          align === "right"
            ? "flex justify-end"
            : "flex justify-start"
        }
      `}
    >

      <span
        className="
          inline-flex
          items-center
          justify-center
          px-6
          py-3
          rounded-full
          bg-gradient-to-r
          from-purple-700
          to-fuchsia-500
          text-white
          font-semibold
          text-sm
          lg:text-base
          shadow-lg
          whitespace-nowrap
        "
      >
        {period}
      </span>

    </div>
  );
}


/* =========================================================
   TIMELINE CARD
========================================================= */

function TimelineCard({
  exp,
  align = "left",
  index,
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: align === "right" ? 30 : -30,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{
        once: true,
      }}
      className={`
        relative
        bg-[#18181B]/90
        backdrop-blur-sm
        border
        border-[#3F3F46]
        rounded-xl
        p-5
        lg:p-7
        shadow-xl
        hover:border-fuchsia-500
        hover:bg-[#27272A]/90
        transition-all
        duration-300
        ${
          align === "right"
            ? "text-right"
            : "text-left"
        }
      `}
    >

      <div
        className={`
          absolute
          top-6
          w-2
          h-2
          rounded-full
          bg-fuchsia-500
          ${
            align === "right"
              ? "-right-1"
              : "-left-1"
          }
          hidden
          lg:block
        `}
      />

      <div
        className={`
          flex
          items-center
          gap-4
          ${
            align === "right"
              ? "justify-end"
              : "justify-start"
          }
        `}
      >

        {/* Logo */}

        <div
          className="
            w-12
            h-12
            rounded-lg
            bg-white
            flex
            items-center
            justify-center
            overflow-hidden
            shrink-0
          "
        >

          <img
            src={exp.logo}
            alt={`${exp.company} logo`}
            className="
              w-9
              h-9
              object-contain
            "
          />

        </div>

        {/* Company information */}

        <div>

          <h3
            className="
              text-white
              text-lg
              lg:text-xl
              font-bold
            "
          >
            {exp.role}
          </h3>

          <p
            className="
              text-fuchsia-400
              text-sm
              lg:text-base
              font-medium
            "
          >
            {exp.company}
          </p>

        </div>

      </div>

      <p
        className={`
          text-[#A1A1AA]
          mt-5
          text-sm
          lg:text-base
          leading-7
          font-light
          ${
            align === "right"
              ? "text-right"
              : "text-left"
          }
        `}
      >
        {exp.description}
      </p>


      {/* ===============================================
          VIEW EXPERIENCE
      =============================================== */}

      <div
        className={`
          mt-5
          text-fuchsia-400
          font-medium
          text-sm
          ${
            align === "right"
              ? "text-right"
              : "text-left"
          }
        `}
      >
        View Experience →
      </div>

    </motion.div>
  );
}