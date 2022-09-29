import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { scoreVals } from '../helpers';

const ScoreEntry = ({ player, currentRoll, addRoll }) => {
    const {
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
            {/*  TODO: validate roll input */}
            <form onSubmit={handleSubmit(({ rollValue }) => {
                addRoll(rollValue);
                reset();
            })}>
                {/* TODO: render options based on prev roll */}
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