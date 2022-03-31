import React from "react";

export default function Answer(props) {
  return (
    <div>
      <button className="question-answer-btn">{props.value}</button>
    </div>
  );
}
