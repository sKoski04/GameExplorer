import './MostPopularList.css'
import { mostPopular } from '../../gamedata/mostPopular.js'

function MostPopularList(){
    return(
        <div className='list-frame'>
            <h1>most popular games</h1>
            <ul className='list'>
              {mostPopular.map(mostPopular=>(
                <li key={mostPopular.id} className='game-card'>
                    <img src={mostPopular.image} alt="Cover Image" />
                    <p>{mostPopular.name}</p>
                </li>

              ))}
            </ul>
         
        </div>
      
    )
}

export default MostPopularList