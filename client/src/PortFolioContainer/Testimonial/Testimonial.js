import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Testimonial.css";
import shape from "./shape-bg.png";
import Gowdhaman from './Gowdhaman.jpg';
import shivam from './Shivam.jpg';
import Atharva from './Atharva.jpg'

export default function Testimonial(props) {
 
  const options = {
    loop: true,
    margin: 0,
    nav: true,
    animateIn: "bounceInRight",
    animateOut: "bounceOutRight",
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };

  return (
    <div>
      <ScreenHeading
        title={"Testimonial"}
        subHeading={"What My Mentors Say About Me"}
      />
      <section className="testimonial-section" id={props.id || ""}>
        <div >
          <div className="row">
            <OwlCarousel
              className="owl-carousel"
              id="testimonial-carousel"
              {...options}
            >
              <div>
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Dedicated and willingness to complete the task. Punctual about his work and delivers decent outcomes.
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={shivam} alt="no internet connection"></img>
                    <h5>Shivam Mahajan</h5>
                    <p>Co-Founder, Floqer</p>
                  </div>
                </div>
              </div>

              <div >
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      Hardworking and Quick Learner. Always completed stories and enhancements on time.  
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Gowdhaman} alt="no internet connection"></img>
                    <h5>Gowdhaman Ponnusamy</h5>
                    <p>Software Engineer Team Leader, WiseTech Global</p>
                  </div>
                </div>
              </div>

              <div >
                <div className="testi-item">
                  <div className="testi-comment">
                    <p>
                      <i className="fa fa-quote-left" />
                      It was nice to mentor him as a senior. Grasped new technologies and delivered outcomes as expected. Always eager to learn more. 
                      <i className="fa fa-quote-right" />
                    </p>
                  </div>
                  <div className="client-info">
                    <img src={Atharva} alt="no internet connection"></img>
                    <h5>Atharva M.</h5>
                    <p>Software Engineer, WiseTech Global</p>
                  </div>
                </div>
              </div>

            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={shape} alt="Loading" />
      </div>
    </div>
  );
}