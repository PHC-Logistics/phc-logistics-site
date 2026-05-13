export default function App() {
  return (
    <div style={pageStyle}>
      <style>
        {`
          html {
            scroll-behavior: smooth;
          }

          input, textarea {
            outline: none;
          }

          @media (max-width: 768px) {
            .nav {
              flex-direction: column;
              gap: 18px;
              padding: 20px 18px !important;
            }

            .nav-links {
              flex-wrap: wrap;
              justify-content: center;
              gap: 12px !important;
            }

            .hero-title {
              font-size: 42px !important;
            }

            .hero-subtitle {
              font-size: 22px !important;
            }

            .section-title {
              font-size: 30px !important;
            }

            .card {
              width: 100% !important;
              max-width: 340px;
            }

            .capability-item {
              width: 100% !important;
              max-width: 340px;
            }

            .contact-form {
              width: 100% !important;
            }
          }
        `}
      </style>

      <header className="nav" style={navStyle}>
        <div style={brandStyle}>PHC Logistics</div>

        <nav className="nav-links" style={navLinksStyle}>
          <a href="#services" style={navLinkStyle}>Services</a>
          <a href="#capabilities" style={navLinkStyle}>Capabilities</a>
          <a href="#standards" style={navLinkStyle}>Standards</a>
          <a href="#whyphc" style={navLinkStyle}>Why PHC</a>
          <a href="#contact" style={buttonStyle}>Request Service</a>
        </nav>
      </header>

      <section style={heroStyle}>
        <h1 className="hero-title" style={heroTitleStyle}>
          PHC Logistics
        </h1>

        <p style={taglineStyle}>
          Properly Processed, Handled, and Completed.
        </p>

        <h2 className="hero-subtitle" style={heroSubtitleStyle}>
          Medical • Commercial • Time-Sensitive Delivery Solutions
        </h2>

        <p style={heroTextStyle}>
          Professional courier and logistics solutions serving South Jersey and the Philadelphia region.
        </p>

        <a href="#contact" style={heroButtonStyle}>
          Request Service
        </a>
      </section>

      <section id="services" style={sectionStyle}>
        <h3 className="section-title" style={sectionTitleStyle}>
          Our Services
        </h3>

        <div style={cardsContainerStyle}>
          <div className="card" style={cardStyle}>
            <h4 style={cardTitleStyle}>Medical Courier</h4>
            <p style={cardTextStyle}>
              HIPAA-aware transportation support for healthcare deliveries.
            </p>
          </div>

          <div className="card" style={cardStyle}>
            <h4 style={cardTitleStyle}>Commercial Delivery</h4>
            <p style={cardTextStyle}>
              Same-day and scheduled delivery solutions for businesses.
            </p>
          </div>

          <div className="card" style={cardStyle}>
            <h4 style={cardTitleStyle}>Time-Sensitive Logistics</h4>
            <p style={cardTextStyle}>
              Reliable urgent transportation and courier support.
            </p>
          </div>
        </div>
      </section>

      <section id="capabilities" style={capabilitiesStyle}>
        <h3 className="section-title" style={sectionTitleStyle}>
          Capabilities
        </h3>

        <div style={capabilitiesGridStyle}>
          <div className="capability-item" style={capabilityItemStyle}>Medical Courier Support</div>
          <div className="capability-item" style={capabilityItemStyle}>HIPAA-Aware Transportation</div>
          <div className="capability-item" style={capabilityItemStyle}>Commercial Delivery Services</div>
          <div className="capability-item" style={capabilityItemStyle}>Time-Sensitive Logistics</div>
          <div className="capability-item" style={capabilityItemStyle}>Route Support</div>
          <div className="capability-item" style={capabilityItemStyle}>Subcontracting Availability</div>
          <div className="capability-item" style={capabilityItemStyle}>South Jersey Coverage</div>
          <div className="capability-item" style={capabilityItemStyle}>Philadelphia Regional Support</div>
        </div>
      </section>

      <section id="standards" style={standardsSectionStyle}>
        <h3 className="section-title" style={sectionTitleStyle}>
          Professional Standards
        </h3>

        <div style={standardsGridStyle}>
          <div className="capability-item" style={standardItemStyle}>
            HIPAA-Aware Operations
          </div>

          <div className="capability-item" style={standardItemStyle}>
            Bloodborne Pathogen Certified
          </div>

          <div className="capability-item" style={standardItemStyle}>
            Hazmat Awareness Certified
          </div>

          <div className="capability-item" style={standardItemStyle}>
            TWIC Appointment Scheduled
          </div>

          <div className="capability-item" style={standardItemStyle}>
            Professional Courier Support
          </div>
        </div>
      </section>

      <section id="whyphc" style={whySectionStyle}>
        <h3 className="section-title" style={sectionTitleStyle}>
          Why Choose PHC Logistics
        </h3>

        <div style={whyGridStyle}>
          <div className="card" style={whyCardStyle}>
            <h4 style={whyTitleStyle}>Reliable Communication</h4>
            <p style={whyTextStyle}>
              Clear and professional communication throughout the delivery process.
            </p>
          </div>

          <div className="card" style={whyCardStyle}>
            <h4 style={whyTitleStyle}>Professional Handling</h4>
            <p style={whyTextStyle}>
              Focused on organized, dependable, and accountable transportation support.
            </p>
          </div>

          <div className="card" style={whyCardStyle}>
            <h4 style={whyTitleStyle}>Medical-Aware Delivery</h4>
            <p style={whyTextStyle}>
              HIPAA-aware operational approach suitable for healthcare-related logistics.
            </p>
          </div>

          <div className="card" style={whyCardStyle}>
            <h4 style={whyTitleStyle}>Regional Partnerships</h4>
            <p style={whyTextStyle}>
              Available for subcontracting, route support, and regional logistics partnerships.
            </p>
          </div>
        </div>
      </section>

      <section id="contact" style={contactSectionStyle}>
        <h3 className="section-title" style={sectionTitleStyle}>
          Request Service
        </h3>

        <form className="contact-form" style={formStyle}>
          <input type="text" placeholder="Name" style={inputStyle} />
          <input type="text" placeholder="Company" style={inputStyle} />
          <input type="email" placeholder="Email" style={inputStyle} />
          <input type="text" placeholder="Phone" style={inputStyle} />
          <input type="text" placeholder="Service Needed" style={inputStyle} />

          <textarea
            placeholder="Tell us about your delivery or logistics needs..."
            rows="5"
            style={textareaStyle}
          ></textarea>

          <button type="submit" style={submitButtonStyle}>
            Submit Request
          </button>
        </form>

        <p style={mutedTextStyle}>
          Available for subcontracting, route support, and regional logistics partnerships.
        </p>
      </section>

      <footer style={footerStyle}>
        <h4 style={footerTitleStyle}>PHC Logistics</h4>

        <p style={footerTextStyle}>A DBA of Proper Logistics LLC</p>

        <p style={footerTextStyle}>hub@phc-logistics.com</p>

        <p style={footerTextStyle}>856-441-5221</p>

        <p style={footerTaglineStyle}>
          Processed. Handled. Completed.
        </p>
      </footer>
    </div>
  );
}

