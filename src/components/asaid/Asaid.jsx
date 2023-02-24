import './asaid.scss'
import { Link } from 'react-router-dom';
import useGameData from '../../hooks/useGameData';

function Asaid() {

  const games = useGameData();

  const genres = [...new Set(games?.map(game => game.genre))];

  return (
    <div className='Asaid'>

      {genres.map((genre, index) => {
        return (
          <nav key={index} className='Asaid-game'>
          <Link to={'/genre/' + genre} >{genre}</Link>
          </nav>
        )
      })}

    </div>
  )
}


export default Asaid