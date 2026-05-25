import React from "react";
import { FaArrowRight, FaEnvelope } from "react-icons/fa";
import { Link } from "react-router-dom";

import { doc, getDoc, increment, setDoc } from "firebase/firestore";
import { logEvent } from "firebase/analytics";
import { db, analytics } from "../../firebase";

import TypingEffect from "../../components/typing/TypingEffect";
import { profile } from "../../config/profile";
import { useLanguage } from "../../context/LanguageContext";
import SocialLinks from "../../shared/SocialLinks";

import "./MainPage.css";

const MainPage = () => {
  const [visitCount, setVisitCount] = React.useState(0);
  const { content } = useLanguage();
  const { home, profile: profileContent } = content;

  React.useEffect(() => {
    const incrementVisitCount = async () => {
      const visitRef = doc(db, "counters", "visits");

      try {
        await setDoc(visitRef, { count: increment(1) }, { merge: true });
        const docSnap = await getDoc(visitRef);
        setVisitCount(docSnap.data()?.count || 0);

        logEvent(analytics, "page_view", {
          page_location: window.location.href,
          page_title: document.title,
          region: "auto",
        });
      } catch (error) {
        console.error("Error updating visitor count:", error);
      }
    };

    incrementVisitCount();
  }, []);

  return (
    <div className="main-page">
      <div className="content-wrapper">
        <div className="left-section">
          <div className="hero-kicker">{profileContent.heroRole}</div>
          <h1 className="hero-name">{profile.name}</h1>
          <TypingEffect
            staticText={home.typing.staticText}
            words={home.typing.words}
          />
          <p className="hero-copy">{home.heroCopy}</p>
          <dl className="career-snapshot" aria-label={home.careerSnapshotLabel}>
            {home.careerSnapshot.map((item) => (
              <div key={item.label}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </dl>
          <div className="hero-actions">
            <Link to="/experience" className="primary-action">
              {home.actions.experience} <FaArrowRight aria-hidden="true" />
            </Link>
            <Link to="/contact" className="secondary-action">
              <FaEnvelope aria-hidden="true" /> {home.actions.contact}
            </Link>
          </div>
        </div>

        <div className="right-section">
          <div className="profile-card">
            <img
              src={`${process.env.PUBLIC_URL}/images/myImage.webp`}
              alt={profile.name}
              className="profile-image"
            />
            <div className="profile-panel">
              <span>{home.currentFocusLabel}</span>
              <p>{profileContent.currentFocus}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bottom-section">
        <SocialLinks />

        <div className="visit-counter-container">
          <p className="visit-counter">
            {home.visitorsLabel}: <span>{visitCount}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
