import React, { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./ContactForm.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    title: "",
    senderEmail: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFeedbackMessage("");
    setFeedbackType("");
  };

  const validate = () => {
    const errors = {};
    if (!formData.first_name.trim())
      errors.first_name = "First name is required";
    if (!formData.title.trim()) errors.title = "Title is required";
    if (!formData.senderEmail.trim()) {
      errors.senderEmail = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.senderEmail)) {
      errors.senderEmail = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formData);
    setErrors(validationErrors);
    setFeedbackMessage("");
    setFeedbackType("");

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitting(true);
      sendEmail();
    }
  };

  const sendEmail = async () => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey =
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
      process.env.REACT_APP_EMAILJS_USER_ID;

    if (!serviceID || !templateID || !publicKey) {
      setIsSubmitting(false);
      setFeedbackType("error");
      setFeedbackMessage("Email service is not configured.");
      return;
    }

    const templateParams = {
      ...formData,
      from_name: formData.first_name,
      name: formData.first_name,
      subject: formData.title,
      email: formData.senderEmail,
      from_email: formData.senderEmail,
      reply_to: formData.senderEmail,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      setFeedbackType("success");
      setFeedbackMessage("Your message has been sent successfully.");
      setFormData({
        first_name: "",
        title: "",
        senderEmail: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS send failed:", error);
      const errorText = String(error?.text || error?.message || "");
      setFeedbackType("error");
      setFeedbackMessage(
        errorText.includes("Public Key")
          ? "Email service has an invalid public key. Please update the EmailJS configuration."
          : "The message could not be sent. Please check the form configuration or try again later."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <p className="section-kicker">Contact</p>
        <h1>Let’s talk quality, automation or product delivery.</h1>
        <p>
          Send a concise note and I will get back with context. For a faster
          signal, include the product area, stack and what kind of QA support
          you are looking for.
        </p>
        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open LinkedIn"
            title="Open LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/rciesielski3"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Open GitHub"
            title="Open GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </section>

      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name">Name</label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={errors.first_name ? "input-error" : ""}
          />
          {errors.first_name && (
            <span className="form-error">{errors.first_name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title">Subject</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={errors.title ? "input-error" : ""}
          />
          {errors.title && <span className="form-error">{errors.title}</span>}
        </div>

        <div className="form-group">
          <label htmlFor="senderEmail">Email</label>
          <input
            type="email"
            id="senderEmail"
            name="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
            className={errors.senderEmail ? "input-error" : ""}
          />
          {errors.senderEmail && (
            <span className="form-error">{errors.senderEmail}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && (
            <span className="form-error">{errors.message}</span>
          )}
        </div>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
        {feedbackMessage && (
          <p className={`form-feedback ${feedbackType}`}>{feedbackMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
