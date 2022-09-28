import React, { createContext } from "react";
import bowlingReducer from "../reducers/Bowling.Reducer";
import useLocalStorageReducer from "../hooks/useLocalStorageReducer";

export const PlayersContext = createContext();
export const DispatchContext = createContext();

const BowlingProvider = ({ children }) => {
    const defaultPlayers = [];

    const [players, dispatch] = useLocalStorageReducer(bowlingReducer, defaultPlayers, "players");

    return (
        <PlayersContext.Provider value={{ players }}>
            <DispatchContext.Provider value={{ dispatch }}>
                {children}
            </DispatchContext.Provider>
        </PlayersContext.Provider>
    )
}

export default BowlingProvider;