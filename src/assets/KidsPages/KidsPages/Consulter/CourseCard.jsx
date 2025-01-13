import React from 'react';
import  './consulter.css';
import { CircleDecoration } from './CircleDecoration';

export const CourseCard = ({ title }) => {
  return (
    <div className="courseCard1">
      <div className="cardHeader1">
        <CircleDecoration size="16px" className="smallCircle1" />
        <CircleDecoration size="61px" className="largeCircle1" />
      </div>
      <div className="cardContent1">
        <div className="cardTitle1">{title}</div>
        <CircleDecoration size="38px" className="mediumCircle1" />
      </div>
    </div>
  );
};