import React, { useEffect, useState } from "react";

import LoadingSpinner from "../../components/LoadingSpinner";

const BlogPreview = ({ url, title }) => {
  const [loading, setLoading] = useState(true);
  const [iframeError, setIframeError] = useState(false);

  const handleIframeLoad = () => {
    setLoading(false);
  };

  const handleIframeError = () => {
    setLoading(false);
    setIframeError(true);
  };

  useEffect(() => {
    setLoading(true);
    setIframeError(false);
  }, [url]);

  return (
    <div className="iframe-container">
      <h2 className="text-3xl font-bold text-blue-500 mb-4 text-shadow">
        {title}
      </h2>
      {loading && !iframeError && (
        <LoadingSpinner message="Loading blog preview..." />
      )}
      {iframeError ? (
        <div className="text-red-500 text-center">
          Failed to load blog content. Please try again later.
        </div>
      ) : (
        <iframe
          src={url}
          title={title}
          allowFullScreen
          width="100%"
          height="85%"
          className="border-2 border-gray-400"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}
    </div>
  );
};

export default BlogPreview;
