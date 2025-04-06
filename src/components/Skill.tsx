import { useState } from "react";

//components
import SectionTitle from "./SectionTitle";
import FrontEnd from "./works/FrontEnd";
import BackEnd from "./works/BackEnd";
import Database from "./works/Database";
import Deploy from "./works/Deploy";
import English from "./works/English";

//clsx
import clsx from "clsx";

const defaultActiveItem = {
  FrontEnd: false,
  BackEnd: false,
  Database: false,
  Deploy: false,
  English: false,
};

const Experience = () => {
  const [activeItems, setActiveItems] = useState({
    FrontEnd: true,
    BackEnd: false,
    Database: false,
    Deploy: false,
    English: false,
  });

  const handleChangeActiveItem = (name: string) => {
    setActiveItems({ ...defaultActiveItem, [name]: true });
  };

  return (
    <section
      id="skill"
      className="max-w-containerXs mx-auto py-10 lgl:py-24 px-4"
    >
      <SectionTitle title="Some skills I have" titleNo="02" />
      <div className="w-full mt-10 flex flex-col md:flex-row gap-16">
        <ul className="md:w-32 flex flex-col">
          <li
            onClick={() => handleChangeActiveItem("FrontEnd")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.FrontEnd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor"
            )}
          >
            Front-End
          </li>
          <li
            onClick={() => handleChangeActiveItem("BackEnd")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.BackEnd
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor"
            )}
          >
            Back-End
          </li>
          <li
            onClick={() => handleChangeActiveItem("Database")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Database
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor"
            )}
          >
            Database
          </li>
          <li
            onClick={() => handleChangeActiveItem("Deploy")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.Deploy
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor"
            )}
          >
            Deploy
          </li>
          <li
            onClick={() => handleChangeActiveItem("English")}
            className={clsx(
              `border-l-2  text-textDark bg-transparent hover:bg-[#112240] py-3 text-sm cursor-pointer duration-300 px-4 font-medium`,
              activeItems.English
                ? "border-l-textGreen text-textGreen"
                : "border-l-hoverColor"
            )}
          >
            English
          </li>
        </ul>
        {activeItems.FrontEnd && <FrontEnd />}
        {activeItems.BackEnd && <BackEnd />}
        {activeItems.Database && <Database />}
        {activeItems.Deploy && <Deploy />}
        {activeItems.English && <English />}
      </div>
    </section>
  );
};

export default Experience;
