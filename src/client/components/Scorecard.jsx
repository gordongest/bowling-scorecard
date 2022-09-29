import React, { useState, useEffect, useContext } from 'react';
import { DispatchContext, PlayersContext } from "../contexts/Bowling.Context";
import AddPlayerForm from "./AddPlayerForm";
import Game from './Game';
import { useForm } from 'react-hook-form';

const Scorecard = () => {
    const { players } = useContext(PlayersContext);
    const { dispatch } = useContext(DispatchContext);
    const [gameStarted, setGameStarted] = useState(false);
    const [activePlayer, setActivePlayer] = useState();
    const [currentFrame, setFrame] = useState(0);
    const [currentRoll, setRoll] = useState(1);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    // useEffect(() => {
    //     console.log("frame:", currentFrame)
    // }, [currentFrame])

    const addPlayer = ({ playerName }) => {
        const newPlayer = {
            name: playerName,
            frames: new Array(10).fill(new Array(2).fill('0')),
            total: 0
        }

        dispatch({ type: 'addPlayer', player: newPlayer })
    }

    const updateScore = ({ rollValue }) => {
        dispatch({
            type: "addRoll",
            playerName: activePlayer.name,
            currentFrame: currentFrame,
            currentRoll: currentRoll,
            rollValue: rollValue
        });
    }


    // TODO: keep track of which player is active
    // TODO: keep track of current frame
    const startGame = () => {
        console.log('game time started')
        setActivePlayer(players[0]);
        setGameStarted(true);
        // while not in 10th frame,
            // rotate through through players,
            // increment frame
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

    const isStrike = (frame) => {
        return frame[0] === 'X';
    }

    const isSpare = (frame) => {
        return (parseInt(frame[0]) + parseInt(frame[1])) === 10;
    }

    // TODO: validate roll input and mutate rollsLeft based on whether it was a strike or not

    // TODO: implement scoring algorithm

    return (
        <div>
            {/* TODO: render name of active player and input field to accept value of roll */}
            {(players.length < 4 && !gameStarted) &&
                <AddPlayerForm addPlayer={addPlayer} />
            }

            {/*    between frame 1-9, 2 rolls per player*/}
            {gameStarted &&
            <div>
                <form onSubmit={handleSubmit(data => {
                    updateScore(data);
                    reset();
                })}>
                    <input
                        type="text" {...register("rollValue", { required: 'Value is required' })}
                        placeholder="Enter roll..."
                    />
                    <input type="submit"/>
                </form>
            </div>
            }

            {players.length > 0 &&
                players.map((player, i) =>
                    <Game {...player} frame={currentFrame}/>
                )
            }

            {(!gameStarted && players.length > 0) &&
                <button onClick={startGame}>START</button>
            }
        </div>
    )
}

export default Scorecard;