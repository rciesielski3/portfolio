import React from "react";
import { Link } from "react-router-dom";
import { useSEO, generateBreadcrumbSchema } from "../../hooks/useSEO";
import "./PrivacyPolicy.css";

const PrivacyPolicy = () => {
  // Add SEO meta tags for privacy policy page
  useSEO({
    title: 'Privacy Policy | Rafal Ciesielski',
    description: 'Privacy policy for rciesielski.dev. Data handling, cookies, and your privacy rights.',
    canonical: 'https://rciesielski.dev/privacy-policy',
    schema: generateBreadcrumbSchema([
      { name: 'Home', url: 'https://rciesielski.dev/' },
      { name: 'Privacy Policy', url: 'https://rciesielski.dev/privacy-policy' }
    ]),
  });

  return (
    <div className="privacy-container">
      <h1>Privacy Policy</h1>
      <p>
        <strong>Last updated:</strong> 01.06.2026
      </p>
      <p>
        This Privacy Policy applies to apps and related services published by{" "}
        <strong>Adateo Rafał Ciesielski</strong>, including products distributed
        through Google Play or other app stores.
      </p>

      <h2>1. Developer and contact</h2>
      <p>
        For privacy questions, data deletion requests, or parent/guardian
        requests, use the privacy point of contact below.
      </p>

      <h2>2. Information we collect</h2>
      <p>
        The apps are designed to collect only data needed to provide and improve
        the educational experience:
      </p>
      <ul>
        <li>
          <strong>Support data:</strong> name, email address, and message
          content only when you contact us voluntarily.
        </li>
        <li>
          <strong>Diagnostics:</strong> device model, operating system version,
          app version, crash logs, and basic usage events used to fix bugs and
          improve app quality.
        </li>
        <li>
          <strong>Learning data:</strong> progress, answers, scores, settings,
          or preferences when an app needs them for its educational features.
          This data is stored locally unless a specific app clearly explains
          that cloud sync or account features are available.
        </li>
        <li>
          <strong>Google Play data:</strong> purchase, subscription, install, or
          review information may be processed by Google Play when you use Google
          Play features.
        </li>
      </ul>
      <p>
        The apps do not request precise location, contacts, photos, microphone,
        camera, or similar sensitive permissions unless a specific feature
        clearly requires it and the permission prompt is shown by the device.
      </p>

      <h2>3. How we use information</h2>
      <p>Collected data is used only for these purposes:</p>
      <ul>
        <li>to provide educational features and remember app settings,</li>
        <li>to respond to support or privacy requests,</li>
        <li>to diagnose crashes, fix bugs, and improve reliability,</li>
        <li>to comply with Google Play and legal obligations.</li>
      </ul>

      <h2>4. Sharing and third parties</h2>
      <p>
        We do not sell user data and do not use educational app data for
        behavioral advertising. Data may be processed by trusted service
        providers that help operate the apps and this website, such as Google
        Play services, app distribution and hosting providers, analytics or
        crash reporting services, and EmailJS for contact form delivery. Data
        may also be shared if required by law or to protect users, the apps, or
        the developer.
      </p>

      <h2>5. Security</h2>
      <p>
        We use reasonable technical and organizational safeguards for personal
        and sensitive user data. Access is limited to what is needed to operate,
        support, and improve the apps. No method of storage or transmission is
        perfectly secure, but we avoid collecting unnecessary data.
      </p>

      <h2>6. Retention and deletion</h2>
      <p>
        Support messages are retained only as long as needed to answer the
        request and maintain necessary records. Diagnostics and analytics are
        retained according to the settings of the service provider. Locally
        stored learning data can usually be removed by clearing app data or
        uninstalling the app. You may request deletion of personal data by using
        the contact link below.
      </p>

      <h2>7. Children and students</h2>
      <p>
        The apps may be used for education by children or students. We do not
        knowingly collect more personal data from children than is needed for an
        educational feature, support, safety, or legal compliance. We do not
        sell children&apos;s data or serve behavioral advertising based on
        children&apos;s activity. Parents or guardians can contact us to ask
        about data access, correction, or deletion.
      </p>

      <h2>8. Changes</h2>
      <p>
        We may update this Privacy Policy when app features, providers, or legal
        requirements change. The latest version will remain available at this
        public URL.
      </p>

      <h2>9. Contact</h2>
      <p>
        If you have any privacy questions or requests, contact us using the
        form.
      </p>
      <Link to="/contact" className="privacy-contact-link">
        Open contact form
      </Link>
    </div>
  );
};

export default PrivacyPolicy;
