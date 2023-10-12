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
  }
`;
export const revalidate = 5;

type AboutMe = {
  about_myself: string;
  hobby: string;
};

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

export default async function Home() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  const aboutMeData: AboutMe = data.about_me[0];
  const workHistory: WorkHistory[] = data.work_history.sort(
    (a: { order: number }, b: { order: number }) => a.order - b.order
  );
  return (
    <>
      <main>
        <div className="flex-none pb-5">
          <div className="w-full pb-5">
            <h1 className="text-3xl md:text-5xl text-primary text-center">
              Edwin Tan
            </h1>
            <div className="flex justify-center align-middle">
              <Link href="https://github.com/edtan094" target="_blank">
                <Image
                  alt="github-icon"
                  src="http://d2f1h64iia9ryb.cloudfront.net/github-mark.svg"
                  height={35}
                  width={35}
                  className="m-2"
                />
              </Link>
              <Link href="https://www.linkedin.com/in/etan094/" target="_blank">
                <Image
                  alt="linkedin-icon"
                  src="http://d2f1h64iia9ryb.cloudfront.net/LI-In-Bug.png"
                  height={30}
                  width={40}
                  className="m-2"
                />
              </Link>
            </div>
          </div>
          <div className="w-full pt-5 md:pt-0">
            <p>{aboutMeData.about_myself}</p>
            <p className="pt-5">{aboutMeData.hobby}</p>
          </div>
        </div>
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
