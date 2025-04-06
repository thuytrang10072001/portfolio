"use client";

//components
import Navbar from "src/components/Navbar";
import LeftSide from "src/components/LeftSide";
import RightSide from "src/components/RightSide";
import Banner from "src/components/Banner";
import About from "src/components/About";
import Experience from "src/components/Skill";
import Projects from "src/components/Projects";
import Archive from "src/components/Archive";
import Contact from "src/components/Contact";
import Footer from "src/components/Footer";

//animation
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="w-full h-screen font-bodyFont bg-bodyColor text-textLight overflow-x-hidden overflow-y-scroll scrollbar">
      <Navbar />
      <div className="w-full h-[88vh] xl:flex items-center justify-between">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed left-0 bottom-0"
        >
          <LeftSide />
        </motion.div>
        <div className="h-[88vh] w-full mx-auto p-4">
          <Banner />
          <About />
          <Experience />
          <Projects />
          <Archive />
          <Contact />
          <Footer />
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="hidden xl:inline-flex w-32 h-full fixed right-0 bottom-0"
        >
          <RightSide />
        </motion.div>
      </div>
    </main>
  );
}
