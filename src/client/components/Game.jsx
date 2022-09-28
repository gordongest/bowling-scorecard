import React, { useState, useEffect } from 'react';
import '../styles/Game.css'

const Game = ({ name, frames, total, frame }) => {
    // TODO: keep track of which roll it is! (2 rolls/frame except in last, where 2 strikes or spare gets extra roll)
    const [rollCounter, setRoll] = useState(1);
    const reset = () => {
        setRoll(1);
    }

    // TODO: write method (call .reduce() ?) to calculate total score for player
    // const updatedTotal = () => {
    //     return frames.reduce((acc, val) => {
    //         switch(val)
    //             case
    //     }, 0)
    // }


    return (
        <div>
            <p>
                {name}
            </p>
            {/* TODO: implement input paradigm for scores -- select for current frame, span for past/future frames? */}
            <div>
                {frames.map((f, i) => {
                    return <span className="frame">
                        {f.map(roll => {
                            return <span className="roll">{roll}</span>
                        })}
                    </span>
                })}
            </div>
            <p>total: {total}</p>
        </div>
    )

}

export default Game;