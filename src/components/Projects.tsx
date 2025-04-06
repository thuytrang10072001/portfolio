//components
import SectionTitle from "./SectionTitle";
import Project from "./projects/Project";

import projects from "src/data/project";

const Projects = () => {
  return (
    <section id="project" className="max-w-container mx-auto lgl:px-20 py-24">
      <SectionTitle title="Some Thing I have Built" titleNo="03" />
      <div className="w-full flex flex-col items-center justify-between gap-28 mt-10">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
