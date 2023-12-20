import React from 'react';

const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials section-bg">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Testimonials</h2>
        </div>

        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
          <div className="swiper-wrapper">

            <div className="swiper-slide">
              <div className="testimonial-item">
                <img src="assets/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>Saul Goodman</h3>
                <h4>Ceo &amp; Founder</h4>
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
              </div>
            </div>{/* End testimonial item */}
          </div>
          <div className="swiper-pagination"></div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
