import React, { useState } from "react";
import "./hangmenGame.scss";

const alphabet = "abcdefghijklmnopqrstuvwxyz";

const Hangman = () => {
  // Declare state variables
  const [secretWord, setSecretWord] = useState("apple");
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [incorrectGuesses, setIncorrectGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Function to handle guessing a letter
  const handleGuess = (letter) => {
    // Check if the letter has already been guessed
    if (guessedLetters.includes(letter)) {
      return;
    }

    // Update the guessed letters
    setGuessedLetters([...guessedLetters, letter]);

    // Check if the letter is in the secret word
    if (secretWord.includes(letter)) {
      // The letter is in the secret word, do nothing
    } else {
      // The letter is not in the secret word, increment the number of incorrect guesses
      setIncorrectGuesses(incorrectGuesses + 1);
    }

    // Check if the game is over
    if (incorrectGuesses === 6 || getMaskedWord() === secretWord) {
      setGameOver(true);
    }
  };

  // Function to get the masked version of the secret word (with unguessed letters replaced by underscores)
  const getMaskedWord = () => {
    let maskedWord = "";
    for (let i = 0; i < secretWord.length; i++) {
      if (guessedLetters.includes(secretWord[i])) {
        maskedWord += secretWord[i];
      } else {
        maskedWord += "_";
      }
    }
    return maskedWord;
  };

  // Render the Hangman game
  return (
    <div className="box-hangmen">
      {gameOver ? (
        <div>
          {getMaskedWord() === secretWord ? (
            <div>You win!</div>
          ) : (
            <div>You lose!</div>
          )}
          <div>The secret word was: {secretWord}</div>
          <button onClick={() => window.location.reload()}>Play again</button>
        </div>
      ) : (
        <div>
          <div>Incorrect guesses: {incorrectGuesses}</div>
          <div>Secret word: {getMaskedWord()}</div>
          <div className="box-keyboard">
            {alphabet.split("").map((letter) => (
              <button
                key={letter}
                disabled={guessedLetters.includes(letter) || gameOver}
                onClick={() => handleGuess(letter)}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Hangman;
