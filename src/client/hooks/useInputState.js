import { useState } from 'react';

const useInputState = initialState => {
    const [state, setState] = useState(initialState);

    const changeState = e => setState(e.target.value);

    const resetState = () => setState("");

    return [state, changeState, resetState];
}

export default useInputState;