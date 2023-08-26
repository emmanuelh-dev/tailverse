import React from "react";
import QRView from "@/components/QRView";
import Layout from "@/layout/Layout";
const qr = () => {
  return (
    <Layout>
      <div className="pt-16">
        <QRView />
      </div>
    </Layout>
  );
};

export default qr;
