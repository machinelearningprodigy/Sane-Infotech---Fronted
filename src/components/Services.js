import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-header">
        <button className="service-button">Services</button>
        <h1 className="services-title">How can we help <span>you?</span></h1>
        <p className="services-subtitle">
          From Google ads, to Meta ads, to TikTok ads, and even content creation, we’ve got you covered on everything front.
        </p>
      </div>
      <div className="services-grid">
        <div className="service-card card-animation">
          <h2 className="service-card-title">3D animation</h2>
          <p className="service-card-desc">
            Our team has decades of combined experience creating winning Facebook & Instagram campaigns.
          </p>
        </div>
        <div className="service-card card-rendering">
          <h2 className="service-card-title">Product Rendering</h2>
          <p className="service-card-desc">
            Put your products in front of active buyers and beat out the competition with expert Google Shopping services.
          </p>
        </div>
        <div className="service-card card-filming">
          <h2 className="service-card-title">Filming + 3D</h2>
          <p className="service-card-desc">
            With over 800 million monthly users in the US, TikTok is the strongest link between your brand and the next generation.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Services;
