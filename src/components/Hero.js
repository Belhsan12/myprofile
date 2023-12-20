import React, { useEffect } from 'react';

import Typed from 'typed.js';
function HeroSection() {
  
  useEffect(() => {
    const options = {
      strings: ["DevOps", "MERN Developer", "Freelancer"],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true
    };
    const typed = new Typed('.typed', options);

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
      <div className="container" data-aos="zoom-in" data-aos-delay="100">
        <h1>Naffeti Belhsan</h1>
        <p>I'm <span className="typed"></span></p>
        <div className="social-links">
          <a href="" className="twitter"><i className="bx bxl-twitter"></i></a>
          <a href="https://www.facebook.com/fbnaffeti/" className="facebook"><i className="bx bxl-facebook"></i></a>
          <a href="https://www.instagram.com/belhsan_n/" className="instagram"><i className="bx bxl-instagram"></i></a>
          <a href="https://github.com/Belhsan12" className="google-plus"><i className="bx bxl-github"></i></a>
          <a href="https://www.linkedin.com/in/belhsan-naffeti-695530215/" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
