const bowlingReducer = (state, action) => {
    switch (action.type) {
        case "addPlayer":
            return [...state, action.player];
        case "addRoll":
            return state.filter(player => {
                    if (player.name === action.playerName) {
                        player.frames[action.currentFrame][action.currentRoll] = action.rollValue;
                        return player;
                    }

                    return player;
                }
            );
        default:
            return state;
    }
}

export default bowlingReducer;