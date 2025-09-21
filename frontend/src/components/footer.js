import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-info">
        <div className="f-info-socials">
          <a
            href="https://github.com/preranav-biradar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i class="fa-brands fa-github" style={{ fontSize: "32px" }}></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://www.instagram.com/prerana.v.b/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-instagram" style={{ fontSize: "32px" }}></i>
          </a>
          &nbsp;&nbsp;&nbsp;
          <a
            href="https://www.linkedin.com/in/prerana-biradar-a5643b267/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin" style={{ fontSize: "32px" }}></i>
          </a>
        </div>

        <div className="f-info-brand">
          <strong>Annapurni Pvt. Ltd.</strong> &copy; 2025 — Crafted by{" "}
          <span className="creator-name">Prerana Biradar</span>
        </div>

        <div className="f-info-links">
          <Link to="/privacy">Privacy</Link>
          &nbsp;
          <Link to="/terms">Terms</Link>
        </div>
      </div>
    </footer>
  );
};
