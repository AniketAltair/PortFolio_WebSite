import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./Testimonial.css";
import {testimonialImageLinks} from '../../utilities/ImageLinks'

export default function Testimonial(props) {

  // set image links to css
  document.documentElement.style.setProperty('--testimonial-bg',`url(${testimonialImageLinks.bg_1})`);
 
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

  // Testimonial Static Data
  const testimonialData = [
    {
      name:"Shivam Mahajan",
      role:"Co-Founder, Floqer",
      comment:"Dedicated and willingness to complete the task. Punctual about his work and delivers decent outcomes.",
      image: testimonialImageLinks.Shivam
    },
    {
      name:"Gowdhaman Ponnusamy",
      role:"Software Engineer Team Leader, WiseTech Global",
      comment:"Hardworking and Quick Learner. Always completed stories and enhancements on time.",
      image: testimonialImageLinks.Gowdhaman
    },
    {
      name:"Atharva M.",
      role:"Software Engineer, WiseTech Global",
      comment:"It was nice to mentor him as a senior. Grasped new technologies and delivered outcomes as expected. Always eager to learn more.",
      image: testimonialImageLinks.Atharva
    }
  ];

  const testimonialComponent = () =>{
    return(
      testimonialData.map((item)=>(
        <div>
          <div className="testi-item">
            <div className="testi-comment">
              <p>
                <i className="fa fa-quote-left" />
                  {item.comment}
                <i className="fa fa-quote-right" />
              </p>
            </div>
            <div className="client-info">
              <img src={item.image} alt="no internet connection"></img>
              <h5>{item.name}</h5>
              <p>{item.role}</p>
            </div>
          </div>
        </div>
      ))
    );
  }

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
              {testimonialComponent()}
            </OwlCarousel>
          </div>
        </div>
      </section>
      <div className="footer-image">
        <img src={testimonialImageLinks.shape_bg} alt="Loading" />
      </div>
    </div>
  );
}