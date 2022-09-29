import React from 'react';
import { Controller, useForm } from "react-hook-form";

const scoreVals = [
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'X', '/'
]

const ScoreEntry = ({ player, currentRoll, addRoll }) => {
    const {
        register,
        control,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    return (
        <div>
            <div>
                <p>{player.name} is up!</p>
                <p>Enter their score for roll {currentRoll + 1}</p>
            </div>
            <form onSubmit={handleSubmit(({ rollValue }) => {
                addRoll(rollValue);
                reset();
            })}>
                <Controller
                    render={({ field }) => (
                        <select {...field}>
                            {scoreVals.map(val => (
                                <option value={val} key={val}>{val}</option>
                            ))}
                        </select>
                    )}
                    labelId='select-score-label'
                    id='select-score'
                    control={control}
                    label='Score'
                    name='rollValue'>
                </Controller>
                <button type="submit">enter</button>
            </form>
        </div>
    )
}

export default ScoreEntry;