/* STYLES */

const pageStyle = {
  minHeight: "100vh",
  backgroundColor: "#020617",
  color: "white",
  fontFamily: "Arial, sans-serif",
  textAlign: "center",
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "22px 48px",
  backgroundColor: "#020617",
  borderBottom: "1px solid #1e293b",
  position: "sticky",
  top: 0,
  zIndex: 10,
};

const brandStyle = {
  fontSize: "26px",
  fontWeight: "900",
  fontStyle: "italic",
  letterSpacing: "-1px",
  color: "#ffffff",
};

const navLinksStyle = {
  display: "flex",
  gap: "24px",
  alignItems: "center",
};

const navLinkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
  fontSize: "15px",
};

const buttonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "10px 16px",
  borderRadius: "999px",
  fontWeight: "700",
  fontSize: "14px",
};

const heroStyle = {
  padding: "90px 24px 80px",
  maxWidth: "1000px",
  margin: "0 auto",
};

const heroTitleStyle = {
  fontSize: "58px",
  fontWeight: "700",
  marginBottom: "12px",
};

const taglineStyle = {
  fontSize: "20px",
  color: "#cbd5e1",
  marginBottom: "24px",
};

const heroSubtitleStyle = {
  fontSize: "26px",
  fontWeight: "700",
  marginBottom: "18px",
};

