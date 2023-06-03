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
        <div className="pt-14 px-4 container mx-auto min-h-screen">
          <div className="">
            <div className="flex items-center justify-center min-h-screen mx-auto max-w-5xl ">
              <div>
                <h1 className="text-4xl lg:text-6xl font-extrabold text-center text-black dark:text-white">
                  Open-Source Tailwind Components for Any Project
                </h1>
                <p className="text-xl text-center font-light text-neutral-400 border-dashed border border-neutral-500 my-10 py-2 w-full">
                  Create, Share, and Use Beautiful Custom Elements Built with
                  Tailwind CSS.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 max-w-5xl mx-auto">
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">
                      {totalComponents}
                    </span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Community-Crafted UI Elements
                    </p>
                  </div>
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">{totalUsers}</span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Contributors
                    </p>
                  </div>
                  <div className="pt-10 rounded-2xl dark:text-white justify-center text-center py-2 text-3xl">
                    <span className="font-bold text-6xl">100%</span>
                    <p className="py-6 text-xl text-center font-light text-neutral-400">
                      Free for Personal and Commercial Use
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
<div className="py-10">              <h2 className="dark:text-white font-bold text-center text-6xl ">
                Meet our Contributors
              </h2>
              <p className="text-center text-xl text-neutral-400">
      Discover the talented individuals who have contributed to our project.
    </p></div>
              <div className="grid md:grid-cols-4 gap-2">
                {users.map((user) => (
                  <CardUser
                    key={user.id}
                    username={user.username}
                    totalPosts={components.length} profileLink={user.username}                  />
                ))}
              </div>
              <p className="text-center mt-8 text-neutral-500">
                Join our community and become a contributor too!
              </p>
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

  const componentRes = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/components`
  );
  const components = await componentRes.json();

  return {
    props: {
      users,
      components,
    },
  };
}
