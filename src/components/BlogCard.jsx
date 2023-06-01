import React from "react";

const BlogCard = ({ post }) => {
  const { question, answer } = post || {};
  return (
    <div className="rounded-lg border p-6">
      <h3 className="text-xl font-extrabold text-black">{question}</h3>
      <p className="mt-4">{answer}</p>
    </div>
  );
};

export default BlogCard;
