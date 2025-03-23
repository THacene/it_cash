import React from "react";
import "../Styles/Graph1.css"

const Graph1 = () => {
  return (
    <section className="graph">
      <div className="bar-container">
        <div className="bar" style={{ height: "80%" }}></div>
        <div className="bar" style={{ height: "60%" }}></div>
        <div className="bar" style={{ height: "90%" }}></div>
        <div className="bar" style={{ height: "50%" }}></div>
      </div>
    </section>
  );
};

export default Graph1;
