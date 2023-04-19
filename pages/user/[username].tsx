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
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"
        />
      </Head>
      <Layout>
        <div className="pt-20">
          <h1 className="dark:text-white font-bold py-10">{user.username}</h1>
          <p>Email: {user.email}</p>
        </div>
        <div className="flex flex-wrap">
          {components.map((component) => (
            // Use userName instead of username for consistency
            <Card
              source={component.source}
              key={component.id}
              userName={component.author}
              type={component.type}
            />
          ))}
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
