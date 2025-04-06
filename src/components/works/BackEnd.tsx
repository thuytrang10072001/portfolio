import { motion } from "framer-motion";
import { TiArrowForward } from "react-icons/ti";

const BackEnd = () => {
  const skills = [
    "understanding of SOLID principles, Design Patterns, and Clean Architecture",
    "Experienced in developing RESTful APIs ",
    "Implementing authentication and authorization mechanisms RBAC models",
    "Experienced in backend frameworks: Node.js, Phalcon",
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="w-full"
    >
      <h3 className="flex gap-1 font-medium text-xl font-titleFont">
        Web Developer
        <span className="text-textGreen tracking-wide">@BackEnd</span>
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

export default BackEnd;
