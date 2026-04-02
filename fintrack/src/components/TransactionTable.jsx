import { useState } from "react";
import "./TransactionTable.css";
import { transactions as data } from "../data/mockData";

function TransactionTable({ role }) {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("");

  const filteredData = data.filter((t) => {
    return (
      t.category.toLowerCase().includes(search.toLowerCase()) &&
      (filter === "" || t.type === filter)
    );
  });

  return (
    <div className="transaction-container">

      {role === "admin" && (
        <button className="add-btn">+ Add Transaction</button>
      )}

      <div className="controls">
        <input
          type="text"
          placeholder="Search category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select onChange={(e) => setFilter(e.target.value)}>
          <option value="">All</option>
          <option value="income">Income</option>
          <option value="expense">Expense</option>
        </select>
      </div>

      <table className="transaction-table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Category</th>
            <th>Amount</th>
            <th>Type</th>
          </tr>
        </thead>

        <tbody>
          {filteredData.length ? (
            filteredData.map((t) => (
              <tr key={t.id}>
                <td>{t.date}</td>
                <td>{t.category}</td>
                <td>₹{t.amount}</td>
                <td className={t.type}>{t.type}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="no-data">
                No transactions found
              </td>
            </tr>
          )}
        </tbody>
      </table>

    </div>
  );
}

export default TransactionTable;