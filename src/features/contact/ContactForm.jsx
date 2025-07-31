import React, { useState } from "react";
import emailjs from "emailjs-com";

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

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Validate form inputs
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

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(formData));

    if (Object.keys(validate(formData)).length === 0) {
      setIsSubmitting(true);
      sendEmail();
    }
  };

  const sendEmail = () => {
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs.send(serviceID, templateID, formData, userID).then(
      (response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitting(false);
        setFeedbackMessage("Your message has been sent successfully!");
        setFormData({
          first_name: "",
          title: "",
          senderEmail: "",
          message: "",
        });
      },
      (error) => {
        console.error("FAILED...", error);
        setIsSubmitting(false);
        setFeedbackMessage(
          "Failed to send the message. Please try again later."
        );
      }
    );
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-700 rounded-lg shadow-md mt-8">
      <h2 className="text-2xl font-bold  text-blue-500 text-shadow text-center mb-6">
        Contact Me
      </h2>
      <p className="text-orange-600 mb-6">
        If you have any questions or would like to get in touch, please fill out
        the form below.
      </p>
      <form className="space-y-4 text-left" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="first_name" className="block text-gray-300">
            First Name:
          </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={formData.first_name}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.first_name ? "border-red-500" : "border-gray-500"
            } bg-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.first_name && (
            <span className="text-red-500 text-sm">{errors.first_name}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="title" className="block text-gray-300">
            Title:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.title ? "border-red-500" : "border-gray-500"
            } bg-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.title && (
            <span className="text-red-500 text-sm">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="senderEmail" className="block text-gray-300">
            Email:
          </label>
          <input
            type="email"
            id="senderEmail"
            name="senderEmail"
            value={formData.senderEmail}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.senderEmail ? "border-red-500" : "border-gray-500"
            } bg-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.senderEmail && (
            <span className="text-red-500 text-sm">{errors.senderEmail}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="message" className="block text-gray-300">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            rows="6"
            value={formData.message}
            onChange={handleChange}
            className={`w-full p-3 border ${
              errors.message ? "border-red-500" : "border-gray-500"
            } bg-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          ></textarea>
          {errors.message && (
            <span className="text-red-500 text-sm">{errors.message}</span>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
      {feedbackMessage && (
        <p className="text-green-500 text-center mt-4">{feedbackMessage}</p>
      )}
    </div>
  );
};

export default ContactForm;
