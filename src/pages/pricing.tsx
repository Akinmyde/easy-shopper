import { HeadFC } from "gatsby";
import * as React from "react";

import Layout from "../components/layout";
import GetStarted from "../components/get-started";

const Pricing = () => {
  return (
    <Layout>
      <div className="container pb-24">
        <GetStarted />
      </div>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Pricing Page</title>;

export default Pricing;
