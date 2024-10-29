import React from 'react';
import './Comparisons.css';

const Comparisons = () => {
  return (
    <section className="comparison-section">
      <button className="comparison-button">Comparisons</button>
      <div className="comparison-header">
        <h2 className="comparison-title">
          But, why would you<br/> want to work <span>with us?</span>
        </h2>
        <div className="comparison-switch">
          <span>Other Agencies</span>
          <span className="skitbit-label">
            <img src="/images/skitbit.png" alt="Skitbit Logo" className="skitbit-logo" />
          </span>
        </div>
      </div>
      
      <div className="comparison-grid">
        <div className="comparison-card card-other">
          <ul>
            <li><span>✕</span> Awful communication</li>
            <li><span>✕</span> Don’t know how to sell</li>
            <li><span>✕</span> Outdated content strategies</li>
            <li><span>✕</span> Lack of industry research</li>
            <li><span>✕</span> Outsourced to mediocre talent from Fiverr</li>
          </ul>
        </div>
        <div className="comparison-card card-skitbit">
          <ul>
            <li><span>✓</span> Constant, proactive communication</li>
            <li><span>✓</span> Our videos sell 8x better</li>
            <li><span>✓</span> Tailored best-fit solutions</li>
            <li><span>✓</span> Provides industry-specific expertise</li>
            <li><span>✓</span> Experts with 10+ years of experience</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Comparisons;
