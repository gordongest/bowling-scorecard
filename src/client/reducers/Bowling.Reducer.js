const bowlingReducer = (state, action) => {
    switch (action.type) {
        case "addPlayer":
            return [...state, action.player];
        case "addRoll":
            return state.map(player => {
                    if (player.name === action.playerName) {
                        player.frames[action.currentFrame][action.currentRoll] = action.rollValue;
                        return player;
                    }

                    return player;
                }
            );
        case "updateTotal":
            return state.map(player =>
                player.name === action.playerName ?
                    {... player, total: action.total } : player
            );
        default:
            return state;
    }
}

export default bowlingReducer;