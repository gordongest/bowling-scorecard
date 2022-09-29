import React, { useEffect, useContext } from 'react';
import { DispatchContext } from "../contexts/Bowling.Context";
import { containsStrike, containsSpare, parseScore } from "../helpers";
import '../styles/Game.css'

const Game = ({ id, name, total, frames }) => {
    useEffect(() => {
        updateTotal();
    }, [JSON.stringify(frames)])

    const { dispatch } = useContext(DispatchContext);

    const updateTotal = () => {
        const newTotal = frames.reduce((totalAcc, frame, i) => {
            const frameTotal = frame.reduce((frameAcc, roll) => {
                return frameAcc + parseScore(roll);
            }, 0)

            if (containsStrike(frame) && i <= frames.length - 1) {
                return totalAcc + frameTotal + parseScore(frames[i + 1][0]) + parseScore(frames[i + 1][1]);
            }

            if (containsSpare(frame) && i <= frames.length - 1) {
                return totalAcc + frameTotal + parseScore(frames[i + 1][0]);
            }

            return totalAcc + frameTotal;
        }, 0);

        dispatch({ type: "updateTotal", playerId: id, total: newTotal });
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