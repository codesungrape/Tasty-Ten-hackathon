export default function Footer() {
  return (
    <div>
      <footer
        className="flex flex-col min-h-screen"
        style={{
          backgroundColor: "#2d2d2d", // Dark background
          color: "white", // White text
          textAlign: "center", // Center align text
          padding: "10px 0", // Padding on top and bottom
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Reci-yo. All rights reserved.
        </p>
        <div>
          <a
            href="/about"
            style={{
              color: "#50c878",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            About
          </a>
          <a
            href="/contact"
            style={{
              color: "#50c878",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Contact
          </a>
          <a
            href="/terms"
            style={{
              color: "#50c878",
              textDecoration: "none",
              margin: "0 10px",
            }}
          >
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
