import { isStrike } from "../helpers";

const bowlingReducer = (state, action) => {
    switch (action.type) {
        case "addPlayer":
            return [...state, action.player];
        case "addRoll":
            return state.map(player => {
                console.log(action)
                    if (player.name === action.playerName) {
                        player.frames[action.currentFrame][action.currentRoll] = action.rollValue;

                        if (isStrike(action.rollValue)) {
                            player.frames[action.currentFrame][action.currentRoll + 1] = "-";
                        }

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