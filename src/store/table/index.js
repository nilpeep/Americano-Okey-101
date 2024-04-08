import {createSlice} from "@reduxjs/toolkit"

const initialState = {
    players:[],
    activePlayer:null
}

const tableSlice = createSlice({
    name: "table",
    initialState,
    reducers: {
        setTable(state, action) {
            state.table = action.payload
        }}
})