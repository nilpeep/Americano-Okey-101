import React from 'react'
import { useTable } from '../store/table/hooks'
import { PLAYER_COUNT } from './consts'





export const Table = () => {

  const {players} = useTable()
  return (
    <div className='w-[1000px] h-[1000px] bg-blue-500 mx-auto my-5 relative'> 
    {
      PLAYER_COUNT !== players.length && (
        <div className='text-center text-white absolute top-0 left-0 px-4 h-8 text-sm bg-orange-500 rounded-br'>
          <p>Waiting for <b className='mx-0.5'>{PLAYER_COUNT - players.length}</b>  more players</p>
        </div>)
    }
    {JSON.stringify(players, null,2)}
    </div>
  )
}
