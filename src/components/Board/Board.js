import React from 'react'
import Cell from '../Cell/Cell'
import './Board.css'

const Board = () => {

    const cellClicked = (cellIndex) =>{
        console.log(`Cell ${cellIndex} clicked`);
    }
    const cellValues = ["", "", "", "", "", "", "", "", ""];
    const cells = cellValues.map((value, index) =>
        <Cell 
            key = {index}
            value = {value}
            canHighLight = {false}
            onClick={() => cellClicked(index)} />
    )
  return (
    <div id="board">
        {cells}
    </div>
  )
}

export default Board
