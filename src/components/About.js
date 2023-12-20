import React from 'react';

function AboutSection() {
  return (
    <section id="about" className="about">
      <div className="container" data-aos="fade-up">
        <div className="section-title">
          <h2>About</h2>
           </div>
        <div className="row">
          <div className="col-lg-4">
            <img src="assets/img/profile-img.jpg" className="img-fluid" alt="" />
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Web Developer.</h3>
            <p className="fst-italic">
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                 
                  <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong> <span>belhsnannaffeti.me</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+216 52 9420 810</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>Tunisia , Tunisia</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
            
                  <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong> <span>belhsannaffeti@gmail.com</span></li>
                  <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                </ul>
              </div>
            </div>
<p>
  Web development in Tunisia is a thriving industry with a focus on creating innovative and user-friendly solutions. The developers in Tunisia are dedicated to delivering high-quality websites and web applications tailored to meet the specific needs of clients. With a strong emphasis on creativity and problem-solving, Tunisian web developers are adept at utilizing the latest technologies to build robust and visually appealing online platforms. Their commitment to staying updated with industry trends ensures that they can provide cutting-edge digital experiences for businesses and individuals alike.
</p>

          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;