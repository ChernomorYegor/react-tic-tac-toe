import React from "react";
import Cell from "./Cell";

function Board({ side, turnNumber, winner, restart, cellClick }) {
    const windowHeight = document.documentElement.clientHeight;

    return (
        <div className="board" style={{height: windowHeight + 'px'}}>
            {
                winner ? <p>Winner: {winner}</p> : (turnNumber === 9) ? <p>Draw!</p> : <p>Turn: {side}</p>
            }
            <div className="cells">
                {
                    Array(...Array(9))
                        .map((cell, cellIndex) => <Cell key={cellIndex} cellIndex={cellIndex} cellClick={cellClick} />)
                }
            </div>
            {
                (turnNumber === 9 || winner) && <button className="restart" type="text" onClick={restart}>Click me to restart</button>
            }
        </div>
    );
}

export default Board;