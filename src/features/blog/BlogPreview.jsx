import React, { useEffect, useState } from "react";

import LoadingSpinner from "../../components/LoadingSpinner";

const BlogPreview = ({ url, title }) => {
  const [loading, setLoading] = useState(true);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
  }, [url]);

  return (
    <div className="iframe-container">
      <h2 className="text-3xl font-bold text-blue-500 mb-4 text-shadow">
        {title}
      </h2>
      {loading ? (
        <LoadingSpinner message="Loading blog preview..." />
      ) : (
        <iframe
          src={url}
          title={title}
          allowFullScreen
          width="100%"
          height="85%"
          className="border-2 border-gray-400"
          onLoad={handleIframeLoad}
        />
      )}
    </div>
  );
};

export default BlogPreview;
