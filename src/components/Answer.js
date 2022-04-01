import React from "react";

export default function Answer(props) {
  let styles1 = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "white",
  };

  let styles2 = {
    backgroundColor: props.isHeld && props.isCorrect ? "#94d7a2" : "#F8BCBC",
  };

  return (
    <div>
      <button
        className="question-answer-btn"
        onClick={() => props.holdAnswer(props.value)}
        /* style={props.showAnswerScreen ? `${styles1}` : `${styles2}`} */
        style={styles1}
      >
        {props.value}
      </button>
    </div>
  );
}
