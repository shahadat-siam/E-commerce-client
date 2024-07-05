import React from 'react';

const LoginBackground = () => (
  <svg
    className="absolute inset-0 w-full h-full object-cover"
    viewBox="0 0 1920 1080"
    xmlns="http://www.w3.org/2000/svg"
    preserveAspectRatio="xMidYMid slice"
  >
    <defs>
      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E90074", stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 1 }} />
      </linearGradient>
      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: "#E90074", stopOpacity: 0.5 }} />
        <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 0.5 }} />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <circle cx="400" cy="300" r="150" fill="url(#grad2)" />
    <circle cx="1600" cy="800" r="200" fill="url(#grad2)" />
    <ellipse cx="960" cy="540" rx="600" ry="200" fill="none" stroke="#E90074" strokeWidth="5" />
    <path
      d="M960,100 Q1160,540 960,980 Q760,540 960,100 Z"
      fill="none"
      stroke="#fff"
      strokeWidth="5"
    />
  </svg>
);

export default LoginBackground;
