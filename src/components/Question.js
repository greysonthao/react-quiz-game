import React from "react";

export default function Question(props) {
  return (
    <div className="question-container">
      <h2 className="question-question">{props.trivia}</h2>
      <div className="question-answer-btns-container">
        <button className="question-answer-btn">{props.correctAnswer}</button>
        <button className="question-answer-btn">
          {props.incorrectAnswerOne}
        </button>
        <button className="question-answer-btn">
          {props.incorrectAnswerTwo}
        </button>
        <button className="question-answer-btn">
          {props.incorrectAnswerThree}
        </button>
      </div>
      <hr className="question-bottom-line"></hr>
    </div>
  );
}
