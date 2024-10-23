import React from "react";

const BlogPreview = ({ url, title }) => {
  return (
    <div className="iframe-container">
      <h2 className="text-3xl font-bold text-blue-500 mb-4 text-shadow">
        {title}
      </h2>
      <iframe
        src={url}
        title={title}
        allowFullScreen
        width="100%"
        height="85%"
        className="border-2 border-gray-300"
      />
    </div>
  );
};

export default BlogPreview;
