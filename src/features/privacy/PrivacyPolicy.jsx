import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  return (
    <div style={{ maxWidth: "800px", margin: "40px auto", padding: "20px" }}>
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last Updated:</strong> 07.02.2025
      </p>
      <p>
        This Privacy Policy applies to all applications and services provided by
        Adateo Rafał Ciesielski.
      </p>

      <h2>1. Introduction</h2>
      <p>
        This Privacy Policy explains how we collect, use, and protect your
        information when you use our applications or services.
      </p>

      <h2>2. Information We Collect</h2>
      <p>
        We may collect non-personal data such as device type, OS version, and
        app usage analytics. We do not collect personal data unless explicitly
        stated.
      </p>

      <h2>3. How We Use Your Information</h2>
      <p>
        - To improve app functionality and performance. <br />
        - To provide customer support. <br />- To monitor crash reports and app
        errors.
      </p>

      <h2>4. Third-Party Services</h2>
      <p>
        Some apps may use third-party services like Google Play Services,
        analytics tools, or external APIs. These services collect data as per
        their own policies.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We take reasonable steps to secure data, but no method is 100% secure.
        Use at your own risk.
      </p>

      <h2>6. Changes to This Privacy Policy</h2>
      <p>
        We may update this policy from time to time. Changes will be posted on
        this page.
      </p>

      <h2>7. Contact</h2>
      <p>
        If you have any questions, feel free to{" "}
        <Link
          to="/contact"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          contact us using the form
        </Link>
        .
      </p>
    </div>
  );
};

export default PrivacyPolicy;
