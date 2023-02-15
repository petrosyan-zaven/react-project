import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './Home';

const apiurl  = "http://localhost:3000/games" 

const Api = () => {

  const [games, setGames] = useState([]);

  useEffect(() => {
    loadUsers()
  },[]);

  function loadUsers() {
    axios
    .get(apiurl)
    .then(response => {
        setGames(response.data);

        
      })
    .catch(error => {
        console.log('404' + error);
      })
  }
  console.log(games);


  return (
     
    // games.map(game => {
    //   return <Home key={game.id} game={game} />
    // })
     
    <>
        <Home games="iuiy" />
    </>
    // <div className='Home'>
    //   <h1>Home</h1>
    //   <ul>
    //     {games.map(game => (
    //       <div key={game.id}>
    //       <img src={game.img} alt={game.name} />  
    //       {game.name}</div>
    //     ))}
    //   </ul>
    // </div> 
  )
}

export default Api