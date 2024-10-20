import React from 'react';
import './about.css';
import AboutValues from './about-values/AboutValues';
import AboutSection1 from './about-section-1/AboutSection1';

function About() {
  return (
    <div className="about-container">
      <div className="about-hero-container">
        <div className="about-hero-heading">
          <h1>About Us</h1>
        </div>
      </div>

      <div className="about-content-wrapper">
        {/* <div className="about-content-container">
           <div className="about-content-section-1">
            <div className="about-content-section-1-left">
              <h1>YOUR TOP-NOTCH BPO SERVICE PROVIDER</h1>
              <p>
                Incisive Solutions, a leading outsourcing service provider, is
                headquartered at India and has gained a reputation in the good
                books of all our globally placed clients. We are
                well-specialized in all sorts of data entry services, no matter
                how simple or complex, they seem to be.
              </p>
              <p>
                Our other essential solutions include data processing, data
                conversion, scanning and indexing, web research, and much
                more.We believe in offering uncompromising quality in output to
                achieve 100% customer satisfaction.
              </p>
              <p>
                Complete accuracy, on-time delivery, and higher reliability are
                the three essential features that distinguish us from our
                competitors in the market. Our team of professional experts has
                a rich experience in offering customized solutions, by
                maintaining a complete focus on the industrial standards and the
                value of the firm.
              </p>
            </div>

            <div className="about-content-section-1-right">
              <video autoPlay loop muted playsInline>
                <source src="/assets/about-section-1.mp4" type="video/mp4" />
              </video>
            </div>
          </div>
        </div> */}
        <AboutSection1 />
        <AboutValues />
      </div>
    </div>
  );
}

export default About;
