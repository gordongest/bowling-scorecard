import React, { useState, useEffect } from 'react';
import '../styles/Game.css'

const Game = ({ name, frames, total, frame }) => {
    // TODO: write method (call .reduce() ?) to calculate total score for player
    // const updatedTotal = () => {
    //     return frames.reduce((acc, val) => {
    //         switch(val)
    //             case
    //     }, 0)
    // }


    return (
        <div>
            <div>
                <table>
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
                </table>
            </div>
        </div>
    )

}

export default Game;