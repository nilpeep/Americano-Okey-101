import store from "..";

import table, { tableActions } from ".";

export const setPlayer = (playerId, player) => store.dispatch(tableActions.setPlayer(playerId, player))

export const setPlayers = (players) => store.dispatch(tableActions.setPlayers(players))

export const setActivePlayer = (player) => store.dispatch(tableActions.setActivePlayer(player))