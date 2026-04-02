import "./Dashboard.css";
import { transactions } from "../data/mockData";
import {
  LineChart, Line, XAxis, YAxis, Tooltip,
  ResponsiveContainer, PieChart, Pie
} from "recharts";

function Dashboard() {
  const income = transactions.filter(t => t.type === "income")
    .reduce((a, b) => a + b.amount, 0);

  const expense = transactions.filter(t => t.type === "expense")
    .reduce((a, b) => a + b.amount, 0);

  const balance = income - expense;

  const categoryData = Object.values(
    transactions.reduce((acc, t) => {
      if (t.type === "expense") {
        acc[t.category] = acc[t.category] || { name: t.category, value: 0 };
        acc[t.category].value += t.amount;
      }
      return acc;
    }, {})
  );

  return (
    <div className="dashboard">

      <div className="cards">
        <div className="card"><h3>Total Balance</h3><p>₹{balance}</p></div>
        <div className="card"><h3>Income</h3><p>₹{income}</p></div>
        <div className="card"><h3>Expenses</h3><p>₹{expense}</p></div>
      </div>

      <div className="charts">
        <div className="chart-box">
          <h3>Balance Trend</h3>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={transactions}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line dataKey="amount" stroke="#6366f1" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={categoryData} dataKey="value" />
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

    </div>
  );
}

export default Dashboard;