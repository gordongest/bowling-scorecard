import React, { useState, useEffect } from 'react';
import '../styles/Game.css'

const Game = ({ name, frames, total, frame }) => {
    // TODO: keep track of which roll it is! (2 rolls/frame except in last, where 2 strikes or spare gets extra roll)
    const [rollCounter, setRoll] = useState(0);
    const reset = () => {
        setRoll(0);
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
            {/* TODO: implement input paradigm for scores -- select for current frame, span for past/future frames? */}
            <div>
                <table>
                    <tr>
                        <td className="table-player-name">{name}</td>
                        {frames.map((f, i) => {
                            return <td className="frame">
                                <tr>
                                    {f.map(roll => {
                                        return <td className="roll">{roll}</td>
                                    })}
                                </tr>
                            </td>
                        })}
                        <td>
                            {total}
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    )

}

export default Game;