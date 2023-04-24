import Layout from "@/layout/Layout";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import CardUser from "@/components/CardUser";

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
  users: User[];
  components: Component[];
};

const index = ({ components, users }: Props) => {
  const totalComponents = components.length;
  const totalUsers = users.length;
  const totalRates = components.reduce(
    (sum, component) => sum + component.rate,
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
      <Layout title="Free and Premium UI components ready to built with Tailwind CSS.">
        <div className="pt-14 container mx-auto min-h-screen">
          <div className="">
            <div className="flex items-center justify-center min-h-screen mx-auto max-w-7xl ">
              <div>
                <h1 className="text-6xl font-bold text-center text-transparent uppercase bg-clip-text animate-gradient-x bg-gradient-to-r from-pink-500 to-blue-500">
                  Open-Source tailwind components for any project
                </h1>
                <p className="py-6 text-3xl text-center text-black dark:text-white">
                  Create, share, and use beautiful custom elements made with
                  tailwindcss.
                </p>
                <div className="grid grid-cols-3 gap-2 max-w-5xl mx-auto">
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">
                      {totalComponents}
                    </span>
                    <p className="text-lg">Community-made UI elements</p>
                  </div>
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">{totalUsers}</span>
                    <p className="text-lg">Contributors</p>
                  </div>
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">100%</span>
                    <p className="text-lg">
                      Free for personal and commercial use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section className="max-w-6xl mx-auto">
            <h2 className="dark:text-white font-bold text-center text-6xl py-10">
              Meet our contributors
            </h2>
            <div className="grid md:grid-cols-4 gap-2">
              {users.map((user) => (
                <CardUser key={user.id} username={user.username} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users/getUsers`);
  const users = await res.json();

  const componentRes = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/components`);
  const components = await componentRes.json();

  return {
    props: {
      users,
      components,
    },
  };
}

