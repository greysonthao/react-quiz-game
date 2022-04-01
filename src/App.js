import React from "react";
import Start from "./components/Start";
import Main from "./components/Main";

function App() {
  const [activeGame, setActiveGame] = React.useState(false);

  function startQuiz() {
    setActiveGame((prevGameState) => !prevGameState);
  }

  return (
    <div className="app-container">
      {activeGame ? (
        <Main activeGame={activeGame} />
      ) : (
        <Start startQuiz={startQuiz} />
      )}
    </div>
  );
}

export default App;
