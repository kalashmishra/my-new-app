import React from "react";
import "../src/assets/Style/loader.css";

const IndexSSR = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
      }}
    >
      <div className="loader">Loading</div>
    </div>
  );
};

export default IndexSSR;
