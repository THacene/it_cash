import React from "react";
import "../Styles/Tansactions.css"

const Transactions1 = () => {
  return (
    <section id="transactions" className="transactions">
      <h2>Transaction History</h2>
      <div className="transaction">
        <span>👤 Cody Fisher</span>
        <span>$15,362</span>
      </div>
      <div className="transaction">
        <span>👤 Wade Warren</span>
        <span>$14,122</span>
      </div>
    </section>
  );
};

export default Transactions1;
