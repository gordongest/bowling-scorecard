const bowlingReducer = (state, action) => {
    switch (action.type) {
        case "addPlayer":
            return [...state, action.player];
        case "addRoll":
            return state.filter(player =>
                player.name === action.playerName ?
                    // update the current roll of the current frame to the given value
                    player.frames[action.frame][action.roll] = action.value : player
            );
        case "remove":
            return state.filter(toDo => toDo.id !== action.id);
        case "update":
            return state.map(toDo =>
                toDo.id === action.id ?
                    {... toDo, task: action.task} : toDo
            );
        case "toggle":
            return state.map(toDo =>
                toDo.id === action.id ?
                    {...toDo, completed: !toDo.completed} : toDo
            );
        default:
            return state;
    }
}

export default bowlingReducer;