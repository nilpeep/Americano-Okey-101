import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    players:[],
    activePlayer:null
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setPlayer(state,action){
            state.players = action.payload
        }    
    }
})