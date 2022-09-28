import { useEffect, useReducer } from 'react';

const useLocalStorageReducer = (reducer, defaultVal, key) => {
    const initializer = () => {
        let val;
        try {
            val = JSON.parse(
                window.localStorage.getItem(key) || JSON.stringify(defaultVal)
            );
        } catch(e) {
            val = defaultVal;
        }

        return val;
    }

    const [state, dispatch] = useReducer(reducer, defaultVal, initializer)

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state])

    return [state, dispatch];
}

export default useLocalStorageReducer;