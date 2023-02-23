import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom';
import useGameData from '../../hooks/useGameData';

function Home() {
  const games = useGameData();
  return (
    <div className='Home'>
          {
            games?.map((game, index) => {
              return (
                <div key={index} className='card'>
                  <Link to={'/'+ game.id}  className="item">
                    <button className='btn-bay'>{game.price}</button>
                    <img className='gameImg' src={game.img} alt={game.name} />
                  </Link>
                </div>
              )
            })
          }
    </div>
  )
}

export default Home