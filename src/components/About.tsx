import { useState } from "react";

//next
import Image from "next/image";

//component
import SectionTitle from "./SectionTitle";

//icon
import { AiFillThunderbolt } from "react-icons/ai";

//image
import basketball from "src/assets/images/basketball.jpg";

const technologies = [
  "JavaScript",
  "ReactJS",
  "React Native",
  "PHP",
  "Phalcon",
  "PostgresSQL",
  "MySQL",
  "SQLServer",
  "Redux Toolkit",
  "Material-UI",
  "Bootstrap",
];

const About = () => {
  const [modalImage, setModalImage] = useState<boolean>(false);

  return (
    <section
      id="about"
      className="max-w-containerSmall mx-auto py-10 lgl:py-32 flex flex-col gap-8"
    >
      <SectionTitle titleNo="01" title="About Me" />
      <div className="flex flex-col lgl:flex-row gap-16">
        <div className="w-full lgl:w-2/3 text-base text-textDark font-medium flex flex-col gap-4 text-justify">
          <p>
            Hello! My name is{" "}
            <span className="text-textGreen">Le Thi Thuy Trang</span> and I
            enjoy creating things that live on the internet. My journey in
            software engineering began in 2019, when I started studying at the
            Posts and Telecommunications Institute of Technology(PTIT), majoring
            in Software Engineering.
          </p>
          <p>
            After graduating,
            <span className="text-textGreen">
              {" "}
              I worked as a full-stack developer at Mpire Agency for one year
            </span>
            , where I contributed to the development and maintenance of
            real-world web applications. I have hands-on experience in both
            front-end and back-end development,
            <span className="text-textGreen">
              {" "}
              with strong skills in JavaScript, PHP, and their related
              technologies
            </span>
          </p>
          <p>
            I am passionate about building efficient, user-friendly digital
            products and constantly strive to learn and grow as a software
            developer.
          </p>
          <p>Here are a few technologies I have been working with recently:</p>
          <ul className="max-w-[450px] text-sm font-titleFont grid grid-cols-2 gap-2 mt-6">
            {technologies.map((technology, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="text-textGreen">
                  <AiFillThunderbolt />
                </span>
                {technology}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lgl:w-1/3 h-80 relative group">
          <div className="absolute w-full h-80 -left-6 -top-6 rounded-lg">
            <div className="w-full h-full relative z-20 flex pl-6 lgl:pl-0">
              <Image
                width={400}
                height={200}
                onClick={() => setModalImage(!modalImage)}
                data-toggle="modal"
                className="hover:cursor-pointer rounded-lg h-full object-cover"
                src={basketball}
                alt="profileImg"
              />
            </div>
          </div>
          <div className="hidden lgl:inline-block absolute w-full h-80 bg-textGreen/20 rounded-md top-0 left-0 group-hover:bg-transparent duration-300" />
        </div>
      </div>
      {modalImage && (
        <div className="absolute flex items-center justify-center top-0 left-0 right-0 bottom-0 z-50 p-10">
          <div
            className="absolute z-[-1] w-full h-full bg-slate-500 opacity-70"
            onClick={() => setModalImage(!modalImage)}
          ></div>
          <Image
            width={600}
            height={400}
            data-toggle="modal"
            className="rounded-lg w-[600px] object-cover"
            src={basketball}
            alt="profileImg"
          />
        </div>
      )}
    </section>
  );
};

export default About;
