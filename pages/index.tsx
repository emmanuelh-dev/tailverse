import Layout from "@/layout/LayoutHome";
import { GetServerSideProps, GetStaticProps } from "next";
import Head from "next/head";
import CardUser from "@/components/CardUser";
import Image from "next/image";
import Link from "next/link";
import KeyFeatures from "@/components/KeyFeatures";
import Testimonials from "@/components/Testimonials";
import Grid from "@/components/index/Grid";
const index = ({ components, users }: Props) => {
  // Función de comparación
  // Función de comparación
  function compararPorComponentCount(a: User, b: User) {
    return b.component_count - a.component_count;
  }

  // Ordenamiento
  users.sort(compararPorComponentCount);

  // Imprimir el arreglo ordenado
  return (
    <div>
      <Layout title="Free and Premium UI components ready to built with Tailwind CSS.">
        <div>
          <div className="">
            <div className="flex items-center justify-center min-h-screen">
              <div>
                <h1 className="text-5xl lg:text-6xl font-extrabold text-center text-black dark:text-white">
                  Open-Source Tailwind Components for Any Project
                </h1>
                <p className="text-xl text-center font-light text-neutral-400 border-dashed border border-neutral-500 my-10 py-2 w-full">
                  Create, Share, and Use Beautiful Custom Elements Built with
                  Tailwind CSS.
                </p>
              </div>
            </div>
          </div>
          <Grid users={users} components={components} />
          <section>
            <div className="max-w-6xl mx-auto px-4 py-10">
              <div className="py-10">
                <h2 className="dark:text-white font-bold text-center text-5xl md:text-6xl ">
                  Meet our Contributors
                </h2>
                <p className="text-center text-xl text-neutral-400">
                  Discover the talented individuals who have contributed to our
                  project.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-2">
                {users.slice(0, 6).map((user) => (
                  <CardUser
                    key={user.id}
                    username={user.username}
                    totalPosts={user.component_count}
                  />
                ))}
              </div>
              <p className="text-center mt-8 text-neutral-500">
                Join our community and become a contributor too!
              </p>
            </div>
          </section>
          <KeyFeatures />

          <Testimonials />
        </div>
        <section className="py-10">
          <div className="px-4">
            <div className="text-center">
              <h2 className="text-5xl lg:text-6xl font-bold text-neutral-800 dark:text-white mb-4">
                Need a more professional service?
              </h2>
              <p className="text-xl text-neutral-600 dark:text-neutral-400">
                Contact us for all your professional needs.
              </p>
              <a
                href="https://www.bysmax.com/contact"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-3xl shadow-lg transition-colors duration-300 my-10"
              >
                Contact Us
              </a>
            </div>
            <div className="flex flex-wrap gap-10 justify-evenly">
              <div className="md:max-w-[250px] flex flex-col h-full bg-black rounded-3xl dark:border-white border">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div className="">
                      <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                        Starter
                      </h2>
                      <p className="mt-2 text-sm text-neutral-100">
                        Tailor-made landing page design using Tailwind.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p>
                        <span className="text-5xl font-light tracking-tight text-white">
                          $100
                        </span>
                        <span className="text-base font-medium text-white">
                          /mo
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex px-6 pb-8 sm:px-8">
                  <a
                    href="https://www.bysmax.com/contact"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-3xl nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                    aria-describedby="tier-starter"
                  >
                    Get started
                  </a>
                </div>
              </div>

              <div className="md:max-w-[250px] flex flex-col h-full bg-white rounded-3xl border-black border">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div className="">
                      <h2 className="text-lg font-medium tracking-tighter text-neutral-600 lg:text-3xl">
                        Starter
                      </h2>
                      <p className="mt-2 text-sm text-neutral-500">
                        Complete website design and development using Tailwind.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p>
                        <span className="text-5xl font-light tracking-tight text-black">
                          $150
                        </span>
                        <span className="text-base font-medium text-neutral-500">
                          /mo
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex px-6 pb-8 sm:px-8">
                  <a
                    href="https://www.bysmax.com/contact"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-white duration-200 bg-black border-2 border-black rounded-3xl nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-sm focus-visible:ring-black"
                    aria-describedby="tier-company"
                  >
                    Get started
                  </a>
                </div>
              </div>

              <div className="md:max-w-[250px] flex flex-col h-full bg-black rounded-3xl dark:border-white border">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                  <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div className="">
                      <h2 className="text-lg font-medium tracking-tighter text-white lg:text-3xl">
                        Corporate
                      </h2>
                      <p className="mt-2 text-sm text-neutral-100">
                        Comprehensive Tailwind-based web application
                        development.
                      </p>
                    </div>
                    <div className="mt-6">
                      <p>
                        <span className="text-5xl font-light tracking-tight text-white">
                          $250
                        </span>
                        <span className="text-base font-medium text-white">
                          /mo
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex px-6 pb-8 sm:px-8">
                  <a
                    href="https://www.bysmax.com/contact"
                    className="items-center justify-center w-full px-6 py-2.5 text-center text-black duration-200 bg-white border-2 border-white rounded-3xl nline-flex hover:bg-transparent hover:border-white hover:text-white focus:outline-none focus-visible:outline-white text-sm focus-visible:ring-white"
                    aria-describedby="tier-starter"
                  >
                    Get started
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </div>
  );
};

export default index;

export async function getStaticProps() {
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
    revalidate: 3600,
  };
}
