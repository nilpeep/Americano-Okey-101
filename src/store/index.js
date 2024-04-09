import {configureStore} from "@reduxjs/toolkit"
import table from "./table/index.js"

const store = configureStore({
    reducer: {
        table
    }
})

export default store