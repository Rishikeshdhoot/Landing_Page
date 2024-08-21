import React from "react";
import BlogContext from "../../../contexts/blogContext/blogContext";
import "./index.css";

const BlogListCard = ({ image, title, description, onClick }) => {
  const Image = "https:" + image;
  return (
    <div onClick={onClick} className="blog-card">
      <img src={Image} alt="Blog Thumbnail" className="blog-card__image" />
      <div className="textContent">
        <h2 className="blog-card__title">{title}</h2>
        <p className="blog-card__description">{description}</p>
      </div>
    </div>
  );
};

export default BlogListCard;
