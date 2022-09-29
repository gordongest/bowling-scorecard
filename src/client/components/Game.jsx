import React, { useEffect, useContext } from 'react';
import { DispatchContext } from "../contexts/Bowling.Context";
import { isStrike, isSpare, isEmpty, parseScore } from "../helpers";
import '../styles/Game.css'

const Game = ({ name, total, frames }) => {
    useEffect(() => {
        updateTotal();
    }, [JSON.stringify(frames)])

    const { dispatch } = useContext(DispatchContext);

    const updateTotal = () => {
        const flattenedFrames = frames.flat();
        const newTotal = flattenedFrames.reduce((acc, val, i) => {
            // strike awards 10 plus sum of next two rolls
            if (isStrike(val) && i <= frames.length - 3) {
                return acc + (parseScore(val) + (parseScore(frames[i + 2] + parseScore(frames[i + 3]))));
                // TODO: deal with strike in last frame
            }

            // spare awards 10 plus next roll
            if (isSpare(val)) {
                return acc + (parseScore(val) + parseScore(frames[i + 1]));
            }


            return acc + parseScore(val);
        }, 0)

        console.log('newTotal:', newTotal)

        dispatch({ type: "updateTotal", playerName: name, total: newTotal });
    }

    return (
        <div>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="table-player-name">{name}</td>
                            {frames.map((f, i) => {
                                return <td className="table-frame">
                                    <tr className="table-frame-no"><td>{i+1}</td></tr>
                                    <tr>
                                        {f.map(roll => {
                                            return <td className="table-roll">{roll}</td>
                                        })}
                                    </tr>
                                </td>
                            })}
                            <td className="table-total">
                                <tr>Tot</tr>
                                <tr>{total}</tr>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )

}

export default Game;