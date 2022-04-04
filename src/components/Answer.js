import React from "react";

export default function Answer(props) {
  let stylesBefore = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "white",
  };

  let stylesAfter = {};

  if (props.isCorrect || props.correctAnswer === props.value) {
    stylesAfter = {
      backgroundColor: "#94d7a2",
    };
  } else if (props.isHeld && !props.isCorrect) {
    stylesAfter = {
      backgroundColor: "#f8bcbc",
    };
  } else {
    stylesAfter = {
      backgroundColor: "white",
      opacity: 0.5,
    };
  }

  return (
    <div>
      <button
        className="question-answer-btn"
        onClick={() => props.holdAnswer(props.value)}
        style={!props.showAnswerScreen ? stylesBefore : stylesAfter}
      >
        {props.value}
      </button>
    </div>
  );
}
