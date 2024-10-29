import React from 'react';

const Refund = () => {
  return (
    <div className="refund-container">
      <h1 className="refund-title">Refund Policy</h1>
      <div className="refund-breadcrumb">
        <a href="/" className="refund-breadcrumb-link">Home</a> / Refund Policy
      </div>
      <section className="refund-section">
        <p className="refund-content-text">
          Clients may ask for a refund within 3 days of a deal if the payment is made in advance by sending an email to our official email <a href="mailto:info@saneinfotech.com" className="email-link">info@saneinfotech.com</a> or calling us on our phone numbers. Please remember, there is no refund after the completion of a project or part of the project for which payment was made, no matter whether it's a minor project or major.
        </p>
      </section>
    </div>
  );
};

export default Refund;

/* Inline CSS */
const styles = `
  .refund-container {
    max-width: 64rem;
    margin: 0 auto;
    padding: 1.5rem;
    font-family: Arial, sans-serif;
  }
  
  .refund-title {
    margin-top: 5rem;
    font-size: 2rem;
    font-weight: bold;
    color: #4b0082;
  }
  
  .refund-breadcrumb {
    font-size: 0.875rem;
    margin-bottom: 1.5rem;
  }
  
  .refund-breadcrumb-link {
    color: #4b0082;
    text-decoration: none;
  }
  
  .refund-breadcrumb-link:hover {
    text-decoration: underline;
  }
  
  .refund-section {
    margin-bottom: 2rem;
  }
  
  .refund-content-text {
    font-size: 1rem;
    line-height: 1.5;
    color: white;
  }
  
  .email-link {
    color: #4b0082;
    text-decoration: none;
  }
  
  .email-link:hover {
    text-decoration: underline;
  }
`;

// Append styles to the head
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
