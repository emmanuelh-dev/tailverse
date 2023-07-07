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
  username: string;
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
          <div className="mx-auto py-16 sm:py-24 lg:py-32">
            <div className="mx-auto flex flex-col">
              <h1 className="mt-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-5xl font-extrabold uppercase tracking-tighter text-transparent sm:text-5xl lg:text-7xl">
                {user.username}
              </h1>
              <h2 className="order-first bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text font-medium tracking-wide text-transparent">
                People like their posts <span>: {ranking}</span>
              </h2>
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
    revalidate: 3600,
  };
};
