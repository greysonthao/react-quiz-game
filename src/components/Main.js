import React from "react";
import Question from "./Question";
import { nanoid } from "nanoid";

export default function Main() {
  return (
    <div className="main-container">
      <Question
        trivia="Which best selling toy of 1983 caused hysteria, 
      resulting in riots breaking in stores?"
        correctAnswer="yes"
        incorrectAnswerOne="no"
        incorrectAnswerTwo="no"
        incorrectAnswerThree="no"
      />
      <Question
        trivia="How would one say goodbye in Spanish?"
        correctAnswer="yes"
        incorrectAnswerOne="no"
        incorrectAnswerTwo="no"
        incorrectAnswerThree="no"
      />
      <Question
        trivia="What is the hottest planet in our Solar System?"
        correctAnswer="yes"
        incorrectAnswerOne="no"
        incorrectAnswerTwo="no"
        incorrectAnswerThree="no"
      />
      <Question
        trivia="In which country was the caesar salad invented?"
        correctAnswer="yes"
        incorrectAnswerOne="no"
        incorrectAnswerTwo="no"
        incorrectAnswerThree="no"
      />
      <Question
        trivia="How Many Hearts Does An Octopus Have?"
        correctAnswer="yes"
        incorrectAnswerOne="no"
        incorrectAnswerTwo="no"
        incorrectAnswerThree="no"
      />
    </div>
  );
}
