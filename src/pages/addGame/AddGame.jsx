import React, { useState } from 'react';
import './addGame.scss';

function AddGame() {
  const [game, setGame] = useState({
    name: '',
    genre: '',
    img: '',
    price: '',
  });

  const onInputChange = (e) => {
    setGame({ ...game, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault(); 
    fetch('http://localhost:3000/addgame', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(game),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        };
      })
      .catch((error) => {
        console.error(' error adding the game:', error);
      });
  };

  return (
    <div className='game-form'>
      <h2>Add game</h2>
      <form onSubmit={onSubmit}>
        <div className='add-inp'>
          <input
            type='text'
            placeholder='name'
            value={game.name}
            onChange={(e) => onInputChange(e)}
            name='name'
          />
        </div>

        <div className='add-inp'>
          <input
            type='text'
            placeholder='img URL'
            value={game.img}
            onChange={(e) => onInputChange(e)}
            name='img'
          />
        </div>

        <div className='add-inp'>
          <input
            type='text'
            placeholder='genre'
            value={game.genre}
            onChange={(e) => onInputChange(e)}
            name='genre'
          />
        </div>

        <div className='add-inp'>
          <input
            type='text'
            placeholder='price'
            value={game.price}
            onChange={(e) => onInputChange(e)}
            name='price'
          />
        </div>

        <button type='submit'>Add game</button>
      </form>
    </div>
  );
}

export default AddGame;
