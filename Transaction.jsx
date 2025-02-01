import React, { useState } from "react";
import "./Transaction.css"; 

function Transaction() {
const [transactionName, setTransactionName] = useState("");
const [amount, setAmount] = useState("");

const handleAddTransaction = () => {
    console.log("Transaction Name:", transactionName);
    console.log("Amount:", amount);
};

return (
    <div className="container">
    <div className="card">
        <div className="input-group">
        <label className="label">Transaction Name</label>
        <input
            type="text"
            className="input"
            placeholder="Type an answer"
            value={transactionName}
            onChange={(e) => setTransactionName(e.target.value)}
        />
        </div>

        <div className="input-group">
        <label className="label">Amount</label>
        <input
            type="text"
            className="input"
            placeholder="$0.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
        />
        </div>

        <button className="button" onClick={handleAddTransaction}>
        Add
        </button>
    </div>
    </div>
);
}

export default Transaction;