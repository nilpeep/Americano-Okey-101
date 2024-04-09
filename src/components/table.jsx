import React from 'react'
import { useTable } from '../store/table/hooks'



export const Table = () => {

  const {players} = useTable()
  return (
    <div className='w-[1000px] h-[1000px] bg-blue-500 mx-auto my-5'> 
    {JSON.stringify(players, null,2)}
    </div>
  )
}
