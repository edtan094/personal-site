import Image from "next/image";
import { IProject } from "../../types/project.types";
import Link from "next/link";

interface ProjectProps {
  project: IProject;
}
export default function ProjectItem({ project }: ProjectProps) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center pt-6">
      <div className="w-full md:w-1/3 text-center md:text-left mb-4 md:mb-0 flex justify-center">
        <Image
          alt={`${project.project_name} logo`}
          src={project.image_url}
          height={200}
          width={200}
          className="mx-auto md:mx-0"
        />
      </div>
      <div className="w-full md:w-2/3 p-4 md:p-8">
        <h2 className="text-xl text-center md:text-left pb-2 text-primary">
          {project.project_name}
        </h2>
        <p>{project.description}</p>
        <div className="pt-4">
          {project.tech_stack.map((stack, index) => (
            <span key={index} className="badge bg-primary p-1">
              {stack}
            </span>
          ))}
        </div>
        <div className="pt-5 flex flex-col md:flex-row justify-around md:justify-around w-40 md:w-96 m-auto">
          <Link
            href={project.url_link}
            target="_blank"
            className="btn m-3 border border-primary"
          >
            View Site
          </Link>
          <Link
            href={project.github_url_link}
            target="_blank"
            className="btn m-3 border border-primary"
          >
            View GitHub
          </Link>
        </div>
      </div>
    </div>
  );
}
