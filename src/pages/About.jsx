import React from "react";
import Layout from "../layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="d-flex justify-content-center">
        <div className="">
          <span className="fs-4">
            {" "}
            Community <span className="bg-success px-2 text-white">Hub</span>
          </span>
          <br />
          <p className="fs-6">
            A complaint aggregation platform for complaints made by people in
            the community to the local government.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
