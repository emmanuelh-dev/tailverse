import React from "react";
import Layout from "@/layout/Layout";
const privacy = () => {
  return (
    <Layout>
      <div className="dark:bg-black h-screen dark:text-white pt-20 text-xl max-w-6xl mx-auto">
        <h2 className="font-bold text-center text-6xl py-6">Privacy Policy</h2>
        <p>
          At our website, we take the privacy of our users very seriously. Below
          is how we collect, use, and protect your personal information:
        </p>
        <ul>
          <li>
            <strong>Information collection:</strong> We collect personal
            information, such as your name and email address, only when you
            voluntarily provide it to us, for example, when you register on our
            website or when you send us an email.
          </li>
          <li>
            <strong>Information use:</strong> We use the personal information we
            collect to provide you with our services and improve your experience
            on our website. We may also use the information to send you
            promotional emails about our products and services.
          </li>
          <li>
            <strong>Information protection:</strong> We are committed to
            protecting our users personal information and take reasonable
            security measures to ensure its safety.
          </li>
          <li>
            <strong>Information sharing:</strong> We do not share our users            personal information with third parties except when necessary to
            provide our services or comply with the law.
          </li>
        </ul>
      </div>
    </Layout>
  );
};

export default privacy;
