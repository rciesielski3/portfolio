import React, { useState } from "react";
import emailjs from "emailjs-com";
import { useLanguage } from "../../context/LanguageContext";
import SocialLinks from "../../shared/SocialLinks";
import "./ContactForm.css";

const initialFormData = {
  first_name: "",
  title: "",
  senderEmail: "",
  message: "",
};

const emailPattern = /\S+@\S+\.\S+/;

const getEmailConfig = () => ({
  serviceID: process.env.REACT_APP_EMAILJS_SERVICE_ID,
  templateID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  publicKey:
    process.env.REACT_APP_EMAILJS_PUBLIC_KEY ||
    process.env.REACT_APP_EMAILJS_USER_ID,
});

const ContactForm = () => {
  const [formData, setFormData] = useState(initialFormData);
  const { content } = useLanguage();
  const contactContent = content.contact;
  const { form } = contactContent;

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
      errors.first_name = form.errors.first_name;
    if (!formData.title.trim()) errors.title = form.errors.title;
    if (!formData.senderEmail.trim()) {
      errors.senderEmail = form.errors.senderEmailRequired;
    } else if (!emailPattern.test(formData.senderEmail)) {
      errors.senderEmail = form.errors.senderEmailInvalid;
    }
    if (!formData.message.trim()) errors.message = form.errors.message;

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
      setFeedbackMessage(form.missingConfig);
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
      setFeedbackMessage(form.success);
      setFormData(initialFormData);
    } catch (error) {
      console.error("EmailJS send failed:", error);
      const errorText = String(error?.text || error?.message || "");
      setFeedbackType("error");
      setFeedbackMessage(
        errorText.includes("Public Key")
          ? form.invalidPublicKey
          : form.genericError
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <section className="contact-intro">
        <p className="section-kicker">{contactContent.kicker}</p>
        <h1>{contactContent.title}</h1>
        <p>{contactContent.description}</p>
        <SocialLinks className="contact-links" />
      </section>

      <form id="contact-form" className="contact-form" onSubmit={handleSubmit}>
        {form.fields.map(({ id, label, rows, type }) => {
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
          {isSubmitting ? form.submitting : form.submit}
        </button>
        {feedbackMessage && (
          <p className={`form-feedback ${feedbackType}`}>{feedbackMessage}</p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
