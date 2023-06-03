import React, {useRef, useState} from 'react';
import {Button, TextField} from "@mui/material";

const Game = () => {
    const [isNewGame, setIsNewGame] = useState(false);
    const [attempts, setAttempts] = useState(0);
    const [message, setMessage] = useState("");
    const [guessNumber, setGuessNumber] = useState(0);
    const inputRef = useRef(null);

    function startGame() {
        setAttempts(0);
        inputRef.current.value = '';
        setMessage('');
        setIsNewGame(true);
        let randomNumber = Math.floor(Math.random() * 1000) + 1;
        setGuessNumber(randomNumber);
    }

    function check() {
        if (Number(guessNumber) === Number(inputRef.current.value)) {
            setMessage('You win');
            setIsNewGame(false);
        } else if (Number(guessNumber) < Number(inputRef.current.value)) {
            setMessage(`${message} N < ${inputRef.current.value};`);
        } else {
            setMessage(`${message} N > ${inputRef.current.value};`);
        }
        setAttempts(attempts + 1);
        if (attempts === 9) {
            setMessage('Game over');
            setIsNewGame(false);
        }
        if (Number(inputRef.current.value) < 1) {
            setMessage('You lose');
            setIsNewGame(false);
        }
        inputRef.current.value = '';
    }

    return (
        <div>
            <Button variant="outlined" color="success" disabled={isNewGame} onClick={startGame}>New Game</Button>
            <TextField inputRef={inputRef} type="number" InputProps={{inputProps: {min: 1, max: 1000}}} variant="outlined" disabled={!isNewGame}/>
            <Button variant="outlined" color="success" disabled={!isNewGame} onClick={check}>Check</Button>
            <p>{message}</p>
        </div>
    );
};

export default Game