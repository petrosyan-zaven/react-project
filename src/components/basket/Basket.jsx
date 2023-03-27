// import React from 'react'
// import './basket.scss'
// import useBasketData from '../../hooks/useBasketData'
// import useGameData from '../../hooks/useGameData';
// // import { useState } from 'react';


// function Basket() {

//   // const {basket, setBasket} = useBasketData();
//   const games = useGameData();
//   const {basket, setBasket} = useBasketData();
 

  

//    const basketArray = ( games?.filter((game) => basket?.map(item => item.game_id).includes(game.id)));


// async function deleteFromBasker(game)  {
//   fetch(`http://localhost:3000/basket/delete`, {
//     method: 'DELETE',
//     headers: {
//       'content-type': 'application/json',
//     },
//     body: JSON.stringify( {id: game.id}),
//   })
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error('response was not ok');
//       }
//       setBasket(response)

//       console.log('Game deleted successfully!');
//     })
//     .catch((error) => {
//       console.error(' error delete the game:', error);
//     });
//   console.log(game.id);
// }




//   return (
//     <div className='basket'>

//     {
//       basketArray?.map((item, index) => {
//         return (
//           <div className="card" key={index}>
//             <div className="imgBox">
//               <img src={item.img} alt={item.name}/>
//             </div>

//             <div className="info">
//               <h3>{item.name}</h3>
//               <p>{item.genre}</p>
//               <p>{item.price}</p>
//             </div>
//             <button className='delete' onClick={() => deleteFromBasker(item)}>X</button>
//           </div>

//         )
//       })
//     }

//     </div>
//   )
// }

// export default Basket



import React from 'react';
import './basket.scss';
import useBasketData from '../../hooks/useBasketData';
import useGameData from '../../hooks/useGameData';

function Basket() {
  const games = useGameData();
  const { basket, setBasket } = useBasketData();

  if (!Array.isArray(basket)) {
    return <h1>No items in the basket.</h1>;
  }

  const basketArray = games?.filter((game) =>
    basket?.map((item) => item.game_id).includes(game.id)
  );

  //  function deleteFromBasket(game) {
    // fetch(`http://localhost:3000/basket/delete`, {
    //   method: 'DELETE',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify({ id: game.id }),
    // })
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error('response was not ok');
  //       }
  //       setBasket(response);
  //     })
  //     .catch((error) => {
  //       console.error(' error delete the game:', error);
  //     });
  // }

  // async function deleteFromBasket(game) {
  //   try {
  //     const response = await fetch(`http://localhost:3000/basket/delete`, {
  //       method: 'DELETE',
  //       headers: {
  //         'content-type': 'application/json',
  //       },
  //       body: JSON.stringify({ id: game.id }),
  //     });
  
  //     if (!response.ok) {
  //       throw new Error('response was not ok');
  //     }
  
  //     // Parse the response body as JSON to get the new basket data
  //     const newBasket = await response.json();
  //     setBasket(newBasket);
  //     console.log('Game deleted successfully!');
  //   } catch (error) {
  //     console.error(' error delete the game:', error);
  //   }
  //   console.log(game.id);
  // }
  

  async function deleteFromBasket(game) {
    try {
      const response = await fetch(`http://localhost:3000/basket/delete`, {
        method: 'DELETE',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ id: game.id }),
      });
  
      if (!response.ok) {
        throw new Error('response was not ok');
      }
  
      // Parse the response body as JSON
      const responseData = await response.json();
  
      // Check that responseData contains the updated basket data
      if (!responseData || !Array.isArray(responseData)) {
        throw new Error('Invalid response data');
      }
  
      // Update the state of the Basket component with the updated basket data
      setBasket(responseData);
      console.log('Game deleted successfully!');
    } catch (error) {
      console.error('error deleting the game:', error);
    }
  }
  

  return (
    <div className='basket'>
      {basketArray?.map((item, index) => {
        return (
          <div className='card' key={index}>
            <div className='imgBox'>
              <img src={item.img} alt={item.name} />
            </div>

            <div className='info'>
              <h3>{item.name}</h3>
              <p>{item.genre}</p>
              <p>{item.price}</p>
            </div>
            <button className='delete' onClick={() => deleteFromBasket(item)}>
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Basket;