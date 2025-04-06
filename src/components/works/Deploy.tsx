import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const Deploy = () => {
  const skills = [
    "Experience deploying and managing applications on Linux servers",
    "Proficient in setting up and configuring Nginx for reverse proxy and load balancing",
    "Skilled in containerization using Docker and deploying applications in a cloud environment",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        MERN Stack Developer
        <span className="text-textGreen tracking-wide">@Deploy</span>
      </h3>
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

export default Deploy;
