import React from 'react';
import './Process.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faCog, faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';

const Process = () => {
  return (
    <div id="process" className="process-container">
      <div className="process-title">
        <button className="process-button">Process</button>
        <h1>Our simple 3-step process<br/> to <span>skyrocket</span> your business.</h1>
        <p className="process-subtitle">From YouTube ads, to Meta ads and even Apple-KeyNote <br/> Presentations, we've got you covered on everything front.</p>
      </div>

      <div className="process-steps">
        <div className="process-step">
          <div className="process-icon-wrapper">
            <FontAwesomeIcon icon={faSearch} className="process-icon" />
          </div>
          <h3>Concept</h3>
          <p className="step-description">We'll start by analysing your sales funnel and seeing what's holding you back.</p>
        </div>
        <div className="process-step">
          <div className="process-icon-wrapper">
            <FontAwesomeIcon icon={faCog} className="process-icon" />
          </div>
          <h3>We are on it</h3>
          <p className="step-description">Based on the approved concept, we create a 3D video with all animations.</p>
        </div>
        <div className="process-step">
          <div className="process-icon-wrapper">
            <FontAwesomeIcon icon={faMoneyBillWave} className="process-icon" />
          </div>
          <h3>Final Delivery</h3>
          <p className="step-description">The stage where you will see the final video with materials and lighting in its ultimate quality.</p>
        </div>
      </div>
    </div>
  );
};

export default Process;
