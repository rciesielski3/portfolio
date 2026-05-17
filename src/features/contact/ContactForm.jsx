import React, { useState } from "react";
import emailjs from "emailjs-com";
import SocialLinks from "../../shared/SocialLinks";
import "./ContactForm.css";

const initialFormData = {
  first_name: "",
  title: "",
  senderEmail: "",
  message: "",
};

const emailPattern = /\S+@\S+\.\S+/;

const formFields = [
  {
    id: "first_name",
    label: "Name",
    type: "text",
  },
  {
    id: "title",
    label: "Subject",
    type: "text",
  },
  {
    id: "senderEmail",
    label: "Email",
    type: "email",
  },
  {
    id: "message",
    label: "Message",
    rows: 5,
    type: "textarea",
  },
];

const getEmailConfig = () => ({
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey:
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
    process.env.REACT_APP_EMAILJS_USER_ID,
});

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState("");
  const [feedbackType, setFeedbackType] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((currentFormData) => ({ ...currentFormData, [name]: value }));
    setErrors((currentErrors) => ({ ...currentErrors, [name]: "" }));
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
    } else if (!emailPattern.test(formData.senderEmail)) {
      errors.senderEmail = "Email address is invalid";
    }
    if (!formData.message.trim()) errors.message = "Message is required";

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setFeedbackMessage("");
    setFeedbackType("");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);
    const { serviceID, templateID, publicKey } = getEmailConfig();

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
      setFormData(initialFormData);
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
        <SocialLinks className="contact-links" />
      </section>

      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        {formFields.map(({ id, label, rows, type }) => {
          const Field = type === "textarea" ? "textarea" : "input";

          return (
            <div className="form-group" key={id}>
              <label htmlFor={id}>{label}</label>
              <Field
                type={type === "textarea" ? undefined : type}
                id={id}
                name={id}
                rows={rows}
                value={formData[id]}
                onChange={handleChange}
                className={errors[id] ? "input-error" : ""}
              />
              {errors[id] && <span className="form-error">{errors[id]}</span>}
            </div>
          );
        })}

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
