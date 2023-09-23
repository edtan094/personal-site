import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query MyQuery {
    projects {
      id
      project_description
      project_name
    }
  }
`;

export const revalidate = 5;

interface IProject {
  project_name: string;
}

export default async function Home() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  console.log("data", data);
  return (
    <>
      <main>
        <div className="flex justify-center">
          <h2>Hello, my name is Edwin welcome to my site</h2>
        </div>
        <div>
          Here is my project.{" "}
          {data.projects.map((project: IProject) => project.project_name)}
        </div>
      </main>
    </>
  );
}
