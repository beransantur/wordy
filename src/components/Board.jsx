import { useFormik } from "formik";
import { useState, useEffect } from "react";
import wordBank from "../data/wordBank";
import Line from "./Line";

const words = wordBank;

const Board = () => {
  const [guesses, setGuesses] = useState(Array(6).fill(" "));
  const [solution, setSolution] = useState("");
  const [gameState, setGameState] = useState({
    isGameWon: false,
    isGameLost: false,
  });
  const [isInfoClicked, setIsInfoClicked] = useState(false);
  //handling with formik
  const initialValues = { currentGuess: "" };
  const onSubmit = (values, formikProps) => {
    if (values.currentGuess.toUpperCase() === solution) {
      setGameState((prev) => ({ ...prev, isGameWon: true }));
    }
    const newGuesses = [...guesses];
    const nextEmptySlot = guesses.findIndex((guess) => guess === " ");
    newGuesses[nextEmptySlot] = formik.values.currentGuess;
    setGuesses(newGuesses);
    formikProps.resetForm();
  };
  const formik = useFormik({ initialValues, onSubmit });

  useEffect(() => {
    //return -1 if any slot is not found
    const nextEmptySlot = guesses.findIndex((guess) => guess === " ");
    if (nextEmptySlot === -1 && gameState.isGameWon === false) {
      setGameState((prev) => ({ ...prev, isGameLost: true }));
    }
  }, [formik.values.currentGuess, gameState.isGameWon, guesses]);

  const assignSolution = () => {
    //getting data from word bank randomly
    const randomisedWord = words[Math.floor(Math.random() * words.length)];
    setSolution(randomisedWord);
  };

  useEffect(() => {
    assignSolution();
  }, []);
  return (
    <div className="wordle-container">
      {gameState.isGameLost && (
        <div className="gameLost d-flex justify-content-center flex-column bg-secondary p-3 w-25">
          <h1 className="text-danger ">YOU LOST!</h1>
          <p>Correct word was </p>
          <span className="text-warning">{solution}</span>
          <p>Wanna try again? </p>
          <button
            className="btn btn-primary p-3"
            onClick={() => {
              setGuesses(Array(6).fill(" "));
              setGameState((prev) => ({ ...prev, isGameLost: false }));
              assignSolution();
            }}
          >
            Restart
          </button>
        </div>
      )}
      {gameState.isGameWon && (
        <div className="gameWon d-flex justify-content-center flex-column bg-green p-3 ">
          <h1 className="text-primary">YOU'VE WON!</h1>{" "}
          <p>You've won the game wanna play again?</p>
          <button
            className="btn btn-warning p-3 "
            onClick={() => {
              setGuesses(Array(6).fill(" "));
              setGameState((prev) => ({ ...prev, isGameWon: false }));
              assignSolution();
            }}
          >
            Restart
          </button>
        </div>
      )}
      {isInfoClicked && (
        <div className="howToPlay">
          <div className="howToPlayLine">
            <span>Correct position in correct word</span>
            <div className="howToPlayBox bg-success"></div>
          </div>

          <div className="howToPlayLine">
            <span>Incorrect position in correct word</span>
            <div className="howToPlayBox bg-primary"></div>
          </div>

          <div className="howToPlayLine">
            <span>Incorrect position in incorrect word</span>
            <div className="howToPlayBox bg-danger"></div>
          </div>
          <button onClick={() => setIsInfoClicked(false)}>OK</button>
        </div>
      )}
      <section className="bg-dark nav-container">
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
          <div class="container pt-2">
            <a class="navbar-brand" href="#home">
              <img
                src={require("../images/letter-w-image-colorful.png")}
                className="w-icon"
                alt=""
              />
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div class="navbar-nav ms-auto">
                <span class="nav-link" onClick={() => setIsInfoClicked(true)}>
                  HOW TO PLAY
                </span>
                <a
                  href="https://www.linkedin.com/in/beran-santur-810b19206/"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-link"
                >
                  <span class="nav-link">CONTACT</span>
                </a>
              </div>
            </div>
          </div>
        </nav>{" "}
      </section>
      <div className="wordle">
        <div className="header">WORDY</div>
        <div className="board">
          {guesses.map((guess, index) => {
            let isCurrentGuess =
              index === guesses.findIndex((guess) => guess === " ");
            return (
              <Line
                key={index}
                guess={
                  isCurrentGuess
                    ? formik.values.currentGuess.slice(0, 5)
                    : guess
                }
                isEntered={guess !== " "}
                solution={solution}
              />
            );
          })}
        </div>
        <form className="form" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            name="currentGuess"
            onChange={formik.handleChange}
            value={formik.values.currentGuess}
          />
          <button
            type="submit"
            disabled={
              !formik.dirty ||
              formik.values.currentGuess.length < 5 ||
              formik.values.currentGuess.length > 5 ||
              gameState.isGameLost === true ||
              gameState.isGameWon === true
            }
          >
            ENTER
          </button>
        </form>
      </div>
      <section class="mt-3 p-2 bg-dark text-white text-center footer w-100">
        <div class="container">
          <p class="lead">&copy;Copyright 2022 Beran Santur</p>
        </div>
      </section>
    </div>
  );
};

export default Board;
