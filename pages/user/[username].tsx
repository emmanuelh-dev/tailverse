import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import Layout from "@/layout/Layout";
type User = {
  username: any;
  name: string;
  email: string;
  id: number;
};

type Props = {
  user: User;
};

type Params = {
  username: string;
};

type StaticProps = {
  props: Props;
};

const User = ({ user }: Props) => {
  return (
    <Layout>
      <div>
      <h1>{user.username}</h1>
      <p>Email: {user.email}</p>
    </div>
    </Layout>
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
    body: JSON.stringify({ username: params?.username }), // Usamos el operador opcional para acceder a username
  };

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/users/getUserByUsername`,
    requestOptions
  );

  const user: User = await res.json();

  return {
    props: {
      user,
    },
  };
};
