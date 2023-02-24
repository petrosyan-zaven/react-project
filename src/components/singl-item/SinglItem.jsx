import React from 'react'
import './SinglItem.scss'
import { useParams, useNavigate } from 'react-router-dom'
import useGameData from '../../hooks/useGameData';

const SinglItem = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const games = useGameData();

 

  return (
    <div className='singleItem'>

      {
        games?.map((game, index) => {
          if (game.id === +id) {
            return (
        <div key={index} className='box'>
              <div className='card'>
                  <img src={game.img} alt={game.name} />
              </div>
        <div className='card'>
          <h1>{game.name}</h1>
          <h2>{game.price}</h2>
          <h3>{game.genre}</h3>
        </div>
              </div>
            )
          }      
        })
      }

      <button onClick={()=> navigate('/')}> GO Back </button>
    </div>
  )
}


export default SinglItem

