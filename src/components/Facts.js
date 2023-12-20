import React from 'react';

function FactsSection() {
  
  return (
    <section id="facts" className="facts">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>Facts</h2>
          <p>Web and Mobile Developer with more than 2 years of experience in MERN stack. Based in Tunisia.</p>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="count-box">
              <i className="bi bi-emoji-smile"></i>
              <span data-purecounter-start="1" data-purecounter-end="10+" data-purecounter-duration="1" className="purecounter">10+</span>
              <p>Happy Clients</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
            <div className="count-box">
              <i className="bi bi-journal-richtext"></i>
              <span data-purecounter-start="1" data-purecounter-end="10+" data-purecounter-duration="1" className="purecounter">10+</span>
              <p>Projects</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-headset"></i>
              <span data-purecounter-start="1" data-purecounter-end="1000+" data-purecounter-duration="1" className="purecounter">1000+</span>
              <p>Hours Of Support</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
            <div className="count-box">
              <i className="bi bi-award"></i>
              <span data-purecounter-start="1" data-purecounter-end="25" data-purecounter-duration="1" className="purecounter">10+</span>
              <p>Awards</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FactsSection;
