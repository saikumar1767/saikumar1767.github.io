import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";

const ContactSection = () => {
  const formRef = useRef();
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (e) => {
    e.preventDefault();
    
    const name = e.currentTarget[0].value;
    const email = e.currentTarget[1].value;
    const message = e.currentTarget[2].value;
    if (!name || !email || !message) {
      enqueueSnackbar("Please fill all the fields!", { variant: "error" });
      return;
    }
    else if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      enqueueSnackbar("Please enter a valid email!", { variant: "error" });
      return;
    }
    else if (message.length < 5 || message.length > 1000) {
      enqueueSnackbar("Message should be between 5 and 1000 characters long!", { variant: "error" });
      return;
    }

    emailjs
      .sendForm('service_7b5a4tm', 'template_qx6wzdc', formRef.current, 'T_e__wGnTcvDBY_aN')
      .then(() => {
        enqueueSnackbar("Message sent successfully!", { variant: "success" });
        formRef.current.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        enqueueSnackbar("Failed to send message. Please try again later!", { variant: "error" });
      });
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">Contact</span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Let’s make the internet a little cooler together.
            Got an idea, a bug, or just wanna say hi? Drop your message below and I’ll hit you back faster than a CI/CD pipeline on a good day.
          </span>
        </h2>
        <div className="contact__form-container">
          <form ref={formRef} onSubmit={sendEmail} id="contact-form" className="contact__form">
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">Name</label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">Email</label>
              <input
                required
                placeholder="Enter Your Email"
                type="email"
                className="contact__form-input"
                name="email"
                id="email"
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">Message</label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>);
};

export default ContactSection;
