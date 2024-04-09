import {useSelector} from "react-redux"

export const useTable = () => useSelector(state => state.table)