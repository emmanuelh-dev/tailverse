import Layout from "@/layout/Layout";
const home = () => {
  return (
    <div>
      <Layout title="Open-Source tailwind elements for any project">
        <div className="">
          <div className="flex items-center justify-center min-h-screen mx-auto max-w-7xl ">
            <div>
              <h1 className="text-6xl font-bold text-center text-transparent uppercase bg-clip-text animate-gradient-x bg-gradient-to-r from-pink-500 to-blue-500">
                Open-Source tailwind elements for any project
              </h1>
              <p className="py-6 text-3xl text-center text-black dark:text-white ">
                Create, share, and use beautiful custom elements made with
                tailwindcss.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default home;
