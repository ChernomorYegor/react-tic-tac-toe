import React, {useState} from 'react';
import SideChoice from './SideChoice';
import Board from "./Board";

function App() {
    const [side, setSide] = useState('');
    const [turnNumber, setTurnNumber] = useState(0);
    const [cellsClicked, setCellsClicked] = useState(Array(9).fill(null));
    const [winner, setWinner] = useState('');

    function chooseSide(e) {
        setSide(e.target.innerText);
    }

    function cellClick(cell) {
        let cellsCurrent = cellsClicked.slice();
        cellsCurrent[cell.target.value] = side;
        setCellsClicked(cellsCurrent);

        cell.target.innerText = side;
        cell.target.setAttribute("disabled", "disabled");

        isWinner(cellsCurrent);

        if (!isWinner(cellsCurrent)) {
            setTurnNumber(turnNumber + 1);
            setSide((side === 'X') ? 'O' : 'X');
        } else {
            const allCells = document.querySelectorAll('.cells button');
            allCells.forEach(button => button.setAttribute("disabled", "disabled"));
        }
    }

    function restart() {
        setSide('');
        setTurnNumber(0);
        setCellsClicked(Array(9).fill(null));
        setWinner('');
    }

    function isWinner(cells) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
                setWinner(cells[a]);
                return cells[a];
            }
        }
    }

    return (
        <div className="App">
            {
                (side === '')
                    ? <SideChoice chooseSide={chooseSide} />
                    : <Board side={side} turnNumber={turnNumber} winner={winner} restart={restart} cellClick={cellClick} />
            }
        </div>
    );
}

export default App;