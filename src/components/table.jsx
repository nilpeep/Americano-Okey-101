import React from 'react'
import { useTable } from '../store/table/hooks'
import { PLAYER_COUNT } from './consts'





export const Table = () => {

  const {players} = useTable()
  return (
    <div className='w-[1000px] h-[1000px] bg-blue-500 mx-auto my-5'> 
    {
      PLAYER_COUNT !== players.length && (
        <div className='text-center text-white'>
          <p>Waiting for {PLAYER_COUNT - players.length} more players</p>
        </div>)
    }
    {JSON.stringify(players, null,2)}
    </div>
  )
}
