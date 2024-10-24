import React, { useState } from "react";
import {Typewriter} from 'react-simple-typewriter';
import axios from "axios";
import { toast } from "react-toastify";
import ScreenHeading from "../../utilities/ScreenHeading/ScreenHeading";
import "./ContactMe.css";
import {contactMeImageLinks} from '../../utilities/ImageLinks'

export default function ContactMe(props) {
  
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [banner, setBanner] = useState("");
  const [bool, setBool] = useState(false);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  // When Send button is pressed
  const submitForm = async (e) => {
    e.preventDefault();
    try {
      let data = {
        name,
        email,
        message,
      };
      setBool(true);
      const res = await axios.post(`/contact`, data);
      if (name.length === 0 || email.length === 0 || message.length === 0) {
        setBanner(res.data.msg);
        toast.error(res.data.msg);
        setBool(false);
      } else if (res.status === 200) {
        setBanner(res.data.msg);
        toast.success(res.data.msg);
        setBool(false);

        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contact-me-main-container" id={props.id || ""}>
      <ScreenHeading subHeading={"Lets Keep In Touch"} title={"Contact Me"} />
      <div className="central-form">
        <div className="col">
          <h2 className="title">
            <Typewriter 
                words={[
                    "Get In Touch 📧"
                ]}
                loop={0}
                deleteSpeed={0}
                delaySpeed={1000}
            />
          </h2>{" "}
            <a href='https://github.com/AniketAltair' target="_blank">
                <i className='fa fa-github-square'></i>
            </a>
            <a href='https://www.linkedin.com/in/aniket-katakdhond-47b93b18b/' target="_blank">
                <i className='fa fa-linkedin-square'></i>
            </a>
            <a href='https://www.instagram.com/aniket_31301/' target="_blank">
                <i className='fa fa-instagram'></i>
            </a>
            <a href='https://www.facebook.com/aniket.katakdhond.12/' target="_blank">
                <i className='fa fa-facebook-square'></i>
            </a>
            <a href='https://x.com/Aniket31301' target="_blank">
                <i className='fa fa-twitter-square'></i>
            </a>
        </div>
        <div className="back-form">
          <div className="img-back">
            <h4>Send Your Email Here!</h4>
            <img src={contactMeImageLinks.mailz} alt="image not found" />
          </div>
          <form onSubmit={submitForm}>
            <p>{banner}</p>
            <label htmlFor="name">Name</label>
            <input type="text" onChange={handleName} value={name} />
            <label htmlFor="email">Email</label>
            <input type="email" onChange={handleEmail} value={email} />
            <label htmlFor="message">Message</label>
            <textarea type="text" onChange={handleMessage} value={message} />
            <div className="send-btn">
              <button type="submit">
                send
                <i className="fa fa-paper-plane" />
                {bool ? (
                  <b className="load">
                    <img src={contactMeImageLinks.load_gif} alt="img not responding" />
                  </b>
                ) : (
                  ""
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}