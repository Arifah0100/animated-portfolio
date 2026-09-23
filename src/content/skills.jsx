import { FaDatabase, FaJava, FaUnity, FaHtml5 } from "react-icons/fa";
import { RiNextjsFill, RiFirebaseFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import {
  SiAndroidstudio,
  SiXcode,
  SiJetbrains,
  SiMysql,
  SiCplusplus,
  SiSwift
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { PiFileCSharpLight } from "react-icons/pi";

export const skills = [
  { id: 1, name: "C#", icon: <PiFileCSharpLight size={50} /> },
  { id: 2, name: "C++", icon: <SiCplusplus size={50} /> },
  { id: 3, name: "MySQL", icon: <SiMysql size={50} /> },
  { id: 4, name: "Swift", icon: <SiSwift size={50} /> },
  { id: 5, name: "Objective-C", icon: <FaDatabase size={50} /> },
  { id: 6, name: "Java", icon: <FaJava size={50} /> },
  { id: 7, name: "Unity", icon: <FaUnity size={50} /> },
  { id: 8, name: "Javascript", icon: <RiNextjsFill size={50} /> },
  { id: 9, name: "Android Studio", icon: <SiAndroidstudio size={50} /> },
  { id: 10, name: "TypeScript", icon: <CgFigma size={50} /> },
  { id: 11, name: "JetBrain", icon: <SiJetbrains size={50} /> },
  { id: 12, name: "Firebase", icon: <RiFirebaseFill size={50} /> },
  { id: 13, name: "Xcode", icon: <SiXcode size={50} /> },
  { id: 14, name: "HTML", icon: <FaHtml5 size={50} /> },
  { id: 15, name: "CSS", icon: <DiCss3 size={50} /> }
];

export const experiences = [
  {
    id: 1,
    company: "EasyBus PH",
    role: "iOS Developer",
    period: "July 2026 - Present",
    description:
      "Develop and maintain iOS applications using Swift and Xcode. Build responsive and user-friendly interfaces with SwiftUI, implement app features and API integrations, and troubleshoot bugs and performance issues. Focus on writing clean, reusable code while improving application functionality and user experience.",
    logo: "/assets/Easybus-logo.jpeg"
  },
  {
    id: 2,
    company: "Kooapps",
    role: "Mobile App Developer",
    period: "June 2023 - Dec 2025",
    description:
      "Developed and maintained mobile applications while working on new features, UI improvements, debugging, and application performance. Collaborated with team members to implement reliable and user-friendly mobile experiences.",
    logo: "/assets/kooapps-logo.png"
  },
  {
    id: 3,
    company: "Ascenders Business Services OPC",
    role: "IT Intern",
    period: "Sept 2022 - Dec 2022",
    description:
      "Assisted with IT-related tasks, software troubleshooting, system support, and technical documentation. Gained practical experience in maintaining systems and supporting day-to-day technology operations.",
    logo: "/assets/ascenders-logo.png"
  }
];