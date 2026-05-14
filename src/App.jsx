export default function App() {
  return (
    <div style={pageStyle}>
      <header style={navStyle}>
  <div style={navLogoStyle}>
    PHC<span style={checkStyle}>✓</span> Logistics
  </div>

  <nav style={navLinksStyle}>
    <a href="#services" style={navLinkStyle}>Services</a>
    <a href="#capabilities" style={navLinkStyle}>Capabilities</a>
    <a href="#about" style={navLinkStyle}>About</a>
    <a href="#contact" style={buttonStyle}>Request Service</a>
  </nav>
</header>

      <section style={heroStyle}>
        <div style={heroContentStyle}>
          <h1 style={heroLogoStyle}>
            PHC<span style={bigCheckStyle}>✓</span> Logistics
          </h1>

          <p style={taglineStyle}>
            Properly Processed, Handled, and Completed.
          </p>

          <div style={blueLineStyle}></div>

         <h2 style={heroSubtitleStyle}>
           Medical • Commercial • Time-Sensitive Delivery Solutions
         </h2>

         <p style={heroCredentialStyle}>
          TWIC Credentialed • Overnight • Regional Route Support
         </p>

          <p style={heroTextStyle}>
            Professional courier and logistics solutions serving South Jersey and the Philadelphia region.
          </p>

          <a href="#contact" style={heroButtonStyle}>
            Request Service
          </a>
        </div>
      </section>

       <section id="about" style={aboutStyle}>
        <img src="/bridge.jpg" alt="Philadelphia bridge" style={aboutImageStyle} />

        <div style={aboutTextStyle}>
          <h2 style={aboutTitleStyle}>About PHC Logistics</h2>
          <div style={smallBlueLineStyle}></div>

          <p style={aboutParagraphStyle}>
            PHC Logistics is a New Jersey-based courier and logistics company specializing
            in overnight, time-sensitive, and coordinated transportation solutions for
            commercial, medical, and operational delivery needs.
          </p>

          <p style={aboutParagraphStyle}>
            Built on professional handling, clear communication, and dependable execution,
            PHC Logistics is committed to helping vendors, customers, and clients move
            important deliveries with confidence.
          </p>

          <p style={aboutTaglineStyle}>
            Properly Processed. Handled. Completed.
          </p>
        </div>
      </section>

{/* SERVICES */}
<section id="services" style={servicesStyle}>
  <h2 style={sectionTitleStyle}>Services</h2>

  <div style={serviceGridStyle}>
    <div style={serviceCardStyle}>
      <h3>Overnight Courier</h3>
      <p>Reliable overnight delivery support for time-sensitive shipments.</p>
    </div>

    <div style={serviceCardStyle}>
      <h3>Medical Courier</h3>
      <p>HIPAA-aware transportation support for healthcare-related deliveries.</p>
    </div>

    <div style={serviceCardStyle}>
      <h3>Commercial Delivery</h3>
      <p>Scheduled and coordinated delivery solutions for business operations.</p>
    </div>

    <div style={serviceCardStyle}>
      <h3>Route Support</h3>
      <p> Available for subcontracting, vendor support, regional route work,
          and TWIC-access logistics environments.
     </p>
    </div>
  </div>
</section>

<section id="capabilities" style={capabilitiesStyle}>
  <h2 style={sectionTitleStyle}>Capabilities</h2>

  <div style={capabilityGridStyle}>
    <span style={capabilityItemStyle}>South Jersey Coverage</span>
    <span style={capabilityItemStyle}>Philadelphia Regional Support</span>
    <span style={capabilityItemStyle}>Time-Sensitive Logistics</span>
    <span style={capabilityItemStyle}>Commercial Vendor Support</span>
    <span style={capabilityItemStyle}>Medical Courier Support</span>
    <span style={capabilityItemStyle}>Subcontracting Availability</span>
    <span style={capabilityItemStyle}>TWIC Credentialed Access</span>
    <span style={capabilityItemStyle}>OSHA-10 General Industry</span>
    <span style={capabilityItemStyle}>Chain-of-Custody Procedures</span>
    <span style={capabilityItemStyle}>Defensive Driving Certified</span>
  </div>
</section>

<section id="contact" style={contactStyle}>
  <h2 style={contactTitleStyle}>Request Service</h2>

  <form style={formStyle}>
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

    <a href="mailto:hub@phc-logistics.com" style={contactButtonStyle}>
      Submit Request
    </a>
  </form>
</section>

<footer style={footerStyle}>
  <h3>PHC Logistics</h3>
  <p>A Proper Logistics LLC Company</p>
  <p>Properly Processed. Handled. Completed.</p>
</footer>
    </div>
  );
}

const pageStyle = {
  minHeight: "100vh",
  fontFamily: "Arial, sans-serif",
  backgroundColor: "#ffffff",
};

const navStyle = {
  height: "95px",
  backgroundColor: "#020817",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 38px",
  borderBottom: "1px solid #1e293b",
};

const navLogoStyle = {
  color: "white",
  fontSize: "36px",
  fontWeight: "900",
  fontStyle: "italic",
  letterSpacing: "-2px",
};

const checkStyle = {
  color: "#0b5cff",
  margin: "0 4px",
};

const navLinksStyle = {
  display: "flex",
  alignItems: "center",
  gap: "36px",
};