const heroTextStyle = {
  fontSize: "18px",
  color: "#cbd5e1",
  maxWidth: "760px",
  margin: "0 auto 32px",
  lineHeight: "1.6",
};

const heroButtonStyle = {
  display: "inline-block",
  backgroundColor: "#2563eb",
  color: "white",
  textDecoration: "none",
  padding: "14px 24px",
  borderRadius: "999px",
  fontWeight: "700",
};

const sectionStyle = {
  padding: "60px 24px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const sectionTitleStyle = {
  fontSize: "34px",
  marginBottom: "36px",
};

const cardsContainerStyle = {
  display: "flex",
  gap: "24px",
  justifyContent: "center",
  flexWrap: "wrap",
};

const cardStyle = {
  backgroundColor: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "18px",
  padding: "30px",
  width: "300px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.25)",
};

const cardTitleStyle = {
  fontSize: "22px",
  marginBottom: "14px",
};

const cardTextStyle = {
  color: "#cbd5e1",
  fontSize: "16px",
  lineHeight: "1.6",
};

const capabilitiesStyle = {
  padding: "70px 24px",
  backgroundColor: "#0f172a",
};

const capabilitiesGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px",
  maxWidth: "900px",
  margin: "0 auto",
};

const capabilityItemStyle = {
  backgroundColor: "#111c34",
  border: "1px solid #334155",
  borderRadius: "14px",
  padding: "18px 24px",
  minWidth: "240px",
  fontSize: "17px",
  color: "#e2e8f0",
};

const standardsSectionStyle = {
  padding: "70px 24px",
};

const standardsGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px",
  maxWidth: "900px",
  margin: "0 auto",
};

const standardItemStyle = {
  backgroundColor: "#0f172a",
  border: "1px solid #334155",
  borderRadius: "14px",
  padding: "18px 24px",
  minWidth: "260px",
  fontSize: "17px",
  color: "#e2e8f0",
};

const whySectionStyle = {
  padding: "70px 24px",
  backgroundColor: "#0f172a",
};

const whyGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "24px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const whyCardStyle = {
  backgroundColor: "#111c34",
  border: "1px solid #334155",
  borderRadius: "18px",
  padding: "30px",
  width: "320px",
};

const whyTitleStyle = {
  fontSize: "22px",
  marginBottom: "14px",
};

const whyTextStyle = {
  color: "#cbd5e1",
  lineHeight: "1.6",
};

const contactSectionStyle = {
  padding: "70px 24px",
};

const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "18px",
  maxWidth: "650px",
  margin: "0 auto",
};

const inputStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #334155",
  backgroundColor: "#0f172a",
  color: "white",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "16px",
  borderRadius: "12px",
  border: "1px solid #334155",
  backgroundColor: "#0f172a",
  color: "white",
  fontSize: "16px",
  resize: "vertical",
};

const submitButtonStyle = {
  backgroundColor: "#2563eb",
  color: "white",
  border: "none",
  borderRadius: "999px",
  padding: "16px",
  fontSize: "16px",
  fontWeight: "700",
  cursor: "pointer",
};

const mutedTextStyle = {
  color: "#94a3b8",
  marginTop: "28px",
  fontSize: "16px",
};

const footerStyle = {
  backgroundColor: "#01040f",
  borderTop: "1px solid #1e293b",
  padding: "40px 24px",
};

const footerTitleStyle = {
  fontSize: "24px",
  marginBottom: "14px",
};

const footerTextStyle = {
  color: "#94a3b8",
  margin: "6px 0",
};

const footerTaglineStyle = {
  color: "#cbd5e1",
  marginTop: "18px",
  fontWeight: "700",
};