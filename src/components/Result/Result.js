import React from 'react'
import classNames from 'classnames'

import './Result.css'

const Result = (props) => {

    const resultClasses = classNames({
        'modal-open': props.isGameOver
    });

    const message = props.winner ? `Ha ganado ${props.winner}`: 'Empate';
    
    return (
        <div id="modal-overlay" className={resultClasses}>
            <div id="game-result-modal">
                <div id="result-container">
                    <div id="winner-container">
                        <span>{message}</span>
                    </div>
                </div>
                <div id="new-game-container">
                    <button id="new-game-button"
                            onClick={props.onNewGameClicked}>Jugar</button>
                </div>
            </div>
        </div>
    )
}

export default Result
