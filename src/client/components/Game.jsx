import React, { useState, useEffect, useContext } from 'react';
import '../styles/Game.css'
import { DispatchContext } from "../contexts/Bowling.Context";

const Game = ({ player }) => {
    const { name, total, frames } = player;

    useEffect(() => {
        updateTotal();
    }, [JSON.stringify(frames)])

    const { dispatch } = useContext(DispatchContext);

    // TODO: implement scoring algorithm
    // scoring helper methods
    const isStrike = val => {
        return val === 'X';
    }

    const isEmpty = val => {
        return val === '-';
    }

    const isSpare = (frame) => {
        return (parseInt(frame[0]) + parseInt(frame[1])) === 10;
    }

    const parseScore = val => {
        if (isStrike(val)) {
            return 10
        } else if (isEmpty(val)) {
            return 0
        } else return parseInt(val)
    }

    const updateTotal = () => {
    // TODO: write method (call .reduce() ?) to calculate total score for player
        const flattenedFrames = frames.flat();
        const newTotal = flattenedFrames.reduce((acc, val, i) => {
            if (isStrike(val) && i < frames.length - 2) {
                return acc + (parseScore(val) + parseScore(frames[i + 2]));
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