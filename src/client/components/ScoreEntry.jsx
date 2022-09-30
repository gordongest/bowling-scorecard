import React from 'react';
import { useForm } from 'react-hook-form';
import { scoreVals } from '../helpers';
import ControlledSelect from "./ControlledSelect";

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
            <form onSubmit={handleSubmit(({ score }) => {
                addRoll(score);
                reset();
            })}>
                {/* TODO: render options based on prev roll */}
                <ControlledSelect
                    name="score"
                    options={scoreVals}
                    control={control}
                />
                <button type="submit">enter</button>
            </form>
        </div>
    )
}

export default ScoreEntry;