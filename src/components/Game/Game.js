import React, {useState} from 'react'

import Board from '../Board/Board'
import Result from '../Result/Result';
import {calculateWinner} from '../../utils/WinnerCalculator';
import './Game.css'

const Game = () => {

    const [cellValues, setCellValues] = useState(['','','','','','','','','']);
    const [isXNext, setIsXNext] = useState(true);
    const [isGameOver, setIsGameOver] = useState(false);
    const [numberOfTurnsLeft, setnumberOfTurnsLeft] = useState(9);
    const [winner, setWinner] = useState()
    const [winningCombination, setWinningCombination] = useState([]);


    const isCellEmpty = (cellIndex) => cellValues[cellIndex] === '';

    const restartGame = () => {
        setCellValues(['','','','','','','','','']);
        setIsXNext(true);
        setIsGameOver(false);
        setnumberOfTurnsLeft(9);
        setWinner(undefined);
        setWinningCombination([]);
    }


    const onCellClicked = (cellIndex) => {

        if(isCellEmpty(cellIndex)){

            const newCellValues = [...cellValues];
            newCellValues[cellIndex] = isXNext ? 'X' : 'O';

            const newNumberOfTurnsLeft = numberOfTurnsLeft - 1;

            //Calcular el ganador
            const calcResult = calculateWinner(newCellValues,newNumberOfTurnsLeft ,cellIndex)
            setCellValues(newCellValues);
            setIsXNext(!isXNext);
            setIsGameOver(calcResult.hasResult);
            setnumberOfTurnsLeft(newNumberOfTurnsLeft);
            setWinner(calcResult.winner);
            setWinningCombination(calcResult.winningCombination)

        }
        
    };
  return (
      <>
        <div id="game">
        <h1>Tic Tac Toe</h1>
            <Board 
                cellValues={cellValues}
                winningCombination={winningCombination}
                cellClicked={onCellClicked}/>

        </div>

        <Result 
            isGameOver={isGameOver}
            winner={winner}
            onNewGameClicked={restartGame} />
        </>
  )
}

export default Game
