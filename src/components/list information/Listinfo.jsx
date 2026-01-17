import './Listinfo.css'
import InfoCard from '../InfoCard/InfoCard'
import { MainData } from '../../gamedata/MainData'

function Listinfo({data,onSelectGame,title}){

    return(
        <div className="frame">
            <h2>{title}</h2>
       <ul className="list-Big">
         {data.map(game=>(
                <li key={game.id} className='game-card2' >
             
                    <img className='cover-img2' src={game.image} alt="Cover Image" onClick={()=> onSelectGame(game)}/>
                  
                    <p className='title2'>{game.name}</p>
                </li>

              ))}
       </ul>
           
        </div>
        
    )
}
        

    

    export default Listinfo