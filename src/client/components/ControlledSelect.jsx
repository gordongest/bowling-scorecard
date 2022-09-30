import { scoreVals } from "../helpers";
import { Controller, useForm } from "react-hook-form";
import React from "react";

const ControlledSelect = ({ options, name, control, ...props }) => {
    return (
        <Controller
            render={({ field: {value, onChange} }) => (
                <select
                    value={value}
                    onChange={onChange}
                >
                    <option name={name} disabled defaultValue>Select {name}...</option>
                    {options.map(option => (
                        <option value={option} key={option}>{option}</option>
                    ))}
                </select>
            )}
            labelId={`select-${name}-label`}
            id={`select-${name}`}
            control={control}
            label={name}
            name={name}>
        </Controller>
    )
}

export default ControlledSelect;
