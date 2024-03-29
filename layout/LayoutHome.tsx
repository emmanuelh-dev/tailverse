import Head from "next/head";
import { Header } from "@/components/Header";
import Footer from "@/components/Footer";
import { NextSeo } from "next-seo";
interface Props {
  title?: string;
  description?: string;
  children: React.ReactNode;
}

const Layout = ({ title, children, description }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta name="description" content={description} />

        <meta
          name="keywords"
          content="components, tailwind, web development, CSS"
        />
        <meta name="author" content="Emmanuel Hernandez | Tailverse | BysMax" />
        <meta name="language" content="en" />
        <meta name="robots" content="index,follow" />
      </Head>
      <NextSeo title={title} description={description} />
      <Header />
      <div className=" overflow-hidden dark:bg-black">
      {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
