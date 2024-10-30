import React, { useEffect, useState } from "react";

const LinkedInProfile = () => {
  const [profileInfo, setProfileInfo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchLinkedInProfile = async () => {
    try {
      const response = await fetch(
        "https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100/details/experience/",
        {
          method: "GET",
          mode: "no-cors",
        }
      );
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      const experienceSection = doc.getElementById("experience");
      return experienceSection ? experienceSection.innerHTML : null;
    } catch (error) {
      console.error("Error fetching LinkedIn profile:", error);
      return null;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const profileData = await fetchLinkedInProfile();
      if (profileData) {
        setProfileInfo(profileData);
      } else {
        setError("Could not fetch LinkedIn profile information.");
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div className="content">
      {loading ? (
        <div className="spinner">Loading...</div>
      ) : error ? (
        <div>
          <p>{error}</p>
          <button
            className="btnLinkedIn text-blue-500"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/rafa%C5%82-ciesielski-820309100",
                "_blank"
              )
            }
          >
            Show LinkedIn Profile
          </button>
        </div>
      ) : (
        <div dangerouslySetInnerHTML={{ __html: profileInfo }} />
      )}
    </div>
  );
};

export default LinkedInProfile;
