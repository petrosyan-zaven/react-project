import React from 'react';
import './CategoryList.scss';
import { useParams } from 'react-router-dom';
import useGameData from '../../hooks/useGameData';
import { Link , useNavigate } from 'react-router-dom';

function CategoryList() {

    const data = useGameData();
    const {genre} = useParams();

    const navigate = useNavigate();

    const games = data?.filter((item) => item.genre === genre)

  return (
    <div className='CategoryList'>
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
        <button className='goBack' onClick={()=> navigate('/')}> GO Back </button>
    </div>
  )
}

export default CategoryList