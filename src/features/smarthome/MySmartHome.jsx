import React from "react";

const MySmartHome = () => {
  return (
    <div className="iframe-container">
      <iframe
        src="https://mysmarthome.cba.pl/"
        title="My Smart Home Preview"
        allowFullScreen
        width="100%"
        height="600px"
        style={{ border: "none" }}
      />
    </div>
  );
};

export default MySmartHome;
