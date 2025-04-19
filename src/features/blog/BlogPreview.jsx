import PreviewCard from "../../components/PreviewCard";

const BlogPreview = ({ url, title }) => {
  return <PreviewCard url={url} title={title} type="blog" />;
};

export default BlogPreview;
