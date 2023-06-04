import Head from "next/head";
import { Header } from "@/components/Header";
interface Props {
  title?: string;
  children: React.ReactNode;
}
const Layout = ({ title, children }: Props) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <link rel="icon" type="image/png" href="/img/logo.png" />
        <meta
          name="keywords"
          content="components, tailwind, web development, CSS"
        />
        <meta name="author" content="Emmanuel Hernandez | Tailverse | BysMax" />
        <meta name="language" content="en" />
        <meta name="robots" content="index,follow" />
        <meta http-equiv="refresh" content="60" />
      </Head>
      <Header />
      <div className="min-h-screen bg-white dark:bg-black px-4">{children}</div>
    </>
  );
};

export default Layout;
