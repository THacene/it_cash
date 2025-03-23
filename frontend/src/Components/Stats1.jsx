import React from "react";
import "../Styles/Stats.css"

const Stats1 = () => {
  return (
    <section className="stats">
      <div className="stat-box">
        <p>Total Outstanding</p>
        <h2>$58,764.25</h2>
      </div>
      <div className="stat-box">
        <p>Upcoming Payment</p>
        <h2>April 1st, 2022</h2>
      </div>
    </section>
  );
};

export default Stats1;
