//animation
import { motion } from "framer-motion";
import "animate.css";

//images
import me from "src/assets/images/tranny.png";
import Image from "next/image";

const Banner = () => {
  return (
    <section
      id="home"
      className="max-w-contentContainer mx-auto py-10 mdl:py-24 flex flex-row gap-4 lgl:gap-8 mdl:px-10 xl:px-4"
    >
      <motion.div className="mx-auto gap-4 flex flex-col">
        <motion.span
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-60 inline-block mb-4 px-3 py-2 text-[18px] font-titleFont font-bold border border-textGreen bg-linearGreen "
        >
          Welcome to my Portfolio
        </motion.span>
        <motion.h3
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="text-lg font-titleFont tracking-wide text-textGreen"
        >
          Hi, my name is
        </motion.h3>
        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="flex flex-col text-4xl lgl:text-5xl font-titleFont font-semibold"
        >
          Le Thi Thuy Trang.
          <span className="text-white mt-2 lgl:mt-4">Software Engineer</span>
        </motion.h1>
        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.9 }}
          className="text-base md:max-w-[650px] text-textDark font-medium text-justify"
        >
          I am a graduate with a degree in Software Engineering from the Posts
          and Telecommunications Institute of Technology. During university, I
          gained practical experience in full-stack development. I have a solid
          foundation in both front-end and back-end development, and I’m skilled
          in building user-friendly and efficient software applications using
          JavaScript, PHP, and related technologies. Additionally, I have 1 year
          of professional experience working at Mpire Agency, where I further
          honed my skills in real-world projects and team-based development
          environments.
        </motion.p>
        <a href="https://github.com/thuytrang10072001" target="_blank">
          <motion.button
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className="px-6 py-4 text-sm font-titleFont border border-textGreen rounded-md text-textGreen hover:bg-hoverColor duration-300"
          >
            Visit my Github
          </motion.button>
        </a>
      </motion.div>
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.1 }}
        className="animate__animated animate-pulse"
      >
        <Image width={400} height={0} src={me} alt="logoBanner" />
      </motion.div>
    </section>
  );
};

export default Banner;
