import React from 'react'
import { useTable } from '../store/table/hooks'
import { PLAYER_COUNT } from './consts'
import classNames from 'classnames'
import { setActivePlayer, setPlayer } from '../store/table/actions'
import { Player } from './player'





export const Table = () => {

  const {players , activePlayer } = useTable()

  const pattern = {
    1:[3,4,1,2],
    2:[4,1,2,3],
    3:[1,2,3,4],
    4:[2,3,4,1]
  }[activePlayer]
  return (
    <div
    className='w-[1000px] h-[1000px] bg-blue-500 mx-auto my-5 relative'> 
    {
      PLAYER_COUNT !== Object.keys(players).length && (
        <div className='text-center text-white absolute top-0 left-0 px-4 h-8 text-sm bg-orange-500 rounded-br'>
          <p>Waiting for <b className='mx-0.5'>{PLAYER_COUNT - Object.keys(players).length}</b>  more players</p>
        </div>)
    }
    {
      (pattern || [1,2,3,4]).map((seatId, index) =>{
        if(players[seatId]){
           return (<div
          className={classNames("absolute", {
            'top-10 left-1/2 -translate-x-1/2':index===0,
            'top-1/2 right-10 -translate-y-1/2':index===1,
            'left-1/2 bottom-10 -translate-x-1/2':index===2,
            'top-1/2 left-10 -translate-y-1/2':index===3
          })}
          >
            <Player player={players[seatId]}/>
          </div>)
        }
        return (
          <button
          key={seatId}
          type='button'
          onClick={()=>{
            setPlayer(seatId,{
              id:1,
              name: `Player ${seatId}`
            })
            setActivePlayer(seatId )
            console.log(pattern)
          }}
          className={classNames("w-52 h-52 rounded-full border border-white flex items-center justify-center absolute", {
            'top-10 left-1/2 -translate-x-1/2':index===0,
            'top-1/2 right-10 -translate-y-1/2':index===1,
            'left-1/2 bottom-10 -translate-x-1/2':index===2,
            'top-1/2 left-10 -translate-y-1/2':index===3
          })}>
            
          {seatId}. is empty
            
          </button>
        )
      })
    }
    </div>
  )
}
