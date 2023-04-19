import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/layout/Layout";
import Card from "@/components/Card";
import Head from "next/head";
// Update the type of components to be an array of Component objects
interface Component {
  source: string;
  id: number;
  author: string;
  type: string;
  rate: number;
}

type User = {
  username: string; // Change any to string for better type safety
  name: string;
  email: string;
  id: number;
};

type Props = {
  user: User;
  components: Component[];
};

type Params = {
  username: string;
};

type StaticProps = {
  props: Props;
};
const User = ({ user, components }: Props) => {
  const ranking = components.reduce(
    (accumulator, component) => accumulator + component.rate,
    0
  );
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout title={`User ${user.username}`}>
        <div className="container mx-auto">
          <div className="container mx-auto text-4xl">
            <div className="pt-20 text-white">
              <h1 className="font-bold text-4xl max-sm:text-center lg:text-8xl">{user.username}</h1>
              <p className=" text-4xl"><span className="font-bold">People like their posts</span> : {ranking}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>

          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card
                source={component.source}
                key={component.id}
                userName={component.author}
                type={component.type.toLowerCase()}
                rate={component.rate}
                id={component.id}
              />
            ))}
          </div>
          <div>Ranking: {ranking}</div>
        </div>
      </Layout>
    </div>
  );
};

export default User;

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/getUsers`);
  const users: User[] = await res.json();

  const paths = users.map((user) => ({
    params: { username: user.username },
  }));

  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: params?.username,
      author: params?.username,
    }),
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/getUserByUsername`,
    requestOptions
  );
  const user: User = await res.json();

  // Fetch components by author username
  const componentRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/components/getByAuthor`,
    requestOptions
  );
  const components: Component[] = await componentRes.json();

  return {
    props: {
      user,
      components,
    },
  };
};
