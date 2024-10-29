import React from "react";
import "./Testimonials.css";
import { FaUserCircle, FaUserAlt, FaUserTie } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      icon: <FaUserCircle />,
      name: "Dameon Robinson Jr",
      title: "Director of Lushiano's Armoire",
      quote: "6 years of doing business, I have never been as happy and satisfied as I am with creatives as I have been with Adnan and his team.",
    },
    {
      icon: <FaUserAlt />,
      name: "Angelica Angulo",
      title: "Social Media Coordinator, Palisade",
      quote: "We are thrilled with the work done by this agency! They have great skills and did a fantastic job delivering a wonderful project.",
    },
    {
      icon: <FaUserTie />,
      name: "Farouq Abrahman",
      title: "CEO of Skydome",
      quote: "I appreciate SkidBit. You always contribute so much to my brand. You always have an inspiring word and advice for my brand.",
    },
    {
      icon: <FaUserAlt />,
      name: "Mark Verhoeven",
      title: "Founder of Duke Belfox",
      quote: "People at SkidBit are punctual, polite and highly skilled! My go-to 3rd design agency.",
    },
    {
      icon: <FaUserCircle />,
      name: "Zaki Ashraf",
      title: "Director of Armison",
      quote: "Thanks to Conversion, our business experienced a remarkable turnaround. Their expertise in paid advertising tripled our revenue in record time.",
    },
    {
      icon: <FaUserTie />,
      name: "Jonathan Day",
      title: "Co-founder of Monday",
      quote: "Conversion transformed our business overnight. From organic growth to explosive growth with Google Ads scaling everyday!",
    },
  ];

  // Duplicate the testimonials to create a huge number of cards
  const largeTestimonialsList = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

  return (
    <div id="testimonials" className="testimonials-section">
      <button className="testimonials-button">Testimonials</button>
      <h2 className="testimonials-heading">
        There's a reason people<br/> are <span>raving</span> about us.
      </h2>
      <div className="testimonials-container">
        <div className="testimonials-column move-up">
          {largeTestimonialsList.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="icon">{testimonial.icon}</div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-column move-down">
          {largeTestimonialsList.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="icon">{testimonial.icon}</div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          ))}
        </div>
        <div className="testimonials-column move-up">
          {largeTestimonialsList.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="icon">{testimonial.icon}</div>
              <p className="quote">"{testimonial.quote}"</p>
              <p className="name">{testimonial.name}</p>
              <p className="title">{testimonial.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
