import React from 'react';
import './LoadingSpinner.css'; // Import the CSS file

const LoadingSpinner = () => {
  return (
    <div className="spinner-container">
      <svg className="spinner" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48">
        <circle className="circle" cx="12" cy="12" r="10" />
        <path className="path" d="M12 6c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm1 3h-2v-2h2v2z"/>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
