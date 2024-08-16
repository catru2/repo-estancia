import React from 'react';

function Card({ src, alt }) {
  return (
    <div>
      <img src={src} alt={alt} className="w-full h-auto object-cover"
      />
    </div>
  );
}

export default Card;