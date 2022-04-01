import React from "react";

export default function Answer(props) {
  let styles = {
    backgroundColor: props.isHeld ? "#D6DBF5" : "white",
  };

  return (
    <div>
      <button
        className="question-answer-btn"
        onClick={() => props.holdAnswer(props.value)}
        style={styles}
      >
        {props.value}
      </button>
    </div>
  );
}
