import Image from "next/image";
import Link from "next/link";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

const query = gql`
  query MyQuery {
    about_me {
      about_myself
      hobby
    }
    work_history {
      company_name
      dates
      description
      id
      position
      previous_position
      tech_stack
      order
    }
    picture {
      picture_url
    }
  }
`;
export const revalidate = 5;

type WorkHistory = {
  company_name: string;
  dates: string;
  description: string;
  position: string;
  previous_position: string[];
  tech_stack: string[];
  id: number;
  order: number;
};

export default async function Experience() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  const workHistory: WorkHistory[] = data.work_history.sort(
    (a: { order: number }, b: { order: number }) => a.order - b.order
  );
  return (
    <>
      <main>
        <div className="w-full md:flex">
          <div className="md:w- pt-10 flex-col items-center justify-center m-auto md:w-1/3">
            {workHistory.map((work) => {
              return (
                <div className="flex flex-col pt-5" key={work.id}>
                  <p>{work.dates}</p>
                  <p>{`${work.position} - ${work.company_name}`}</p>
                  {work.previous_position.map((previousPosition, index) => {
                    return (
                      <p key={index} className="opacity-60">
                        {previousPosition}
                      </p>
                    );
                  })}
                  <p className="pt-5 text-sm">{work.description}</p>
                  <div>
                    {work.tech_stack.map((stack, index) => {
                      return (
                        <span key={index} className="badge bg-primary p-1">
                          {stack}
                        </span>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
}
