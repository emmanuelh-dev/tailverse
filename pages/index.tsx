import Layout from "@/layout/Layout";
import { GetServerSideProps } from "next";
import Head from "next/head";
import CardUser from "@/components/CardUser";
interface Component {
  username: any;
  source: string;
  id: number;
  author: string;
  type: string;
}
interface Props {
  components: Component[];
}

const index = ({ components }: Props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
        />
      </Head>
      <Layout title="index tailwind components">
        <div className="pt-14 container mx-auto">
          <div className="">
            <div className="flex items-center justify-center min-h-screen mx-auto max-w-7xl ">
              <div>
                <h1 className="text-6xl font-bold text-center text-transparent uppercase bg-clip-text animate-gradient-x bg-gradient-to-r from-pink-500 to-blue-500">
                  Open-Source tailwind elements for any project
                </h1>
                <p className="py-6 text-3xl text-center text-black dark:text-white">
                  Create, share, and use beautiful custom elements made with
                  tailwindcss.
                </p>
              </div>
            </div>
          </div>
          <section className="max-w-6xl mx-auto">
            <h2 className="dark:text-white font-bold text-center text-6xl py-10">
              Meet our contributors
            </h2>
            <div className="grid grid-cols-4 gap-2">
              {components.map((component) => (
                <CardUser key={component.id} username={component.username} />
              ))}
            </div>
          </section>
        </div>
      </Layout>
    </div>
  );
};
export default index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "Inputs" }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/components/getByType`,
      requestOptions
    );
    const components = await res.json();

    return {
      props: {
        components,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        components: [],
      },
    };
  }
};
