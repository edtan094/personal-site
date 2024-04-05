import Image from "next/image";
import Link from "next/link";
import { gql } from "@apollo/client";
import { getClient } from "@/lib/client";

const query = gql`
  query PictureQuery {
    picture {
      picture_url
    }
  }
`;

export const revalidate = 5;

export default async function Home() {
  const { data } = await getClient().query({
    query,
    fetchPolicy: "no-cache",
  });
  return (
    <>
      <main>
        <div className="flex justify-center items-center h-[65vh]">
          <div>
            <h1 className="text-primary text-[10px] md:text-lg lg:text-3xl typewriter font-mono">
              My name is Edwin Tan and I am a Software Engineer
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
        </div>
      </main>
    </>
  );
}
