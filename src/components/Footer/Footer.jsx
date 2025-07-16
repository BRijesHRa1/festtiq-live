// import React from 'react';
// import './Footer.css';
// import logo from '../../assets/Logo (1).png';

// const Footer = () => {
//   return (
//     <div className="footer">
//       {/* Top section with logo and subscribe */}
//       <div className="footer-top">
//         <div className="footer-logo">
//           <img src={logo} alt="Festtiq Logo" className="logo-img" />
//         </div>
//         <div className="subscribe-box">
//           <input type="email" placeholder="Enter your email" />
//           <button>Subscribe</button>
//         </div>
//       </div>

//       {/* Middle section: info and links */}
//       <div className="footer-middle">
//         <div className="footer-column">
//           <div className="footer-brand-social">
//             <h4 className="footer-heading">Plan Your Event with Confidence</h4>
//             <div className="footer-socials">
//               <i className="fa-brands fa-instagram"></i>
//               <i className="fa-brands fa-facebook-f"></i>
//               <i className="fa-brands fa-x-twitter"></i>
//               <i className="fa-brands fa-linkedin-in"></i>
//             </div>
//           </div>
//         </div>

//         <div className="footer-column">
//           <h5>Quick Links</h5>
//           <ul>
//             <li>Home</li>
//             <li>Venues</li>
//             <li>Services</li>
//             <li>About Us</li>
//             <li>FAQs</li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h5>Legal</h5>
//           <ul>
//             <li>Security</li>
//             <li>Terms of Service</li>
//             <li>Privacy Policy</li>
//             <li>Cookies Policy</li>
//             <li>Support</li>
//           </ul>
//         </div>

//         <div className="footer-column">
//           <h5>Social Awareness</h5>
//           <ul>
//             <li>Food Waste Management</li>
//           </ul>

//           <h5>Contact</h5>
//           <ul>
//             <li>support@festtiq.com</li>
//             <li>+91 98765 43210</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom copyright */}
//       <div className="footer-bottom">
//         <p>Copyright © 2025, Festtiq. All Rights Reserved</p>
//       </div>
//     </div>
//   );
// };

// export default Footer;


import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './Footer.css';
import logo from '../../assets/Logo (1).png';

const Footer = () => {
  return (
    <div className="footer">
      {/* Top section with logo and subscribe */}
      <div className="footer-top">
        <div className="footer-logo">
          <img src={logo} alt="Festtiq Logo" className="logo-img" />
        </div>
        <div className="subscribe-box">
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div>
      </div>

      {/* Middle section: info and links */}
      <div className="footer-middle">
        <div className="footer-column">
          <div className="footer-brand-social">
            <h4 className="footer-heading">Plan Your Event with Confidence</h4>
            <div className="footer-socials">
              <i className="fa-brands fa-instagram"></i>
              <i className="fa-brands fa-facebook-f"></i>
              <i className="fa-brands fa-x-twitter"></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>
          </div>
        </div>

        <div className="footer-column">
          <h5>Quick Links</h5>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/venues">Venues</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/faqs">FAQs</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Legal</h5>
          <ul>
            <li><Link to="/security">Security</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/cookies">Cookies Policy</Link></li>
            <li><Link to="/help">Support</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h5>Social Awareness</h5>
          <ul>
            <li><Link to="/food-waste-management">Food Waste Management</Link></li>
          </ul>

          <h5>Contact</h5>
          <ul>
            <li><Link to="/contact">support@festtiq.com</Link></li>
            <li><a href="tel:+919876543210">+91 98765 43210</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom copyright */}
      <div className="footer-bottom">
        <p>Copyright © 2025, Festtiq. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
