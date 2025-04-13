//images
import Image from "next/image";

//icons
import { TbBrandGithub, TbBrandFigma } from "react-icons/tb";
import { RxOpenInNewWindow } from "react-icons/rx";
import clsx from "clsx";
import { IProject } from "src/interfaces/project";

interface IProps {
  project: IProject;
}
const Project = (props: IProps) => {
  const { project } = props;
  return (
    <div className="w-full flex flex-col items-center justify-center gap-28 mt-10">
      <div
        className={clsx(
          `flex flex-col gap-6`,
          project.right ? "xl:flex-row" : "xl:flex-row-reverse"
        )}
      >
        <a
          href={project.demo}
          target="_blank"
          className="w-full xl:w-1/2 h-auto relative group"
        >
          <div>
            <Image
              width={project.width}
              height={0}
              className="object-contain"
              src={project.image}
              alt="amazonImg"
            />
          </div>
        </a>
        <div
          className={clsx(
            `w-full xl:w-1/2 flex flex-col gap-6 lgl:justify-between z-10`,
            project.right
              ? "text-right items-end xl:-ml-16"
              : "text-left items-start xl:-mr-16"
          )}
        >
          <p className="font-titleFont text-textGreen text-sm tracking-wide">
            {project.role}
          </p>
          <h3 className="text-2xl font-bold">{project.name}</h3>
          <p className="bg-[#112240] text-sm md:text-base p-2 md:p-6 rounded-md text-center">
            <span>{project.description}</span>
          </p>
          <ul className="text-xs md:text-sm font-titleFont tracking-wide flex gap-2 md:gap-5 justify-between text-textDark">
            {project.technologies.map((technology, index) => (
              <li key={index}>{technology}</li>
            ))}
          </ul>
          <div className="text-2xl flex gap-4">
            {project.fe_link && (
              <a
                title="Github"
                href={project.fe_link}
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
            )}
            {/* {project.be_link && (
              <a
                href={project.be_link}
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandGithub />
              </a>
            )} */}
            {project.figma && (
              <a
                title="Figma"
                href={project.figma}
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <TbBrandFigma />
              </a>
            )}
            {project.demo && (
              <a
                title="Demo"
                href={project.demo}
                target="_blank"
                className="hover:text-textGreen duration-300"
              >
                <RxOpenInNewWindow />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
