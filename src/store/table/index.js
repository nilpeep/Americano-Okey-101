import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    players:{},
    activePlayer:null
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setPlayer(state,action){
            state.players[action.payload.seatId ] = action.payload.player
        },
        setPlayers(state, action){
            state.players = action.payload
        },
        setActivePlayer(state, action){
            state.activePlayer = action.payload
        }
    }
})

export const tableActions = tableSlice.actions

export default tableSlice.reducer