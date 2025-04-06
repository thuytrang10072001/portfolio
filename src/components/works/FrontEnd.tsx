import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const FrontEnd = () => {
  const skills = [
    "Proficient in building modern, responsive web interfaces using HTML, CSS, and JavaScript",
    "Experienced with frontend libraries and frameworks: ReactJS, React Native",
    "Basic experience in designing on Figma, including creating wireframes, basic UI elements, and simple layouts for web and mobile applications",
    "Capable of integrating frontend applications with backend APIs using Axios, and Fetch API",
    "Skilled in utilizing UI frameworks such as Material-UI (MUI), Bootstrap, RJSF(React Json Schema Form) and Beautiful DND to enhance user experience",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Engineer <span className="text-textGreen tracking-wide">@FrontEnd</span>
      </h3>
      <p className="text-sm mt-1 font-medium text-textDark">Current</p>
      <ul className="mt-6 flex flex-col gap-3">
        {skills.map((skill: string, index: number) => (
          <li
            key={`skill-${index}`}
            className="text-base flex gap-2 text-textDark"
          >
            <span className="text-textGreen mt-1">
              <TiArrowForward />
            </span>
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default FrontEnd;
