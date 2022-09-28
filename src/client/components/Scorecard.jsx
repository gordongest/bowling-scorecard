import React, { useState, useEffect, useContext } from 'react';
import { DispatchContext, PlayersContext } from "../contexts/Bowling.Context";
import AddPlayerForm from "./AddPlayerForm";
import Game from './Game';

const Scorecard = () => {
    const { players } = useContext(PlayersContext);
    const { dispatch } = useContext(DispatchContext);
    let activePlayer;
    let gameStarted = false;
    let currentFrame = 0;

    useEffect(() => {
        console.log("frame:", currentFrame)
    }, [currentFrame])


    const addPlayer = ({ playerName }) => {
        const newPlayer = {
            name: playerName,
            frames: new Array(10).fill(new Array(2).fill('0')),
            total: 0
        }

        dispatch({ type: 'addPlayer', player: newPlayer })
    }

    // TODO: keep track of which player is active and
    // TODO: keep track of which frame is active
    const startGame = () => {
        console.log('game time started')
        activePlayer= players[0];
        gameStarted = true;
        currentFrame++
        // while not in 10th frame,
        // while (currentFrame < 9) {
        //     // iterate through players,
        //     for (let i = 0; i < players.length; i++) {
        //         // set 'active' flag to true for current player
        //        activePlayer = players[i];
               console.log('active:', activePlayer)
        //     }
        //     // increment frame
        //     currentFrame++;
        // }
    }

    // TODO: determine when game has ended and declare winner
    const declareWinner = () => {
        let leader = players[0];

        for (let i = 1; i < players.length; i++) {
            if (players[i].total > leader.total) {
                leader = players[i];
            }
        }

        return leader;
    }

    return (
        <div>
            {players.length < 4 &&
                <AddPlayerForm addPlayer={addPlayer} />
            }

            {players.length > 1 &&
                players.map((player, i) =>
                    <Game {...player} frame={currentFrame}/>
                )
            }

            {(currentFrame < 1 && players.length > 0) &&
                <button onClick={startGame}>start game</button>
            }

            {/*    between frame 1-9, 2 rolls per player*/}
            {gameStarted ?
                <p>game time started</p>
                :
                null
                // <div>
                //     {activePlayer?.frames.map((frame, i) => {
                //         console.log(i)
                //         return <span className="frame">
                //             {i === currentFrame ?
                //                 <div>
                //                     <select>
                //                         <option value="1">1</option>
                //                     </select>
                //                 </div>
                //                 :
                //                 frame.map(roll => {
                //                     return <span className="roll">{roll}</span>
                //                 })
                //             }
                //         </span>
                //     })}
                // </div>
            }
        </div>
    )
}

export default Scorecard;