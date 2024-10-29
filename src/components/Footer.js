// import React from 'react';
// import './Footer.css';
// import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
// import { Link as ScrollLink } from 'react-scroll'; // Import react-scroll Link
// import { Link } from 'react-router-dom'; // Import Link for internal navigation

// const Footer = () => {
//   return (
//     <footer className="footer">
//       <div className="footer-container">
//         {/* Left section with icons */}
//         <div className="footer-left">
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook className="footer-icon" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaTwitter className="footer-icon" />
//           </a>
//           <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
//             <FaLinkedin className="footer-icon" />
//           </a>
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram className="footer-icon" />
//           </a>
//         </div>

//         {/* Middle section with the animated dot */}
//         <div className="footer-center">
//           <div className="footer-dot"></div>
//         </div>

//         {/* Right section with links */}
//         <div className="footer-right">
//           <div className="footer-links">
//             <ul className="footer-links-column">
//               <li>Quick Links</li>
//               <li><ScrollLink to="home" smooth={true} duration={500}>Home</ScrollLink></li>
//               <li><ScrollLink to="about" smooth={true} duration={500}>About</ScrollLink></li>
//               <li><Link to="/contact">Contact Us</Link></li>
//               <li><Link to="/privacy">Privacy Policy</Link></li>
//               <li><Link to="/refund">Refund Policy</Link></li>
//               <li><Link to="/terms">Terms & Conditions</Link></li>
//             </ul>
//             <ul className="footer-links-column">
//               <li>Useful Links</li>
//               {/* Use react-scroll Link for smooth scrolling */}
//               <li><ScrollLink to="services" smooth={true} duration={500}>Our Services</ScrollLink></li>
//               <li><ScrollLink to="clients" smooth={true} duration={500}>Our Clients</ScrollLink></li>
//               <li><ScrollLink to="process" smooth={true} duration={500}>Our Process</ScrollLink></li>
//               <li><ScrollLink to="testimonials" smooth={true} duration={500}>Testimonials</ScrollLink></li>
//             </ul>
//           </div>
//         </div>

//         {/* Bottom left positioned link */}
//         <div className="footer-bottom-left">
//           <a href="https://designrush.com" target="_blank" rel="noopener noreferrer">
//             Tagline goes here
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;



// VERSION 3
import React from 'react';
import './Footer.css';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = ({ scrollToSection }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollOrRedirect = (section) => {
    if (location.pathname === '/') {
      scrollToSection(section);
    } else {
      navigate('/');
      setTimeout(() => scrollToSection(section), 100); // Delay for scroll to trigger after navigation
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook className="footer-icon" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="footer-icon" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="footer-icon" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="footer-icon" />
          </a>
        </div>

        <div className="footer-center">
          <div className="footer-dot"></div>
        </div>

        <div className="footer-right">
          <div className="footer-links">
            <ul className="footer-links-column">
              <li>Quick Links</li>
              <li onClick={() => handleScrollOrRedirect('landingPage')}>Home</li>
              <li onClick={() => handleScrollOrRedirect('about')}>About</li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
              <li><a href="/terms">Terms & Conditions</a></li>
            </ul>
            <ul className="footer-links-column">
              <li>Useful Links</li>
              <li onClick={() => handleScrollOrRedirect('services')}>Our Services</li>
              <li onClick={() => handleScrollOrRedirect('ourClients')}>Our Clients</li>
              <li onClick={() => handleScrollOrRedirect('process')}>Our Process</li>
              <li onClick={() => handleScrollOrRedirect('testimonials')}>Testimonials</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-left">
          <a href="https://designrush.com" target="_blank" rel="noopener noreferrer">
            Tagline goes here
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
