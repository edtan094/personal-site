import Image from "next/image";
import { IProject } from "../../types/project.types";

interface ProjectProps {
  project: IProject;
}
export default function ProjectItem({ project }: ProjectProps) {
  return (
    <div className="flex justify-between pt-6">
      <div className="w-1/2 flex justify-center">
        <Image
          alt={`${project.project_name} logo`}
          src={project.image_url}
          height={300}
          width={300}
        />
      </div>
      <div className="flex items-center w-1/2 p-8">
        <div>
          <h2 className=" text-xl text-primary text-center pb-2">
            {project.project_name}
          </h2>
          <p>{project.description}</p>
          {project.tech_stack.map((stack, index) => {
            return (
              <span key={index} className="badge">
                {stack}
              </span>
            );
          })}
          <div className=" pt-5 flex justify-evenly">
            <a href={project.url_link} target="_blank">
              View Site
            </a>
            <a href={project.github_url_link} target="_blank">
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
