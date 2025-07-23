import "../css/Footer.css";
import Image from "next/image";

function Footer() {
  return (
    <footer id="footer">
      <div className="contact-banner">
        <div className="info-section">
          <div className="info-column">
            <a href="/terms-and-conditions/" target="_blank">
              Terms And Conditions
            </a>
            <a href="/refund-policy/" target="_blank">
              Refund Policy
            </a>
            <a href="/privacy-policy/" target="_blank">
              Privacy Policy
            </a>
          </div>

          <div className="info-column"></div>

          <div className="info-column">
            <div>
              <a href="https://instagram.com/">
                <Image
                  src="/favicon.ico"
                  alt="instagram"
                  width={50}
                  height={50}
                />
                <span style={{ marginLeft: "6px" }}>@FarmTech</span>
              </a>
              <a href="https://www.linkedin.com/in/">
                <Image
                  src="/favicon.ico"
                  alt="linkedin"
                  width={50}
                  height={50}
                />
                <span style={{ marginLeft: "6px" }}>FarmTech</span>
              </a>
              <a href="https://www.facebook.com/">
                <Image
                  src="/favicon.ico"
                  alt="facebook"
                  width={50}
                  height={50}
                />
                <span style={{ marginLeft: "6px" }}>FarmTech</span>
              </a>
            </div>
          </div>
        </div>

        <div className="top-row">
          <div className="contact-coloumn">
            <div className="contact-coloumn">
              <div
                className="whatsapp"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                  flexWrap: "wrap", // optional for small screens
                }}
              >
                <h3 className="get-in-touch m-0" style={{ margin: 0 }}>
                  Contact us on
                </h3>

                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  className="btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "10px",
                    textDecoration: "none",
                    whiteSpace: "nowrap", // prevents button text wrap
                  }}
                >
                  <span style={{ fontSize: "1rem" }}>WhatsApp</span>
                  <Image
                    src="/favicon.ico"
                    alt="whatsapp"
                    width={50}
                    height={50}
                  />
                </a>
              </div>
            </div>

            <p
              style={{
                marginTop: "1rem",
                marginLeft: "15px",
                color: "#466329",
                fontFamily: "Poppins",
              }}
            >
              Call us on +91 9876543210 to get instant assistance.
            </p>
          </div>

          <p className="copyright">2025 FarmTech. All Rights Reserved.</p>
        </div>

        <p className="email">support@farmtech.com</p>
        <img
          src="https://cdn.prod.website-files.com/62551fa7bee8db16e944f95d/62860b0f0b2b3a571dd63efe_6267e27c6f5bad251ae41a80_5f206110d859773e2b0a7b85_image-footer-farm-template.webp"
          alt="footerbg"
          className="footerimg"
        />
      </div>
    </footer>
  );
}

export default Footer;
