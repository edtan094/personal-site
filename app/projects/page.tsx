import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import Image from "next/image";
import { IProject } from "../src/types/project.types";
import Project2Image from "public/images/project2.png";
import Project3Image from "public/images/project3.png";
import ProjectItem from "../src/components/common/ProjectItem";

const query = gql`
  query MyQuery {
    projects {
      created_at
      id
      project_name
      description
      url_link
      github_url_link
      image_link
    }
  }
`;

export const revalidate = 5;

export default async function Project() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });

  return (
    <div>
      {data.projects.map(async (project: IProject) => {
        if (project.id === 2) {
          return <ProjectItem project={project} image={Project2Image} />;
        }
        return <ProjectItem project={project} image={Project3Image} />;
      })}
    </div>
  );
}
