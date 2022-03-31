import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";
import triviaData from "../triviaData";

export default function Main(props) {
  const [gameState, setGameState] = React.useState({
    isActive: props.activeGame,
    totalQuestions: 0,
    correct: 0,
  });

  const [allTriviaData, setAllTriviaData] = React.useState(triviaData.results);

  const questionsElements = allTriviaData.map((trivQuest) => (
    <Question
      trivia={trivQuest.question}
      correctAnswer={trivQuest.correct_answer}
      incorrectAnswerOne={trivQuest.incorrect_answers[0]}
      incorrectAnswerTwo={trivQuest.incorrect_answers[1]}
      incorrectAnswerThree={trivQuest.incorrect_answers[2]}
      key={nanoid()}
    />
  ));

  return (
    <div className="main-container">
      {questionsElements}
      <button className="main-btn-check-answers">
        <span className="main-btn-check-answers-text">Check answers</span>
      </button>
    </div>
  );
}
