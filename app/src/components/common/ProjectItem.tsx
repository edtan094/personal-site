import Image from "next/image";
import { IProject } from "../../types/project.types";
import { ComponentType } from "react";

interface ProjectProps {
  project: IProject;
  image: any;
}
export default function ProjectItem({ project, image }: ProjectProps) {
  return (
    <div className="flex justify-between">
      <div className="w-1/2">
        <Image
          alt={`${project.project_name} logo`}
          src={image}
          height={500}
          width={500}
        />
      </div>
      <div className="flex items-center w-1/2 p-8">
        <div>
          <h2 className=" text-lg">{project.project_name}</h2>
          <p>{project.description}</p>
        </div>
      </div>
    </div>
  );
}
