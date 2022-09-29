import React, { useEffect, useContext } from 'react';
import { DispatchContext } from "../contexts/Bowling.Context";
import { totalScore } from "../helpers";
import '../styles/Game.css'

const Game = ({ id, name, total, frames }) => {
    useEffect(() => {
        updateTotal();
    }, [JSON.stringify(frames)])

    const { dispatch } = useContext(DispatchContext);

    const updateTotal = () => {
        dispatch({ type: "updateTotal", playerId: id, total: totalScore(frames) });
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