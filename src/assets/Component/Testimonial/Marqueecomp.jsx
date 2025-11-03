import React from "react";
import "./WholeTestimonial.css";

const Marquee = ({ children, reverse = false, pauseOnHover = false, className = "" }) => {
  return (
    <div
      className={`marquee ${reverse ? "marquee-reverse" : ""} ${
        pauseOnHover ? "marquee-pause-hover" : ""
      } ${className}`}
    >
      <div className="marquee-content">
        {children}
        {children} {/* duplicate for seamless loop */}
      </div>
    </div>
  );
};

export default Marquee;
