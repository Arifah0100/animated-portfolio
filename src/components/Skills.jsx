import { motion } from "framer-motion";
import { skills, experiences } from "../content/skills";
import "../css/Design.css";

export default function Skills() {
  return (
    <div className="mt-3 lg:mt-16" id="skills">
      <div className="px-5 lg:px-28">
        <motion.h2 className="text-2xl lg:text-4xl text-center text-white" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          My <span className="font-extrabold">Skills</span>
        </motion.h2>

        <div className="mt-7 lg:mt-10 overflow-hidden space-y-5 lg:space-y-8 w-full">
          <motion.div className="flex gap-4 lg:gap-6 w-max" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
            {[...skills, ...skills].map((skill, index) => (
              <motion.div key={`row1-${index}`} whileHover={{ scale: 1.12, zIndex: 10 }} transition={{ duration: 0.2 }} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div className="flex gap-4 lg:gap-6 w-max" animate={{ x: ["-50%", "0%"] }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }}>
            {[...skills, ...skills].map((skill, index) => (
              <motion.div key={`row2-${index}`} whileHover={{ scale: 1.12, zIndex: 10 }} transition={{ duration: 0.2 }} className="skill-card">
                <div className="skill-icon">{skill.icon}</div>
                <p className="skill-name">{skill.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-16 lg:mt-32">
        <motion.h2 className="text-2xl lg:text-4xl text-center text-white" initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }}>
          My <span className="font-extrabold">Experience</span>
        </motion.h2>

        <div className="relative max-w-7xl mx-auto px-5 lg:px-10 mt-12 lg:mt-20">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] bg-[#52525B] -translate-x-1/2" />
          <div className="lg:hidden absolute left-[22px] top-0 bottom-0 w-[2px] bg-[#52525B]" />

          <div className="space-y-14 lg:space-y-24">
            {experiences.map((exp, index) => {
              const isLeft = index % 2 === 1;

              return (
                <div key={exp.id} className="relative lg:grid lg:grid-cols-[1fr_80px_1fr] lg:items-start">
                  <div className={`hidden lg:block ${isLeft ? "text-right" : ""}`}>
                    {isLeft ? <TimelineCard exp={exp} align="right" index={index} /> : <TimelineDate period={exp.period} align="right" />}
                  </div>

                  <div className="relative hidden lg:flex justify-center">
                    <motion.div className="timeline-dot z-10" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5, delay: index * 0.15 }} viewport={{ once: true }} />
                  </div>

                  <div className="hidden lg:block">
                    {isLeft ? <TimelineDate period={exp.period} align="left" /> : <TimelineCard exp={exp} align="left" index={index} />}
                  </div>

                  <div className="lg:hidden relative pl-12">
                    <motion.div className="timeline-dot timeline-dot-mobile absolute left-[13px] top-5 z-10" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }} />
                    <TimelineDate period={exp.period} align="left" />
                    <TimelineCard exp={exp} align="left" index={index} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function TimelineDate({ period, align = "left" }) {
  return (
    <div className={`timeline-date ${align === "right" ? "justify-end" : "justify-start"}`}>
      <span>{period}</span>
    </div>
  );
}

function TimelineCard({ exp, align = "left", index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: align === "right" ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      viewport={{ once: true }}
      className={`timeline-card ${align === "right" ? "text-right" : "text-left"}`}
    >
      <div
        className={`timeline-card-dot ${
          align === "right" ? "-right-1" : "-left-1"
        } hidden lg:block`}
      />

      <div
        className={`flex items-center gap-4 ${
          align === "right" ? "justify-end" : "justify-start"
        }`}
      >
        <div className="timeline-logo overflow-hidden">
          <img
            src={`${import.meta.env.BASE_URL}${exp.logo.replace(/^\/+/, "")}`}
            alt={`${exp.company} logo`}
            className="w-full h-full object-cover scale-125"
          />
        </div>

        <div>
          <h3 className="timeline-role">{exp.role}</h3>
          <p className="timeline-company">{exp.company}</p>
        </div>
      </div>

      <p
        className={`timeline-description ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {exp.description}
      </p>
    </motion.div>
  );
}