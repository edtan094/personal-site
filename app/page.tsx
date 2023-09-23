import { getClient } from "@/lib/client";

import { gql } from "@apollo/client";

const query = gql`
  query Now {
    now(id: "1")
  }
`;

export const revalidate = 5;

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
        <div>The time is {data.now}</div>
      </main>
    </>
  );
}
