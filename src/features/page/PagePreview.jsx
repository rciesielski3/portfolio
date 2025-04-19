import PreviewCard from "../../components/PreviewCard";

const PagePreview = ({ url, title }) => {
  return <PreviewCard url={url} title={title} type="page" />;
};

export default PagePreview;
