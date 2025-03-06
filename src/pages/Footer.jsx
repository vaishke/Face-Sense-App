import React from "react";
import "../App.css"; 


const Footer = () => {
  return (
    <footer className="foot">
      <h3>Contact Us</h3>
      <p>Email: <a href="mailto:support@facesense.com">support@facesense.com</a></p>
      <p>Phone: +1 234 567 890</p>
      <p>Address: 123 Tech Street, Innovation City, 56789</p>
      <h3 id="follow">Follow Us</h3>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank"><img src="/facebook.png" alt="Facebook" /></a>
        <a href="https://twitter.com" target="_blank"><img src="/twitter.png" alt="Twitter" /></a>
        <a href="https://linkedin.com" target="_blank"><img src="/linkedin.png" alt="LinkedIn" /></a>
      </div>
      <h3>Copyright &copy; 2025 FaceSense. All rights reserved</h3>
    </footer>
  );
};

export default Footer;
