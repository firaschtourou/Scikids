import React from 'react';
import  './consulter.css';

export const CircleDecoration = ({ size, className }) => {
  return (
    <div 
      className={`${"circleDecoration1"} ${className}`} 
      style={{ width: size, height: size }}
      aria-hidden="true"
    />
  );
};