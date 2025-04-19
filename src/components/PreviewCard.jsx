import React from "react";

import LoadingSpinner from "./LoadingSpinner";

type PreviewCardProps = {
  url: string,
  title: string,
  type?: "blog" | "page",
};

const PreviewCard: React.FC<PreviewCardProps> = ({
  url,
  title,
  type = "page",
}) => {
  const [loading, setLoading] = React.useState(true);
  const [iframeError, setIframeError] = React.useState(false);

  const handleIframeLoad = () => setLoading(false);
  const handleIframeError = () => {
    setLoading(false);
    setIframeError(true);
  };

  React.useEffect(() => {
    setLoading(true);
    setIframeError(false);
  }, [url]);

  return (
    <div className="iframe-container p-4 rounded-lg shadow bg-[#374151]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-3xl font-bold text-blue-500 text-shadow">
          {title}
        </h2>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
        >
          Open {type} in new tab
        </a>
      </div>

      {loading && !iframeError && (
        <LoadingSpinner message={`Loading ${type} preview...`} />
      )}

      {iframeError ? (
        <div className="text-red-500 text-center">
          Failed to load {type} content. Please try again later.
        </div>
      ) : (
        <iframe
          src={url}
          title={title}
          allowFullScreen
          width="100%"
          height="500px"
          className="border-2 rounded-lg border-gray-300 w-full"
          onLoad={handleIframeLoad}
          onError={handleIframeError}
        />
      )}
    </div>
  );
};

export default PreviewCard;
