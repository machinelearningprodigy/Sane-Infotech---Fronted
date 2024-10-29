import React, { useState } from 'react';
import './Query.css';

const Query = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`query ${isOpen ? 'open' : ''}`}>
      <div className="query-header" onClick={toggleAnswer}>
        <h3>{question}</h3>
        <button className="query-toggle">{isOpen ? '-' : '+'}</button>
      </div>
      {isOpen && <div className="query-answer"><p>{answer}</p></div>}
    </div>
  );
};

const QueryList = () => {
  const queries = [
    { question: "What services does your agency offer?", answer: "We specialize in 3D product animation and production, catering to high-end direct-to-consumer (D2C) brands. Our services include product modeling, animation, visual effects, and post-production." },
    { question: "What is the typical turnaround time for a project?", answer: "The typical turnaround time is 2-4 weeks depending on the complexity and scope of the project." },
    { question: "Can we see what we can expect from you?", answer: "Sure, feel free to check out our portfolio section for samples of our previous work." },
    { question: "What's your revisions and feedback policy?", answer: "We offer up to three revisions per project to ensure client satisfaction." },
    { question: "Do you offer any additional services besides 3D animation?", answer: "Yes, we also offer 2D animation, motion graphics, and visual effects for commercials and film production." },
    { question: "Do you offer ongoing ad optimization and management services?", answer: "Yes, we provide ongoing ad optimization services, managing performance and scaling your campaigns." }
  ];

  return (
    <div className="query-list">
      {queries.map((query, index) => (
        <Query key={index} question={query.question} answer={query.answer} />
      ))}
      <CallToAction /> {/* Add this new component here */}
    </div>
  );
};

// New CallToAction Component
const CallToAction = () => {
  return (
    <div className="cta-box">
      <h2 className="cta-title">Ready to scale your brand to <span className="cta-highlight">new heights?</span></h2>
      <p className="cta-description">If you want to achieve ground-breaking growth with increased sales and profitability with paid ads, then you're in the right place.</p>
      <button className="cta-button">Book a call</button>
    </div>
  );
};

export default QueryList;
