import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query MyQuery {
    projects {
      created_at
      id
      project_name
      description
      url_link
      github_url_link
    }
  }
`;

export const revalidate = 5;

interface IProject {
  id: number;
  project_name: string;
  description: string;
  url_link: string;
  github_url_link: string;
}

export default async function Project() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  console.log("data", data);
  return (
    <div>
      Project
      <div>
        Here is my project.{" "}
        {data.projects.map((project: IProject) => {
          return (
            <div key={project.id}>
              {project.project_name}
              {project.description}
              {project.url_link}
              {project.github_url_link}
            </div>
          );
        })}
      </div>
    </div>
  );
}
