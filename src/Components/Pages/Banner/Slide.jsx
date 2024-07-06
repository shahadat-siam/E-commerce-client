import React from 'react';
import './Slide.css'; // Import your CSS for styling

const Slide = ({ image, title, subtitle }) => {
  return (
    <div className="slide-container">
      <div className="slide">
        <img src={image} alt={title} className="slide-image w-full  h-[90vh]" />
        <div className="slide-overlay">
          <div className="slide-content">
            <h2 className="animated-text">{title}</h2>
            <p>{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;
