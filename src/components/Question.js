import React from "react";
import Answer from "./Answer";

export default function Question(props) {
  //USE MAP FUNCTION TO DISPLAY ANSWERS ELEMENTS
  /* const dieElements = allDice.map((dice) => (
    <Die
      value={dice.value}
      key={dice.id}
      isHeld={dice.isHeld}
      holdDice={() => holdDice(dice.id)}
    />
  )); */

  //THIS WORKS
  return (
    <div className="question-container">
      <h2 className="question-question">{props.trivia}</h2>
      <div className="question-answer-btns-container">
        <Answer
          value={props.answerOne}
          isHeld={props.answerOneIsHeld}
          holdAnswer={props.holdAnswer}
          isCorrect={props.answerOneIsCorrect}
          showAnswerScreen={props.showAnswerScreen}
          correctAnswer={props.correctAnswer}
        />
        <Answer
          value={props.answerTwo}
          isHeld={props.answerTwoIsHeld}
          holdAnswer={props.holdAnswer}
          isCorrect={props.answerTwoIsCorrect}
          showAnswerScreen={props.showAnswerScreen}
          correctAnswer={props.correctAnswer}
        />
        <Answer
          value={props.answerThree}
          isHeld={props.answerThreeIsHeld}
          holdAnswer={props.holdAnswer}
          isCorrect={props.answerThreeIsCorrect}
          showAnswerScreen={props.showAnswerScreen}
          correctAnswer={props.correctAnswer}
        />
        <Answer
          value={props.answerFour}
          isHeld={props.answerFourIsHeld}
          holdAnswer={props.holdAnswer}
          isCorrect={props.answerFourIsCorrect}
          showAnswerScreen={props.showAnswerScreen}
          correctAnswer={props.correctAnswer}
        />
      </div>
      <hr className="question-bottom-line"></hr>
    </div>
  );
}
