import React, { useState, useContext } from 'react';
import { v4 as uuid } from 'uuid';
import { DispatchContext, PlayersContext } from '../contexts/Bowling.Context';
import { isStrike } from "../helpers";
import AddPlayerForm from './AddPlayerForm';
import ScoreEntry from './ScoreEntry';
import Game from './Game';

const Scorecard = () => {
    const { players } = useContext(PlayersContext);
    const { dispatch } = useContext(DispatchContext);
    const [gameStarted, setGameStarted] = useState(false);
    const [activePlayer, setActivePlayer] = useState(null);
    const [leader, setLeader] = useState(null);
    const [currentFrame, setFrame] = useState(0);
    const [currentRoll, setRoll] = useState(0);

    const addPlayer = ({ playerName }) => {
        const newPlayer = {
            id: uuid(),
            name: playerName,
            frames: new Array(10).fill(new Array(2).fill('-')),
            total: 0
        }

        dispatch({ type: 'addPlayer', player: newPlayer })
    }

    const addRoll = score => {
        dispatch({
            type: "addRoll",
            playerId: activePlayer.id,
            currentFrame: currentFrame,
            currentRoll: currentRoll,
            rollValue: score
        });

        if (currentRoll === 0 && !isStrike(score)) {
            setRoll(1);
        } else {
            setFrame(prev => prev + 1);
            setRoll(0);
            findLeader();
        }
    }

    // TODO: keep track of which player is active
    const startGame = async () => {
        console.log('game time started')
        setActivePlayer(players[0]);
        setLeader(players[0]);
        setGameStarted(true);
    }

    // while not in 10th frame,
        // rotate through through players,
        // increment frame

    // TODO: determine when game has ended and declare winner
    const findLeader = () => {
        let leader = players[0];
        console.log(leader)

        if (players.length > 1) {
            for (let i = 1; i < players.length; i++) {
                if (players[i].total > leader.total) {
                    leader = players[i];
                }
            }
        }

        setLeader(leader);
    }

    return (
        <div>
            {/* add players pre-game */}
            {(players.length < 4 && !gameStarted) &&
                <AddPlayerForm addPlayer={addPlayer} />
            }

            {/* between frame 0-9 */}
            {(gameStarted && currentFrame < 10) &&
                <ScoreEntry player={activePlayer} currentRoll={currentRoll} addRoll={addRoll} />
            }

            {/* when all frames completed */}
            {currentFrame === 10 &&
                // display winner
                <div>
                    <p>Game Over</p>
                    <p>{leader.name} wins!</p>
                </div>
            }

            {/* show each player's running score */}
            {players.length > 0 &&
                players.map((player) =>
                    <Game {...player} />
                )
            }

            {/* button to start the game */}
            {(!gameStarted && players.length > 0) &&
                <button onClick={startGame}>START</button>
            }
        </div>
    )
}

export default Scorecard;