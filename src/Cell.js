import React from "react";

function Cell({ cellIndex, cellClick }) {
    return <button type="text" value={cellIndex} onClick={cellClick}></button>
}

export default Cell;