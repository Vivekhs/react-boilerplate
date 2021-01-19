import { Header, HeaderName } from "carbon-components-react";
import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="container">
      <Header aria-label="IBM Platform Name">
        <HeaderName href="#" prefix="IBM">
          [Platform]
        </HeaderName>
      </Header>
      <div className="bx--grid page_content">
        <div className="bx--row">
          <div className="bx--col">2</div>
          <div className="bx--col">4</div>
          <div className="bx--col">8</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
