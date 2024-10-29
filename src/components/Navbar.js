// import React from 'react';
// import { useLocation, Link } from 'react-router-dom';
// import './Navbar.css';
// import { FaPhone } from 'react-icons/fa';

// function Navbar({ scrollToSection }) {
//   const location = useLocation();
//   const isHomePage = location.pathname === '/';

//   const handleNavigation = (sectionId) => {
//     if (isHomePage && scrollToSection) {
//       scrollToSection(sectionId);
//     }
//   };

//   return (
//     <nav className="navbar"> 
//       <div className="logo">
//         {isHomePage ? (
//           <span onClick={() => handleNavigation('landingPage')}>Skitbit</span>
//         ) : (
//           <Link to="/">Skitbit</Link>
//         )}
//       </div>
//       <ul className="nav-links">
//         <li>
//           {isHomePage ? (
//             <span onClick={() => handleNavigation('landingPage')}>Home</span>
//           ) : (
//             <Link to="/">Home</Link>
//           )}
//         </li>
//         <li>
//           {isHomePage ? (
//             <span onClick={() => handleNavigation('about')}>About</span>
//           ) : (
//             <Link to="/">About</Link>
//           )}
//         </li>
//         <li>
//           {isHomePage ? (
//             <span onClick={() => handleNavigation('services')}>Services</span>
//           ) : (
//             <Link to="/">Services</Link>
//           )}
//         </li>
//         <li>
//           {isHomePage ? (
//             <span onClick={() => handleNavigation('ourClients')}>Our Clients</span>
//           ) : (
//             <Link to="/">Our Clients</Link>
//           )}
//         </li>
//         <li>
//           {isHomePage ? (
//             <span onClick={() => handleNavigation('bookACall')}>Contact</span>
//           ) : (
//             <Link to="/">Contact</Link>
//           )}
//         </li>
//         <li className="call-button">
//           <FaPhone /> Book a call
//         </li>
//       </ul>
//     </nav>
//   );
// }

// export default Navbar;



import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';

const styles = `
  .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 50%;  /* Adjusted to be flexible */
      max-width: 1200px;  /* Sets a maximum width for larger screens */
      padding: 15px 10px;
      position: fixed;  /* Fixed position to stay on top during scroll */
      top: 25px;
      left: 50%;  /* Centers the navbar */
      transform: translateX(-50%);  /* Horizontal centering */
      background-color: rgba(49, 47, 47, 0.788);
      border-radius: 15px;
      box-shadow: 10px 10px 8px rgba(0, 0, 0, 0.15);
      z-index: 10;
      transition: all 0.3s ease-in-out;
  }

  .logo {
      font-size: 1.2em;
      margin-right: 10px;
      cursor: pointer;
  }

  .nav-links {
      display: flex;
      gap: 13px;
      list-style: none;
      align-items: center;
  }

  .nav-links li {
      color: white;
      cursor: pointer;
      font-size: 0.85em;
      padding: 6px 10px;
      transition: all 0.3s ease;
      border-radius: 5px;
  }

  .nav-links li:hover {
      background-color: rgba(221, 214, 214, 0.521);
      color: black;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
  }

  .nav-links a {
      color: white; /* Default link color */
      text-decoration: none; /* Remove underline */
  }

  .nav-links a:visited {
      color: white; /* Visited link color */
  }

  .nav-links a:hover {
      color: white; /* Hover link color */
  }

  .nav-links a:active {
      color: white; /* Active link color */
  }

  .logo a {
      color: white; /* Default logo link color */
      text-decoration: none; /* Remove underline */
  }

  .logo a:visited {
      color: white; /* Visited logo link color */
  }

  .logo a:hover {
      color: white; /* Hover logo link color */
  }

  .logo a:active {
      color: white; /* Active logo link color */
  }

  .call-button {
      background-color: #F34427;
      padding: 6px 10px;
      border-radius: 20px;
      color: white;
      display: flex;
      align-items: center;
      font-size: 0.85em;
      transition: all 0.3s ease;
  }

  .call-button svg {
      margin-right: 5px;
      transform: scaleX(-1); /* Mirror the icon horizontally */
  }

  .call-button:hover {
      background-color: #f34627c5;
      color: black;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
      transform: translateY(-2px);
`;

const Navbar = ({ scrollToSection }) => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className="navbar">
      <style>{styles}</style> {/* Inject CSS styles */}
      <div className="logo">
        {isHomePage ? (
          <span onClick={() => scrollToSection('landingPage')}>Skitbit</span>
        ) : (
          <Link to="/">Skitbit</Link>
        )}
      </div>
      <ul className="nav-links">
        <li>
          {isHomePage ? (
            <span onClick={() => scrollToSection('landingPage')}>Home</span>
          ) : (
            <Link to="/">Home</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <span onClick={() => scrollToSection('about')}>About</span>
          ) : (
            <Link to="/">About</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <span onClick={() => scrollToSection('services')}>Services</span>
          ) : (
            <Link to="/">Services</Link>
          )}
        </li>
        <li>
          {isHomePage ? (
            <span onClick={() => scrollToSection('ourClients')}>Our Clients</span>
          ) : (
            <Link to="/">Our Clients</Link>
          )}
        </li>
        {/* Contact button updated for external redirection */}
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li className="call-button">
          <a
            href="https://cal.com/theskitbit/15-min"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            <FaPhone /> Book a call
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
