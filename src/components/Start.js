import React from "react";

export default function Start(props) {
  return (
    <div className="start-container">
      <div className="start-content-container">
        <h1 className="start-title">Quizzical</h1>
        <p className="start-description">
          Play Quizzical to test your triva knowledge about animals!
        </p>
        <button className="start-btn">
          <span className="start-btn-text" onClick={props.startQuiz}>
            Start Quiz
          </span>
        </button>
      </div>
    </div>
  );
}