const navLinkStyle = {
  color: "white",
  textDecoration: "none",
  fontSize: "19px",
  fontWeight: "600",
};

const buttonStyle = {
  backgroundColor: "#075ce8",
  color: "white",
  padding: "16px 26px",
  borderRadius: "7px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "700",
};

const heroStyle = {
  minHeight: "560px",
  backgroundImage: "linear-gradient(90deg, rgba(2,8,23,0.95), rgba(2,8,23,0.65)), url('/white-van-hero.png')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  alignItems: "center",
  padding: "0 60px",
};

const heroContentStyle = {
  maxWidth: "850px",
};

const heroLogoStyle = {
  color: "white",
  fontSize: "86px",
  fontWeight: "900",
  fontStyle: "italic",
  letterSpacing: "-4px",
  margin: "0 0 16px",
};

const bigCheckStyle = {
  color: "#0b5cff",
  fontSize: "96px",
  margin: "0 14px",
};

const taglineStyle = {
  color: "#cbd5e1",
  fontSize: "28px",
  fontWeight: "700",
  marginBottom: "28px",
};

const blueLineStyle = {
  width: "95px",
  height: "4px",
  backgroundColor: "#075ce8",
  marginBottom: "34px",
};

const heroSubtitleStyle = {
  color: "#60a5fa",
  fontSize: "29px",
  fontWeight: "900",
  marginBottom: "24px",
};

const heroCredentialStyle = {
  color: "#cbd5e1",
  fontSize: "20px",
  fontWeight: "600",
  marginBottom: "28px",
};

const heroTextStyle = {
  color: "white",
  fontSize: "23px",
  lineHeight: "1.45",
  maxWidth: "650px",
  marginBottom: "34px",
};

const heroButtonStyle = {
  backgroundColor: "#075ce8",
  color: "white",
  padding: "18px 38px",
  borderRadius: "7px",
  textDecoration: "none",
  fontSize: "21px",
  fontWeight: "800",
  display: "inline-block",
};

const aboutStyle = {
  display: "flex",
  gap: "54px",
  alignItems: "center",
  padding: "34px 62px",
  backgroundColor: "#f8fafc",
};

const aboutImageStyle = {
  width: "43%",
  borderRadius: "10px",
  objectFit: "cover",
};

const aboutTextStyle = {
  flex: 1,
  color: "#020817",
};

const aboutTitleStyle = {
  fontSize: "36px",
  fontWeight: "900",
  marginBottom: "8px",
};

const smallBlueLineStyle = {
  width: "80px",
  height: "4px",
  backgroundColor: "#075ce8",
  marginBottom: "22px",
};

const aboutParagraphStyle = {
  fontSize: "20px",
  lineHeight: "1.55",
  marginBottom: "22px",
};

const aboutTaglineStyle = {
  fontSize: "20px",
  fontWeight: "900",
  color: "#075ce8",
};

const servicesStyle = {
  padding: "80px 50px",
  backgroundColor: "#ffffff",
  textAlign: "center",
};

const sectionTitleStyle = {
  fontSize: "38px",
  fontWeight: "900",
  marginBottom: "40px",
  color: "#020817",
};

const serviceGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "24px",
  maxWidth: "1100px",
  margin: "0 auto",
};

const serviceCardStyle = {
  backgroundColor: "#f8fafc",
  border: "1px solid #e2e8f0",
  borderRadius: "16px",
  padding: "30px",
  color: "#020817",
  boxShadow: "0 10px 24px rgba(0,0,0,0.06)",
};

const capabilitiesStyle = {
  padding: "45px 30px",
  backgroundColor: "#020817",
  textAlign: "center",
};

const capabilityGridStyle = {
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "18px",
  maxWidth: "950px",
  margin: "0 auto",
};

const capabilityItemStyle = {
  backgroundColor: "#0f172a",
  color: "#e2e8f0",
  border: "1px solid #334155",
  borderRadius: "999px",
  padding: "16px 24px",
  fontSize: "17px",
  fontWeight: "700",
};

const contactStyle = {
  padding: "80px 40px",
  backgroundColor: "#f8fafc",
  textAlign: "center",
  color: "#020817",
};

const contactTitleStyle = {
  fontSize: "38px",
  fontWeight: "900",
  marginBottom: "20px",
};

const contactTextStyle = {
  fontSize: "20px",
  maxWidth: "760px",
  margin: "0 auto 25px",
  lineHeight: "1.6",
};

const contactInfoStyle = {
  fontSize: "22px",
  fontWeight: "800",
  margin: "8px 0",
};

const contactButtonStyle = {
  display: "inline-block",
  marginTop: "24px",
  backgroundColor: "#075ce8",
  color: "white",
  padding: "16px 32px",
  borderRadius: "8px",
  textDecoration: "none",
  fontSize: "18px",
  fontWeight: "800",
};
const formStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "650px",
  margin: "0 auto",
};

const inputStyle = {
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
};

const textareaStyle = {
  padding: "16px",
  borderRadius: "10px",
  border: "1px solid #cbd5e1",
  fontSize: "16px",
  resize: "vertical",
};

const footerStyle = {
  backgroundColor: "#01040f",
  color: "#cbd5e1",
  textAlign: "center",
  padding: "38px 20px",
};