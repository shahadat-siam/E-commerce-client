import React from 'react';

const KnockMeLogoText = () => (
  <svg width="200" height="80" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#E90074', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ff79a1', stopOpacity: 1 }} />
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="150%" height="150%">
        <feDropShadow dx="0" dy="0" stdDeviation="5" floodColor="#000000" floodOpacity="0.3" />
      </filter>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        `}
      </style>
    </defs>
    <g filter="url(#shadow)">
      <text
        x="50%"
        y="60"
        fontFamily="'Montserrat', sans-serif"
        fontSize="40"
        fontWeight="700"
        fill="url(#textGradient)"
        textAnchor="middle"
      >
        KnockMe
      </text>
    </g>
  </svg>
);

export default KnockMeLogoText;
