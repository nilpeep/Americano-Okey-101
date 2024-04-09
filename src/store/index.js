import {configureStore} from "@reduxjs/toolkits"
import table from "./table"

const store = configureStore({
    reducer: {
        table
    }
})

export default store