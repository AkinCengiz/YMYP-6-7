import React from "react";
import BlogImage from "../components/Blog/BlogImage";
import PageTitle from "../components/UI/PageTitle";
import BlogText from "../components/Blog/BlogText";
import Blogs from "../components/Blog/Blogs";

const BlogsPage = () => {
  return (
    <div className="w-100">
      <PageTitle classes={"bg-warning"} title={"Blogs"} />
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
      <Blogs />
    </div>
  );
};

export default BlogsPage;
