import { MONSTERS } from "./monsters"

const NUMBER_OF_GUESSES = 6;
let guessesRemaining = NUMBER_OF_GUESSES;
let currentGuess = [];
let nextLetter = 0;
let rightGuessString = MONSTERS[Math.floor(Math.random() * MONSTERS.length)]
console.log(rightGuessString)