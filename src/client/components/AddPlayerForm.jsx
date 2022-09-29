import React from 'react';
import { useForm } from 'react-hook-form';

const AddPlayerForm = ({ addPlayer }) => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors }
    } = useForm();

    console.log('errors:', errors)

    return (
        <div>
            <div>
                <p>Enter a name to add a player:</p>
            </div>
            <form onSubmit={handleSubmit(data => {
                addPlayer(data);
                reset();
            })}>
                <input
                    type="text" {...register("playerName", { required: 'Name is required' })}
                    placeholder="Name..."
                />
                {/*<p>{errors.playerName?.message}</p>*/}
                <input type="submit"/>
            </form>
        </div>
    )
}

export default AddPlayerForm;