import React from 'react';

const SignupBackground = () => (
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
      <radialGradient id="grad3" cx="50%" cy="50%" r="50%">
        <stop offset="0%" style={{ stopColor: "#E90074", stopOpacity: 0.8 }} />
        <stop offset="100%" style={{ stopColor: "#fff", stopOpacity: 0 }} />
      </radialGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#grad1)" />
    <circle cx="300" cy="400" r="200" fill="url(#grad2)" />
    <circle cx="1700" cy="600" r="250" fill="url(#grad2)" />
    <ellipse cx="960" cy="540" rx="700" ry="300" fill="none" stroke="#E90074" strokeWidth="5" />
    <path
      d="M960,50 Q1160,540 960,1030 Q760,540 960,50 Z"
      fill="none"
      stroke="#fff"
      strokeWidth="5"
    />
    <circle cx="960" cy="540" r="400" fill="url(#grad3)" />
  </svg>
);

export default SignupBackground;
