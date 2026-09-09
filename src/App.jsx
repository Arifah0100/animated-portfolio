import Home from "./pages/Home";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import CustomCursor from "./utils/CursorAnimation";
import SpaceBackground from "./utils/SpaceBackground";

export default function App() {
  return (
    <div className="relative min-h-screen font-sora scroll-smooth overflow-x-hidden bg-[#020617]">
      
      <SpaceBackground />

      <div className="relative z-10">
        <CustomCursor />
        <Navbar />
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}