import store from "../index";
import { useDispatch } from "react-redux";

import table, { tableActions } from ".";


export const setPlayer = (seatId, player) => {store.dispatch(tableActions.setPlayer({seatId , player}))
console.log(`player ${seatId} setteed`)
}

export const setPlayers = (players) => store.dispatch(tableActions.setPlayers(players))

export const setActivePlayer = (player) => store.dispatch(tableActions.setActivePlayer(player))