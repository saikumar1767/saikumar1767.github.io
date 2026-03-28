import React, { useRef } from "react";
import { FiFileText, FiGithub, FiLinkedin, FiMail, FiSend } from "react-icons/fi";
import emailjs from "emailjs-com";
import { useSnackbar } from "notistack";
import { profile } from "../data/portfolioData";

const ContactSection = () => {
  const formRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();

  const sendEmail = (event) => {
    event.preventDefault();

    const form = formRef.current;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      enqueueSnackbar("Please fill out every field before sending.", {
        variant: "error",
      });
      return;
    }

    if (!email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
      enqueueSnackbar("Please enter a valid email address.", {
        variant: "error",
      });
      return;
    }

    if (message.length < 10 || message.length > 1000) {
      enqueueSnackbar("Your message should be between 10 and 1000 characters.", {
        variant: "error",
      });
      return;
    }

    emailjs
      .sendForm(
        "service_7b5a4tm",
        "template_qx6wzdc",
        form,
        "T_e__wGnTcvDBY_aN"
      )
      .then(() => {
        enqueueSnackbar("Message sent successfully.", { variant: "success" });
        form.reset();
      })
      .catch((error) => {
        console.error("EmailJS send failed:", error);

        const errorText = String(error?.text || "");
        const details = [error?.status, errorText].filter(Boolean).join(" - ");

        let message = details
          ? `Message failed to send. ${details}`
          : "Message failed to send. Please try again later.";

        if (errorText.includes("Invalid grant")) {
          message =
            "Email service needs reconnecting in EmailJS. Your Gmail authorization appears to have expired.";
        }

        enqueueSnackbar(message, {
          variant: "error",
        });
      });
  };

  return (
    <section id="contact" className="contact-section section-shell" data-reveal>
      <div className="main-container">
        <div className="contact-panel glass-card">
          <div className="contact-panel__intro">
            <span className="section-heading__eyebrow">Contact</span>
            <h2 className="contact-panel__title">
              Open to conversations with applied AI, AI product, and platform teams.
            </h2>
            <p className="contact-panel__body">
              If you are hiring for an AI-facing software role, building internal
              tooling around modern models, or need an engineer who can bridge product
              and backend systems, I would be glad to connect.
            </p>

            <div className="contact-links">
              <a
                href="https://www.linkedin.com/in/saikumarkasarla"
                target="_blank"
                rel="noreferrer"
                className="contact-links__item"
              >
                <FiLinkedin />
                LinkedIn
              </a>
              <a
                href="https://github.com/saikumar1767"
                target="_blank"
                rel="noreferrer"
                className="contact-links__item"
              >
                <FiGithub />
                GitHub
              </a>
              <a href={`mailto:${profile.email}`} className="contact-links__item">
                <FiMail />
                {profile.email}
              </a>
              <a
                href={profile.resumeHref}
                target="_blank"
                rel="noreferrer"
                className="contact-links__item"
              >
                <FiFileText />
                Resume
              </a>
            </div>
          </div>

          <form
            id="contact-form"
            ref={formRef}
            onSubmit={sendEmail}
            className="contact-form"
          >
            <label className="field-group" htmlFor="name">
              <span>Name</span>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your name"
                className="field-input"
                required
              />
            </label>

            <label className="field-group" htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="name@example.com"
                className="field-input"
                required
              />
            </label>

            <label className="field-group" htmlFor="message">
              <span>Message</span>
              <textarea
                id="message"
                name="message"
                rows="6"
                placeholder="Tell me about the team, role, or AI product."
                className="field-input field-input--textarea"
                required
              />
            </label>

            <button type="submit" className="button button--primary button--full">
              Send message
              <FiSend />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
