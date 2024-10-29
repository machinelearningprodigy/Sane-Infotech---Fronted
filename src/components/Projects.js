import React, { useState, useRef } from 'react';
import { FaChevronLeft, FaChevronRight, FaMagic, FaWatchmanMonitoring, FaGem } from 'react-icons/fa';
import './Projects.css';

const projectData = [
  {
    title: "Concealer - 3D Product Animation",
    company: "SHAKEUP",
    companyIcon: <FaMagic />,
    description: "Our task? To create visuals that didn't just compete but dominated",
    additionalText: "Our visuals surpassed expectations, elevating the brand above its competitors.",
    imageUrl: "/images/skyborne.png",
    linkUrl: "https://www.example.com/concealer"
  },
  {
    title: "Product Launch Presentation",
    company: "YAMAHA",
    companyIcon: <FaWatchmanMonitoring />,
    description: "These guys don't mess around. We saw results from month one.",
    additionalText: "Tony Gomez\nFounder of Thursday",
    imageUrl: "/images/cosmetics.png",
    linkUrl: "https://www.example.com/product-launch"
  },
  {
    title: "CGI Sneakers - 3D Product",
    company: "NEEMAN'S",
    companyIcon: <FaGem />,
    description: "Conversion from where we were before to now is absolutely amazing.",
    additionalText: "Charlotte Johansen\nFounder of Tuesday",
    imageUrl: "/images/kamisori.png",
    linkUrl: "https://www.example.com/cgi-sneakers"
  }
];

const ProjectCard = ({ project }) => (
  <div className="project-card">
    <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
      <div className="thumbnail-wrapper">
        <div className="thumbnail-container">
          <img src={project.imageUrl} alt={project.title} className="project-image" />
        </div>
      </div>
    </a>
    <div className="project-info">
      <div className="company-icon-container">
        {project.companyIcon}
      </div>
      <h3><a href={project.linkUrl} target="_blank" rel="noopener noreferrer">{project.title}</a></h3>
      <p className="description">{project.description}</p>
    </div>
  </div>
);

const Projects = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef(null);

  const handleScroll = (direction) => {
    const container = containerRef.current;
    const scrollAmount = direction === 'left' ? -container.offsetWidth : container.offsetWidth;
    const newPosition = scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: 'smooth'
    });

    setScrollPosition(newPosition);
  };

  const showLeftButton = scrollPosition > 0;
  const showRightButton = containerRef.current && 
    scrollPosition < containerRef.current.scrollWidth - containerRef.current.offsetWidth;

  return (
    <section id="clients" className="projects-section">
      {/* Top Section */}
      <div className="projects-header">
        <button className="our-clients-button">Our Clients</button>
        <div className="red-dot"></div>
        <h2 className="projects-title">
          Check Out Our Recent <span className="italic-text">Projects</span>.
        </h2>
        <p className="projects-subtitle">
          Witness our project outcomes. Our work speaks volumes<br/> about our expertise.
        </p>
      </div>

      {/* Projects Cards Section */}
      <div className="projects-container" ref={containerRef}>
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>

      {/* Navigation Buttons */}
      {showLeftButton && (
        <button className="nav-button prev" onClick={() => handleScroll('left')}>
          <FaChevronLeft />
        </button>
      )}
      {showRightButton && (
        <button className="nav-button next" onClick={() => handleScroll('right')}>
          <FaChevronRight />
        </button>
      )}
    </section>
  );
};

export default Projects;
