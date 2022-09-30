import { useEffect, useReducer } from 'react';

const useLocalStorageReducer = (reducer, defaultVal, key) => {
    const initializer = () => {
        let val;
        try {
            val = JSON.parse(window.localStorage.getItem(key)) || defaultVal;
        } catch (err) {
            console.warn("error:", err.message)
        }

        return val;
    }

    const [state, dispatch] = useReducer(reducer, defaultVal, initializer)

    useEffect(() => {
        // console.log("in reducer useEffect:", state)
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, dispatch];
}

export default useLocalStorageReducer;