
import GuessedWords from "./components/guessedWords/GuessedWords.component";
import Congratulations from "./components/congratulations/Congratulations.component";

function App() {

  const success = {
    success : false
  }

  const guesswords = {
    guessedWords: [
      {
          guessedWord: "train",
          matchedLettersCount: 3
      }
    ]
  }
  return (
    <div className="App container">
      <h1>Jotto Game</h1>
      <Congratulations {...success} />
      <GuessedWords {...guesswords} />
    </div>
  );
}

export default App;
