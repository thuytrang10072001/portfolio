import { useState } from "react";

//components
import ArchiveCard from "./ArchiveCard";

//animation
import { motion } from "framer-motion";
import sub_projects from "src/data/sub_projects";

const Archive = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="max-w-contentContainer mx-auto px-4 p-24">
      <div className="w-full flex flex-col items-center">
        <h2 className="text-3xl font-titleFont font-semibold">
          Other Noteworthy Project
        </h2>
        <p className="text-sm font font-titleFont text-textGreen">
          view the archive
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 lgl:px-10">
        {sub_projects.slice(0, 6).map((sub_project, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 * i }}
          >
            <ArchiveCard sub_project={sub_project} />
          </motion.div>
        ))}
        {showMore &&
          sub_projects.slice(6, 9).map((sub_project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 * i }}
            >
              <ArchiveCard sub_project={sub_project} />
            </motion.div>
          ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show Less
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className="w-36 h-12 rounded-md text-textGreen text-[13px] border border-textGreen hover:bg-hoverColor duration-300"
          >
            Show more
          </button>
        )}
      </div>
    </div>
  );
};

export default Archive;
