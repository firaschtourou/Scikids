import React from 'react';
import  './consulter.css';
import { CircleDecoration } from './CircleDecoration';

export const QuizCard = () => {
  return (
    <div className="quizCard1">
      <div className="cardHeader1">
        <CircleDecoration size="16px" className="smallCircle1" />
        <CircleDecoration size="61px" className="largeCircle1" />
      </div>
      <h2 className="quizTitle1">QUIZ</h2>
      <div className="decorationContainer1">
        <CircleDecoration size="38px" className="mediumCircle1" />
      </div>
    </div>
  );
};