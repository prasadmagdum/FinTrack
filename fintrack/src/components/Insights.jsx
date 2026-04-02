import "./Insights.css";
import { transactions } from "../data/mockData";

function Insights() {

  const income = transactions
    .filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const savings = income - expense;

  return (
    <div className="insights-container">

      <h2 className="insights-title">Financial Insights</h2>

      <div className="insights-grid">

        {/* Spending */}
        <div className="insight-card red">
          <p>Spending</p>
          <h3>{expense > income ? "High " : "Under Control "}</h3>
        </div>

        {/* Savings */}
        <div className="insight-card blue">
          <p>📈 Savings</p>
          <h3>₹{savings}</h3>
        </div>

        {/* Status */}
        <div className="insight-card green">
          <p>Status</p>
          <h3>{income > expense ? "Stable 💚" : "Risk 🔴"}</h3>
        </div>

      </div>

    </div>
  );
}

export default Insights;