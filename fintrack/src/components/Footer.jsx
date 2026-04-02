import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <h2>FinTrack</h2>

        {/* <p>Smart finance tracking made simple </p> */}

        <div className="footer-links">
          <a href="/">Home</a>
          <a href="/transactions">Transactions</a>
          <a href="/insights">Insights</a>
        </div>

        <span> 2026 Prasad Magdum. All rights reserved.
          This FinTrack was made with ❤️ using React JS.</span>

      </div>
    </footer>
  );
}

export default Footer;