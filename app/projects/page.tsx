import { getClient } from "@/lib/client";
import { gql } from "@apollo/client";
import { IProject } from "../src/types/project.types";
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
      image_url
      tech_stack
      order
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
      {data.projects
        .sort((a: { order: number }, b: { order: number }) => a.order - b.order)
        .map((project: IProject) => {
          return <ProjectItem key={project.id} project={project} />;
        })}
    </div>
  );
}
