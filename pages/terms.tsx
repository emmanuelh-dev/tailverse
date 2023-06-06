import React from "react";
import Layout from "@/layout/Layout";
const terms = () => {
  return (
    <Layout title="Terms of use">
      <div className="px-4 dark:text-white pt-20 max-w-6xl mx-auto">
        <h1 className="font-bold py-4 text-4xl text-center">Terms of use</h1>
        <h3 className="font-bold text-2xl py-2">General Terms</h3>
        <p className="py-2">
          By using this website, you agree to these terms and conditions in
          their entirety. The owner of this website reserves the right to change
          or modify these terms and conditions at any time without prior notice.
        </p>
        <p className="py-2">
          The information provided on this website is for general informational
          purposes only and does not constitute professional advice. The owner
          of this website is not liable for any damage or loss that may result
          from the use of the information provided on this website.
        </p>
        <p className="py-2">
          The owner of this website reserves the right to remove or block any
          user who does not adhere to the standards of the website or who
          compromises the integrity of the work of other users.
        </p>
        <h3 className="font-bold text-2xl py-2">User-generated Content</h3>
        <p className="py-2">
          Users may generate content on this website as long as it meets the
          websites standards and does not infringe on copyrights or other
          rights. The owner of this website reserves the right to remove any
          user-generated content that does not meet the website s standards or
          infringes on copyrights or other rights.
        </p>
        <h3 className="font-bold text-2xl py-2">Tailwind Components</h3>
        <p className="py-2">
          All components created in Tailwind must have at least one utility,
          such as a button, form, etc. Users may use and modify Tailwind
          components for their own purposes as long as they comply with the
          Creative Commons Attribution-NonCommercial-ShareAlike 2.0 Generic (CC
          BY-NC-SA 2.0) License.
        </p>
        <h3 className="font-bold text-2xl py-2">Limitations of Liability</h3>
        <p className="py-2">
          The owner of this website is not responsible for any damage or loss
          that may result from the use of this website or any information or
          content provided on this website. The owner of this website does not
          guarantee the availability or continuous access to this website or its
          content.
        </p>
        <h3 className="font-bold text-2xl py-2">Intellectual Property</h3>
        <p className="py-2">
          All content on this website, including but not limited to text,
          images, graphics, logos, and software, is protected by copyright and
          other intellectual property rights. Users may not use or distribute
          the content of this website for commercial purposes without the
          explicit consent of the owner of this website.
        </p>
      </div>
    </Layout>
  );
};

export default terms;
