import React from "react";

function Cell({ winner, cellsClicked, cellIndex, cellClick }) {
    return (
        <>
        {
            (cellsClicked[cellIndex] || winner)
            ? <button type="text" disabled="disabled">{cellsClicked[cellIndex]}</button>
            : <button type="text" onClick={cellClick.bind(null, cellIndex)}></button>
        }
        </>
    );
}

export default Cell;