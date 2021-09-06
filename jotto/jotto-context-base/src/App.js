
import GuessedWords from "./components/guessedWords/GuessedWords.component";
import Congratulations from "./components/congratulations/Congratulations.component";
import Input from "./components/input/input.component.jsx"


function App() {

  // const success = {
  //   success : false
  // }

  // const guessedWords = {
  //   guessedWords: [
  //     {
  //         guessedWord: "train",
  //         matchedLettersCount: 3
  //     }
  //   ]
  // }

  const success = false
  const secretWord = "party"
  const guessedWords = []
  return (
    <div className="App container" data-test="app-component">
      <h1>Jotto Game</h1>
      <Congratulations 
        success={success}  
        // {...success} 
      />
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords = {guessedWords} />
    </div>
  );
}

export default App;
