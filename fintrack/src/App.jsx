import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import TransactionTable from "./components/TransactionTable";
import Insights from "./components/Insights";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app-container">

      {/* Top Navbar */}
      <Navbar />

      {/* Content */}
      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />  
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionTable role="admin" />} />
            <Route path="/insights" element={<Insights />} />
          </Routes>
        </div>

        <Footer />
      </div>

    </div>
  );
}

export default App;