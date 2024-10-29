// import React, { useRef } from 'react';
// import './App.css';
// import Navbar from './components/Navbar';  // Assuming Navbar is in the same folder
// import LandingPage from './components/LandingPage';
// import CompanyCarousel from './components/CompanyCarousel';
// import Projects from './components/Projects';
// import Results from './components/Results';
// import Services from './components/Services';
// import Comparisons from './components/Comparisons';
// import Process from './components/Process';
// import Testimonials from './components/Testimonials';
// import QueryList from './components/Query';
// import Footer from './components/Footer';
// import About from './components/About';

// function App() {
//   // Create refs for each section
//   const landingPageRef = useRef(null);
//   const aboutRef = useRef(null);
//   const resultsRef = useRef(null);
//   const servicesRef = useRef(null);
//   const processRef = useRef(null);
//   const faqsRef = useRef(null);

//   // Function to handle smooth scrolling
//   const scrollToSection = (section) => {
//     switch (section) {
//       case 'landingPage':
//         landingPageRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'about':
//         aboutRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'results':
//         resultsRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'services':
//         servicesRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'process':
//         processRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       case 'faqs':
//         faqsRef.current.scrollIntoView({ behavior: 'smooth' });
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="App">
//       {/* Navbar with scrollToSection passed as prop */}
//       <Navbar scrollToSection={scrollToSection} />

//       {/* Landing Page Section */}
//       <div className="landing-page" ref={landingPageRef}>
//         <LandingPage />
//       </div>

//       {/* Company Carousel Section */}
//       <div className="carousel-section">
//         <CompanyCarousel />
//       </div>

//       {/* Projects Section */}
//       <div className="projects-section">
//         <Projects />
//       </div>

//       {/* About Section */}
//       <div className="about" ref={aboutRef}>
//         <About />
//       </div>

//       {/* Results Section */}
//       <div className="results" ref={resultsRef}>
//         <Results />
//       </div>

//       {/* Services Section */}
//       <div className="results" ref={servicesRef}>
//         <Services />
//       </div>

//       {/* Comparisons Section */}
//       <div className="results">
//         <Comparisons />
//       </div>

//       {/* Process Section */}
//       <div className="results" ref={processRef}>
//         <Process />
//       </div>

//       {/* Testimonials Section */}
//       <div className="results">
//         <Testimonials />
//       </div>

//       {/* FAQs Section */}
//       <div className="results" ref={faqsRef}>
//         <QueryList />
//       </div>

//       {/* Footer Section */}
//       <div className="results">
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default App;






// import React, { useRef, useEffect } from 'react';
// import './App.css';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import LandingPage from './components/LandingPage';
// import CompanyCarousel from './components/CompanyCarousel';
// import Projects from './components/Projects';
// import Services from './components/Services';
// import Comparisons from './components/Comparisons';
// import Process from './components/Process';
// import Testimonials from './components/Testimonials';
// import QueryList from './components/Query';
// import Footer from './components/Footer';
// import About from './components/About';
// import Terms from './components/Terms';
// import Privacy from './components/Privacy'; // Import the new Privacy component
// import Refund from './components/Refund';
// import Contact from './components/Contact';
// import Event from './components/Event';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function App() {
//   // Create refs for each section
//   const landingPageRef = useRef(null);
//   const aboutRef = useRef(null);
//   const servicesRef = useRef(null);
//   const ourClientsRef = useRef(null);
//   const contactRef = useRef(null);

//   // Function to handle smooth scrolling
//   const scrollToSection = (section) => {
//     const refMap = {
//       landingPage: landingPageRef,
//       about: aboutRef,
//       services: servicesRef,
//       ourClients: ourClientsRef,
//       contact: contactRef
//     };

//     const ref = refMap[section];
//     if (ref && ref.current) {
//       ref.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <Router>
//       <ScrollToTop />
//       <div className="App">
//         <Navbar scrollToSection={scrollToSection} />
        
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <>
//                 <div ref={landingPageRef}>
//                   <LandingPage />
//                 </div>

//                 <div className="carousel-section">
//                   <CompanyCarousel />
//                 </div>

//                 <div ref={aboutRef}>
//                   <About />
//                 </div>

//                 <div ref={servicesRef}>
//                   <Services />
//                 </div>

//                 <div ref={ourClientsRef}>
//                   <Projects />
//                 </div>

//                 <div className="comparisons">
//                   <Comparisons />
//                 </div>

//                 <div className="process">
//                   <Process />
//                 </div>

//                 <div className="testimonials">
//                   <Testimonials />
//                 </div>

//                 <div className="queryList">
//                   <QueryList />
//                 </div>
//               </>
//             }
//           />
//           <Route path="/contact" element={<Contact />} /> 
//           <Route path="/terms" element={<Terms />} />
//           <Route path="/privacy" element={<Privacy />} /> {/* Add the new Privacy route */}
//           <Route path="/refund" element={<Refund />} /> {/* Add the new Privacy route */}
//         </Routes>

//         <Footer />
//       </div>
//     </Router>
//   );
// }

// export default App;













// VERSION 3
import React, { useRef } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import CompanyCarousel from './components/CompanyCarousel';
import Projects from './components/Projects';
import Services from './components/Services';
import Comparisons from './components/Comparisons';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import QueryList from './components/Query';
import Footer from './components/Footer';
import About from './components/About';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Refund from './components/Refund';
import Contact from './components/Contact';

function App() {
  const landingPageRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const ourClientsRef = useRef(null);
  const processRef = useRef(null); // New ref for Process
  const testimonialsRef = useRef(null); // New ref for Testimonials
  const contactRef = useRef(null);

  const scrollToSection = (section) => {
    const refMap = {
      landingPage: landingPageRef,
      about: aboutRef,
      services: servicesRef,
      ourClients: ourClientsRef,
      process: processRef, // Add to ref mapping
      testimonials: testimonialsRef, // Add to ref mapping
      contact: contactRef,
    };

    const ref = refMap[section];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Router>
      <div className="App">
        <Navbar scrollToSection={scrollToSection} />
        
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div ref={landingPageRef}>
                  <LandingPage />
                </div>

                <div className="carousel-section">
                  <CompanyCarousel />
                </div>

                <div ref={aboutRef}>
                  <About />
                </div>

                <div ref={servicesRef}>
                  <Services />
                </div>

                <div ref={ourClientsRef}>
                  <Projects />
                </div>

                <div className="comparisons">
                  <Comparisons />
                </div>

                <div ref={processRef} className="process"> {/* Update: Added ref */}
                  <Process />
                </div>

                <div ref={testimonialsRef} className="testimonials"> {/* Update: Added ref */}
                  <Testimonials />
                </div>

                <div className="queryList">
                  <QueryList />
                </div>
              </>
            }
          />
          <Route path="/contact" element={<Contact />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/refund" element={<Refund />} />
        </Routes>

        <Footer scrollToSection={scrollToSection} />
      </div>
    </Router>
  );
}

export default App;
