import React from "react";
import Cell from "./Cell";

function Board({ side, turnNumber, winner, cellsClicked, restart, cellClick }) {
    const windowHeight = document.documentElement.clientHeight;

    function renderStatus() {
        return (
            winner ? <p>Winner: {winner}</p> : (turnNumber === 9) ? <p>Draw!</p> : <p>Turn: {side}</p>
        );
    }

    function renderBoard() {
        return (
            <div className="cells">
                { Array(...Array(9)).map((cell, cellIndex) =>
                    <Cell key={cellIndex} winner={winner} cellsClicked={cellsClicked} cellIndex={cellIndex} cellClick={cellClick} />) }
            </div>
        );
    }

    function renderRestart() {
        return (
            (turnNumber === 9 || winner) && <button className="restart" type="text" onClick={restart}>Click me to restart</button>
        );
    }

    return (
        <div className="board" style={{height: windowHeight + 'px'}}>
            {renderStatus()}
            {renderBoard()}
            {renderRestart()}
        </div>
    );
}

export default Board;