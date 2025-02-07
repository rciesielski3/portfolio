import React from "react";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> 07.02.2025
      </p>
      <p>
        This Privacy Policy applies to all applications and services provided by{" "}
        <strong>Adateo Rafał Ciesielski</strong>.
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our applications or services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>We may collect the following types of information:</p>
      <ul>
        <li>
          <strong>Personal Data:</strong> Only if voluntarily provided, such as
          name and email (for support requests).
        </li>
        <li>
          <strong>Non-Personal Data:</strong> Device type, OS version, app usage
          analytics, crash logs.
        </li>
        <li>
          <strong>Location Data:</strong> Some apps may request access to
          location data (only if explicitly allowed).
        </li>
      </ul>

      <h2>3. How We Use Your Information</h2>
      <p>We use collected data for the following purposes:</p>
      <ul>
        <li>To improve app functionality and user experience.</li>
        <li>To provide customer support and respond to inquiries.</li>
        <li>To analyze app performance and fix bugs.</li>
      </ul>

      <h2>4. Contact</h2>
      <p>
        If you have any questions, please{" "}
        <a href="/portfolio/#/contact" className="privacy-contact-link">
          contact us using the form
        </a>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
