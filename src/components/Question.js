import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  return (
    <div className="question-container">
      <h2 className="question-question">{props.trivia}</h2>
      <div className="question-answer-btns-container">
        <Answer value={props.correctAnswer} />
        <Answer value={props.incorrectAnswerOne} />
        <Answer value={props.incorrectAnswerTwo} />
        <Answer value={props.incorrectAnswerThree} />
        {/* <button className="question-answer-btn">{props.correctAnswer}</button>
        <button className="question-answer-btn">
          {props.incorrectAnswerOne}
        </button>
        <button className="question-answer-btn">
          {props.incorrectAnswerTwo}
        </button>
        <button className="question-answer-btn">
          {props.incorrectAnswerThree}
        </button> */}
      </div>
      <hr className="question-bottom-line"></hr>
    </div>
  );
}
