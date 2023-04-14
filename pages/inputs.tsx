import Layout from "@/layout/Layout2";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Card from "@/components/Card";
interface Component {
  source: string;
  id: number;
  author: string;
  type:string;
}
interface Props {
  components: Component[];
}

const inputs = ({ components }: Props) => {
  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.7/tailwind.min.css"
        />
      </Head>
      <Layout title="inputs tailwind components">
        <div className="pt-14 container mx-auto">
          <h1>Todos los componentes</h1>
          <div className="flex flex-wrap">
            {components.map((component) => (
              <Card source={component.source} key={component.id} userName={component.author} type={component.type}/>
            ))}
          </div>
        </div>
      </Layout>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ type: "Inputs" }),
    };
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}///components/getByType`,
      requestOptions
    );
    const components = await res.json();
  
    return {
      props: {
        components,
      },
    };
  };
  export default inputs;