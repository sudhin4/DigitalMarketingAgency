import React from "react";
import Marquee from "./Marqueecomp"; // assuming you already have it
import ReviewCard from "./Testimonialcomp";
import "./WholeTestimonial.css";
import image1 from "../../../Images/person1.png";
import image2 from "../../../Images/person2.png";
import image3 from "../../../Images/person3.png";
import image4 from "../../../Images/person4.png";
import image5 from "../../../Images/person5.png";
import image6 from "../../../Images/person6.png";

const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "Fantastic experience! Their digital marketing strategies increased our traffic and leads significantly.",
    img: image1,
  },
  {
    name: "Jill",
    username: "@jill",
    body: "This digital marketing agency delivers outstanding results — creative campaigns, strong SEO, and excellent communication.”",
    img: image2,
  },
  {
    name: "John",
    username: "@john",
    body: "“Fantastic experience! Their digital marketing strategies increased our traffic and leads significantly.”",
    img: image3,
  },
  {
    name: "Jane",
    username: "@jane",
    body: "This digital marketing agency delivers outstanding results — creative campaigns, strong SEO, and excellent communication”",
    img: image4,
  },
  {
    name: "Jenny",
    username: "@jenny",
    body: "“Fantastic experience! Their digital marketing strategies increased our traffic and leads significantly.”",
    img: image5,
  },
  {
    name: "James",
    username: "@james",
    body: "This digital marketing agency delivers outstanding results — creative campaigns, strong SEO, and excellent communication”",
    img: image6,
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const MarqueeDemo = () => {
  return (
    <div className="marquee-container">
      <Marquee pauseOnHover className="marquee-row">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="marquee-row">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>

      <div className="marquee-gradient-left"></div>
      <div className="marquee-gradient-right"></div>
    </div>
  );
};

export default MarqueeDemo;
