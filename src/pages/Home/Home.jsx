import React from 'react'
import './home.scss'
import { Link } from 'react-router-dom';
import useGameData from '../../hooks/useGameData';


function Home() {

  const games = useGameData();

  function addGame(game) {
    fetch('http://localhost:3000/basket/addbasket', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify( {game_id: game.id}),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Game added successfully!');
      })
      .catch((error) => {
        console.error(' error adding the game:', error);
      });
    console.log(game.id);
  }


  return (
    <div className='Home'>
          {
            games?.map((game, index) => {
              
              return (
                <div key={index} className='card'>
                <button className='btn-bay' onClick={() => addGame(game)}>{game.price}</button>
                  <Link to={'/'+ game.id}  className="item">
                    
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