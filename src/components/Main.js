import React from "react";
import Question from "./Question";
import triviaData from "../triviaData";

export default function Main(props) {
  const [gameState, setGameState] = React.useState({
    isActive: props.activeGame,
    totalQuestions: 0,
    correct: 0,
  });

  const [allTriviaData, setAllTriviaData] = React.useState(triviaData.results);
  /*   const [allTriviaData, setAllTriviaData] = React.useState([]);*/
  const [allQuestionsAndAnswers, setAllQuestionsAndAnswers] = React.useState(
    getQuestionAndAnswers()
  );

  const [showCheckAnswersBtn, setShowCheckAnswersBtn] = React.useState(false);

  const [showAnswerScreen, setShowAnswerScreen] = React.useState(false);

  React.useEffect(() => {
    let allQuestionsHaveAnAnswer;

    let newQAndAsArray = [...allQuestionsAndAnswers];

    let questionOneYes = newQAndAsArray[0].allAnswers.some(
      (answer) => answer.isHeld === true
    );
    let questionTwoYes = newQAndAsArray[1].allAnswers.some(
      (answer) => answer.isHeld === true
    );
    let questionThreeYes = newQAndAsArray[2].allAnswers.some(
      (answer) => answer.isHeld === true
    );
    let questionFourYes = newQAndAsArray[3].allAnswers.some(
      (answer) => answer.isHeld === true
    );
    let questionFiveYes = newQAndAsArray[4].allAnswers.some(
      (answer) => answer.isHeld === true
    );

    if (
      questionOneYes === true &&
      questionTwoYes === true &&
      questionThreeYes === true &&
      questionFourYes === true &&
      questionFiveYes === true
    ) {
      allQuestionsHaveAnAnswer = true;
    } else {
      allQuestionsHaveAnAnswer = false;
    }

    if (allQuestionsHaveAnAnswer === true) {
      setShowCheckAnswersBtn(true);
    }
  }, [allQuestionsAndAnswers]);

  /*   React.useEffect(() => {
    fetch(
      "https://opentdb.com/api.php?amount=5&category=9&difficulty=easy&type=multiple"
    )
      .then((res) => res.json())
      .then((data) => setAllTriviaData(data.results));
  }, []); */

  function generateAnswer(value) {
    return {
      value: value,
      isHeld: false,
      isCorrect: false,
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
      answerOneIsCorrect={qAndAs.allAnswers[0].isCorrect}
      answerTwo={qAndAs.allAnswers[1].value}
      answerTwoIsHeld={qAndAs.allAnswers[1].isHeld}
      answerTwoIsCorrect={qAndAs.allAnswers[1].isCorrect}
      answerThree={qAndAs.allAnswers[2].value}
      answerThreeIsHeld={qAndAs.allAnswers[2].isHeld}
      answerThreeIsCorrect={qAndAs.allAnswers[2].isCorrect}
      answerFour={qAndAs.allAnswers[3].value}
      answerFourIsHeld={qAndAs.allAnswers[3].isHeld}
      answerFourIsCorrect={qAndAs.allAnswers[3].isCorrect}
      key={qAndAs.triviaQuestion}
      allQAndAs={qAndAs}
      holdAnswer={handleClickAnswer}
      showAnswerScreen={showAnswerScreen}
    />
  ));

  function handleClickAnswer(clickedAnswer) {
    let newQAndAsArray = [...allQuestionsAndAnswers];

    for (let i = 0; i < newQAndAsArray.length; i++) {
      for (let j = 0; j < newQAndAsArray[0].allAnswers.length; j++) {
        if (clickedAnswer === newQAndAsArray[i].allAnswers[j].value) {
          for (let k = 0; k < newQAndAsArray[i].allAnswers.length; k++) {
            newQAndAsArray[i].allAnswers[k].isHeld = false;
          }
          newQAndAsArray[i].allAnswers[j].isHeld =
            !newQAndAsArray[i].allAnswers[j].isHeld;
        }
      }
    }

    setAllQuestionsAndAnswers(newQAndAsArray);
  }

  function handleCheckAnswersButton() {
    let newQAndAsArray = [...allQuestionsAndAnswers];

    let newGameState = gameState;

    for (let i = 0; i < newQAndAsArray.length; i++) {
      let correctAns = newQAndAsArray[i].correctAnswer;
      for (let j = 0; j < newQAndAsArray[0].allAnswers.length; j++) {
        if (
          newQAndAsArray[i].allAnswers[j].isHeld === true &&
          correctAns === newQAndAsArray[i].allAnswers[j].value
        ) {
          newQAndAsArray[i].allAnswers[j].isCorrect = true;
          newGameState.correct += 1;
          break;
        }
      }
    }
    newGameState.totalQuestions += 5;

    setGameState(newGameState);

    setAllQuestionsAndAnswers(newQAndAsArray);

    setShowAnswerScreen(true);
  }

  function handleNewGameButton() {
    setGameState({
      isActive: props.activeGame,
      totalQuestions: 0,
      correct: 0,
    });

    setAllTriviaData(triviaData.results);

    setAllQuestionsAndAnswers(getQuestionAndAnswers());

    setShowCheckAnswersBtn(false);

    setShowAnswerScreen(false);
  }

  return (
    <div className="main-container">
      {questionsElements}
      {showAnswerScreen && (
        <h2 className="main-end-score">
          You got {gameState.correct}/{gameState.totalQuestions} correct.
        </h2>
      )}
      {showAnswerScreen && (
        <button
          className="main-btn-check-answers"
          onClick={handleNewGameButton}
        >
          <span className="main-btn-check-answers-text">New Game</span>
        </button>
      )}
      {showCheckAnswersBtn && !showAnswerScreen && (
        <button
          className="main-btn-check-answers"
          onClick={handleCheckAnswersButton}
        >
          <span className="main-btn-check-answers-text">Check answers</span>
        </button>
      )}
    </div>
  );
}
