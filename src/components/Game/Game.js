import React from 'react'

import Board from '../Board/Board'
import './Game.css'
const Game = () => {

    const cellValues = ["", "", "", "", "", "", "", "", ""];
    const winningCombination = [];
  return (
      <>
        <div id="game">
        <h1>Tic Tac Toe</h1>
            <Board 
                cellValues={cellValues}
                winningCombination={winningCombination}/>
        </div>

        <div id="modal-overlay">
        <div id="game-result-modal">
            <div id="result-container">
                <div id="winner-container">
                    <span></span>
                </div>
            </div>
            <div id="new-game-container">
                <button id="new-game-button">Start New Game</button>
            </div>
        </div>
        </div>
        </>
  )
}

export default Game
