import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [dark, setDark] = useState(false);

  // Dark mode toggle
  useEffect(() => {
    document.body.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="navbar">

      {/* LEFT */}
      <div className="nav-left">
        <NavLink to="/" className="logo-link">
          <h2 className="logo">FinTrack</h2>
        </NavLink>

        <div className="nav-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/transactions">Transactions</NavLink>
          <NavLink to="/insights">Insights</NavLink>
        </div>
      </div>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="theme-btn" onClick={() => setDark(!dark)}>
          <span className={`toggle ${dark ? "active" : ""}`}>
            <span className="circle"></span>
            </span>
        </button>

        {/* Avatar */}
        <div className="avatar">P</div>

      </div>

    </div>
  );
}

export default Navbar;