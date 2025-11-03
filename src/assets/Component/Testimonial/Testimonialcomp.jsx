import React from "react";
import "./WholeTestimonial.css";

import { FaStar } from "react-icons/fa6";
import { FaStarHalf } from "react-icons/fa";




const ReviewCard = ({ img, name, username, body }) => {
  return (
    <figure className="review-card">
      <div className="review-card-header">
        <img
          className="review-avatar"
          
          alt={name}
          src={img}
        />
        <div className="review-user-info">
          <figcaption className="review-name">{name}</figcaption>
        </div>
      </div>
      <blockquote className="review-body">
        {body}. 
      </blockquote>
      <div className="starsection">
        <FaStar className="starfontfortestimonial"/>
        <FaStar className="starfontfortestimonial"/>
        <FaStar className="starfontfortestimonial"/>
        <FaStar className="starfontfortestimonial"/>
        <FaStarHalf className="starfontfortestimonial"/>
      </div>
    </figure>
  );
};

export default ReviewCard;
