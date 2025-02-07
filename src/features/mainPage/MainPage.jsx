import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { db, analytics } from "../../firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { logEvent } from "firebase/analytics";

import TypingEffect from "../../components/typing/TypingEffect";

import "./MainPage.css";

const MainPage = () => {
  const [visitCount, setVisitCount] = React.useState(0);

  React.useEffect(() => {
    const incrementVisitCount = async () => {
      const visitRef = doc(db, "counters", "visits");

      try {
        const docSnap = await getDoc(visitRef);
        if (docSnap.exists()) {
          const currentCount = docSnap.data().count || 0;
          console.log("Current count from Firestore:", currentCount);

          await updateDoc(visitRef, { count: currentCount + 1 });

          setVisitCount(currentCount + 1);
        } else {
          console.warn("Firestore document does not exist. Creating it...");
          await updateDoc(visitRef, { count: 1 });
          setVisitCount(1);
        }

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
      <div className="left-section">
        <div className="typing-container">
          <TypingEffect />
        </div>
        <div className="social-icons">
          <a
            href="https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/"
            target="_blank"
            rel="noopener noreferrer"
            className="icon linkedin z-10"
          >
            <FaLinkedin size={30} />
          </a>
          <a
            href="https://github.com/rciesielski3"
            target="_blank"
            rel="noopener noreferrer"
            className="icon github z-10"
          >
            <FaGithub size={30} />
          </a>
        </div>
        <div className="visit-counter-container">
          <p className="visit-counter">
            Visitors: <span>{visitCount}</span>
          </p>
        </div>
      </div>
      <div className="right-section">
        <img
          src={`${process.env.PUBLIC_URL}/images/myImage.webp`}
          alt="Profile"
          className="profile-image"
        />
      </div>
    </div>
  );
};

export default MainPage;
