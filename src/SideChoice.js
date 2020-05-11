import React from 'react';

function SideChoice({ chooseSide }) {
    const windowHeight = document.documentElement.clientHeight;

    return (
        <div className="side-choice" style={{height: windowHeight + 'px'}}>
            <p>Choose your side:</p>
            <div>
                <button type="text" onClick={chooseSide.bind(null, 'X')}>X</button>
                <button type="text" onClick={chooseSide.bind(null, 'O')}>O</button>
            </div>
        </div>
    );
}

export default SideChoice;