import store from "../index";
import { useDispatch } from "react-redux";

import table, { tableActions } from ".";


export const setPlayer = (playerId, player) => {store.dispatch(tableActions.setPlayer({playerId, player}))
console.log(`player ${playerId} setteed`)
}

export const setPlayers = (players) => store.dispatch(tableActions.setPlayers(players))

export const setActivePlayer = (player) => store.dispatch(tableActions.setActivePlayer(player))