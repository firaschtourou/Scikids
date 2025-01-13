import React from 'react';
import  './quizcontent.css';

export const QuizContent = ({ tasks }) => {
  return (
    <div className="quizContainer">
      {tasks.map((task, index) => (
        <div key={index} className="taskItem">
          {`${index + 1}.${task.title}`}
          {task.subtasks.map((subtask, subIndex) => (
            <div key={subIndex} className="subtaskItem">
              {`${String.fromCharCode(97 + subIndex)})${subtask}`}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};