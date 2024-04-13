import React from 'react'
import { useTable } from '../store/table/hooks'
import { PLAYER_COUNT } from './consts'





export const Table = () => {

  const {players , activePlayer } = useTable()

  const pattern = {
    1:[3,4,1,2],
    2:[4,1,2,3],
    3:[1,2,3,4],
    4:[2,3,4,1]
  }[activePlayer]
  return (
    <div className='w-[1000px] h-[1000px] bg-blue-500 mx-auto my-5 relative'> 
    {
      PLAYER_COUNT !== players.length && (
        <div className='text-center text-white absolute top-0 left-0 px-4 h-8 text-sm bg-orange-500 rounded-br'>
          <p>Waiting for <b className='mx-0.5'>{PLAYER_COUNT - players.length}</b>  more players</p>
        </div>)
    }
    {
      [1,2,3,4].map((seatId, index) =>(
        <div className='w-52 h-52 rounded-full border border-white flex items-center justify-center'>
          empty
        </div>
      ))
    }
    </div>
  )
}
