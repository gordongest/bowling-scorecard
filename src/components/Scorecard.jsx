import React, { useState, useEffect } from 'react';
import AddPlayerForm from "./AddPlayerForm";
import Game from './Game';

const Scorecard = () => {
    const [players, setPlayers] = useState([]);
    const [frame, setFrame] = useState(0);

    useEffect(() => {
        console.log("frame:", frame)
    }, [frame])


    const addPlayer = ({ playerName }) => {
        const newPlayer = {
            name: playerName,
            active: false,
            frames: new Array(10).fill(new Array(2).fill('0')),
            total: 0
        }

        setPlayers(prevPlayers => [...prevPlayers, newPlayer]);
    }

    // TODO: keep track of which player is active and
    // TODO: keep track of which frame is active
    const startGame = () => {
        setFrame(prevFrame => prevFrame + 1);
        // while not in 10th frame,
            // iterate through players,
                // set 'active' flag to true for each player
            // increment frame
    }

    // TODO: determine when game has ended and declare winner
    const endGame = () => {
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
                    <Game {...player} frame={frame}/>
                )
            }
            {(frame < 1 && players.length > 0) &&
                <button onClick={startGame}>start game</button>
            }
            {/*    between frame 1-9, 2 rolls per player*/}
        </div>
    )
}

export default Scorecard;