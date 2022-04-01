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

  const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = React.useState(
    getQuestionAndAnswers()
  );

  //DELETE THESE EVENTUALLY
  console.log("allQuestionsAndAnswers");
  console.log(allQuestionsAndAnswers);

  function generateAnswer(value) {
    return {
      value: value,
      isHeld: false,
    };
  }

  function getQuestionAndAnswers() {
    let qAndAsArray = [];

    for (let i = 0; i < allTriviaData.length; i++) {
      let qAndAs = {
        triviaQuestion: allTriviaData[i].question,
        correctAnswer: allTriviaData[i].correct_answer,
        allAnswers: [
          generateAnswer(allTriviaData[i].correct_answer),
          generateAnswer(allTriviaData[i].incorrect_answers[0]),
          generateAnswer(allTriviaData[i].incorrect_answers[1]),
          generateAnswer(allTriviaData[i].incorrect_answers[2]),
        ],
      };
      qAndAsArray.push(qAndAs);
    }

    return qAndAsArray;
  }

  //CREATE A RANDOM FUNCTION TO RANDOMIZE THE ANSWER ORDERING
  /*   function randNumForAnswers() {
    let randNum = Math.floor(Math.random() * 4);
    console.log(randNum);
    return randNum;
  } */

  const questionsElements = allQuestionsAndAnswers.map((qAndAs) => (
    <Question
      trivia={qAndAs.triviaQuestion}
      answerOne={qAndAs.allAnswers[0].value}
      answerOneIsHeld={qAndAs.allAnswers[0].isHeld}
      answerTwo={qAndAs.allAnswers[1].value}
      answerTwoIsHeld={qAndAs.allAnswers[1].isHeld}
      answerThree={qAndAs.allAnswers[2].value}
      answerThreeIsHeld={qAndAs.allAnswers[2].isHeld}
      answerFour={qAndAs.allAnswers[3].value}
      answerFourIsHeld={qAndAs.allAnswers[3].isHeld}
      key={qAndAs.triviaQuestion}
      allQAndAs={qAndAs}
      holdAnswer={handleClickAnswer}
    />
  ));

  function handleClickAnswer(clickedAnswer) {
    console.log("clickedAnswer");
    console.log(clickedAnswer);

    let newQAndAsArray = [...allQuestionsAndAnswers];

    for (let i = 0; i < newQAndAsArray.length; i++) {
      for (let j = 0; j < newQAndAsArray[0].allAnswers.length; j++) {
        if (clickedAnswer === newQAndAsArray[i].allAnswers[j].value) {
          newQAndAsArray[i].allAnswers[j].isHeld =
            !newQAndAsArray[i].allAnswers[j].isHeld;
        }
      }
    }

    setAllQuestionsAndAnswers(newQAndAsArray);
  }

  return (
    <div className="main-container">
      {questionsElements}
      <button className="main-btn-check-answers">
        <span className="main-btn-check-answers-text">Check answers</span>
      </button>
    </div>
  );
}

//THIS WORKS
/* return (
    <div className="main-container">
      <Question
        trivia={allQuestionsAndAnswers[0].triviaQuestion}
        answerOne={allQuestionsAndAnswers[0].allAnswers[0]}
        answerTwo={allQuestionsAndAnswers[0].allAnswers[1]}
        answerThree={allQuestionsAndAnswers[0].allAnswers[2]}
        answerFour={allQuestionsAndAnswers[0].allAnswers[3]}
        key={allQuestionsAndAnswers[0].triviaQuestion}
      />
      <Question
        trivia={allQuestionsAndAnswers[1].triviaQuestion}
        answerOne={allQuestionsAndAnswers[1].allAnswers[0]}
        answerTwo={allQuestionsAndAnswers[1].allAnswers[1]}
        answerThree={allQuestionsAndAnswers[1].allAnswers[2]}
        answerFour={allQuestionsAndAnswers[1].allAnswers[3]}
        key={allQuestionsAndAnswers[1].triviaQuestion}
      />
      <Question
        trivia={allQuestionsAndAnswers[2].triviaQuestion}
        answerOne={allQuestionsAndAnswers[2].allAnswers[0]}
        answerTwo={allQuestionsAndAnswers[2].allAnswers[1]}
        answerThree={allQuestionsAndAnswers[2].allAnswers[2]}
        answerFour={allQuestionsAndAnswers[2].allAnswers[3]}
        key={allQuestionsAndAnswers[2].triviaQuestion}
      />
      <Question
        trivia={allQuestionsAndAnswers[3].triviaQuestion}
        answerOne={allQuestionsAndAnswers[3].allAnswers[0]}
        answerTwo={allQuestionsAndAnswers[3].allAnswers[1]}
        answerThree={allQuestionsAndAnswers[3].allAnswers[2]}
        answerFour={allQuestionsAndAnswers[3].allAnswers[3]}
        key={allQuestionsAndAnswers[3].triviaQuestion}
      />
      <Question
        trivia={allQuestionsAndAnswers[4].triviaQuestion}
        answerOne={allQuestionsAndAnswers[4].allAnswers[0]}
        answerTwo={allQuestionsAndAnswers[4].allAnswers[1]}
        answerThree={allQuestionsAndAnswers[4].allAnswers[2]}
        answerFour={allQuestionsAndAnswers[4].allAnswers[3]}
        key={allQuestionsAndAnswers[4].triviaQuestion}
      />
      <button className="main-btn-check-answers">
        <span className="main-btn-check-answers-text">Check answers</span>
      </button>
    </div>
  );
} */
