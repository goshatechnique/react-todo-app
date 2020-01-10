import React from "react";
import Header from "../components/Header";

const About = () => {
  return (
    <>
      <Header headerTitle="Note" />
      <div className="article">
        <p className="article-p">
          This site created with React.js
          <br />
          Yedziyeu Heorhi, 2019-2020
          <br /> All rights reserved.
        </p>
      </div>
    </>
  );
};

export default About;
