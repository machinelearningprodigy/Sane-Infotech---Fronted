// avaantivirus2021@gmail.com


import React from 'react';
import './CompanyCarousel.css';  // Ensure correct import
import { FaMagic, FaStethoscope, FaWatchmanMonitoring, FaGem, FaShieldAlt } from 'react-icons/fa';

const companies = [
  { name: 'Shakeup Cosmetics', icon: <FaMagic /> },
  { name: 'Dr Trust', icon: <FaStethoscope /> },
  { name: 'Hublot', icon: <FaWatchmanMonitoring /> },
  { name: 'Messika', icon: <FaGem /> },
  { name: 'Swiss Army', icon: <FaShieldAlt /> }
];

function CompanyCarousel() {
  return (
    <div className="company-carousel">
      <div className="message">You're in good company</div> {/* Add the message here */}
      <div className="company-container">
        {companies.map((company, index) => (
          <div key={index} className="company">
            <div className="company-icon">{company.icon}</div>
            <span>{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CompanyCarousel;
