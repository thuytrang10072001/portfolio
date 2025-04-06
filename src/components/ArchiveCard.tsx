import Link from "next/link";
import { title } from "process";
import { FaRegFolder } from "react-icons/fa";
import { RxOpenInNewWindow } from "react-icons/rx";
import { ISubProject } from "src/interfaces/sub_projects";

interface IProps {
  sub_project: ISubProject;
}
const ArchiveCard = (props: IProps) => {
  const { sub_project } = props;

  return (
    <Link href={sub_project.link ? sub_project.link : ""} target="_blank">
      <div className="w-full h-80 rounded-lg bg-[#112240] p-7 flex flex-col justify-center gap-6 hover:-translate-y-2 transition-transform duration-300 group">
        <div className="flex justify-between items-center">
          <FaRegFolder className="text-4xl text-textGreen" />
          <RxOpenInNewWindow className="text-4xl hover:text-textGreen" />
        </div>
        <div>
          <h2 className="text-xl font-titleFont font-semibold tracking-wide group-hover:text-textGreen">
            {sub_project.title}
          </h2>
          <p className="text-sm mt-3 text-justify">{sub_project.description}</p>
        </div>
        <ul className="text-xs mdl:text-sm text-textDark flex items-center gap-2 justify-between flex-wrap">
          {sub_project.listItem.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>
    </Link>
  );
};

export default ArchiveCard;
