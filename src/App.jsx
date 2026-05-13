export default function App() {
  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    background: "#ffffff",
    borderBottom: "1px solid #e5e7eb",
    position: "sticky",
    top: 0,
    zIndex: 1000
  };

  const navLinksStyle = {
    display: "flex",
    gap: "20px",
    alignItems: "center"
  };

  const navLinkStyle = {
    textDecoration: "none",
    color: "#111827",
    fontWeight: "600",
    fontSize: "15px"
  };

  const buttonStyle = {
    textDecoration: "none",
    background: "#062b57",
    color: "#ffffff",
    padding: "10px 18px",
    borderRadius: "8px",
    fontWeight: "600"
  };

  const heroStyle = {
    minHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px 20px",
    background:
      "linear-gradient(to bottom right, #f8fafc, #e2e8f0)"
  };

  const headingStyle = {
    fontSize: "clamp(42px, 7vw, 88px)",
    fontWeight: "800",
    color: "#111827",
    marginBottom: "10px"
  };

  const taglineStyle = {
    fontSize: "clamp(20px, 3vw, 34px)",
    fontWeight: "700",
    fontStyle: "italic",
    color: "#062b57",
    marginBottom: "18px"
  };

  const subTextStyle = {
    maxWidth: "900px",
    fontSize: "18px",
    lineHeight: "1.7",
    color: "#4b5563",
    marginBottom: "30px"
  };

  return (
    <div
      style={{
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        background: "#ffffff"
      }}
    >
      <style>{`
        .brand-logo {
          text-align: center;
        }

        .phc-mark {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 54px;
          font-weight: 900;
          letter-spacing: -4px;
          color: #062b57;
          font-style: italic;
          line-height: 1;
        }

        .c-letter {
          position: relative;
        }

        .check {
          position: absolute;
          right: -22px;
          bottom: -4px;
          font-size: 30px;
          font-weight: 900;
          color: #062b57;
        }

        .logistics-word {
          margin-top: 6px;
          font-size: 12px;
          letter-spacing: 8px;
          font-weight: 700;
          color: #062b57;
        }
      `}</style>

      <header style={navStyle}>
        <div className="brand-logo">
          <div className="phc-mark">
            <span>P</span>
            <span>H</span>
            <span className="c-letter">C</span>
            <span className="check">✓</span>
          </div>

          <div className="logistics-word">LOGISTICS</div>
        </div>

        <nav style={navLinksStyle}>
          <a href="#services" style={navLinkStyle}>
            Services
          </a>

          <a href="#capabilities" style={navLinkStyle}>
            Capabilities
          </a>

          <a href="#standards" style={navLinkStyle}>
            Standards
          </a>

          <a href="#whyphc" style={navLinkStyle}>
            Why PHC
          </a>

          <a href="#contact" style={buttonStyle}>
            Request Service
          </a>
        </nav>
      </header>

      <section style={heroStyle}>
        <h1 style={headingStyle}>PHC Logistics</h1>

        <p style={taglineStyle}>
          Properly Processed, Handled, and Completed
        </p>

        <p style={subTextStyle}>
          Professional courier and logistics solutions supporting medical,
          commercial, legal, and real estate delivery operations throughout
          South Jersey. Focused on reliability, professionalism, overnight
          routes, and properly completed service from pickup to final delivery.
        </p>

        <a href="#contact" style={buttonStyle}>
          Request Service
        </a>
      </section>
    </div>
  );
}