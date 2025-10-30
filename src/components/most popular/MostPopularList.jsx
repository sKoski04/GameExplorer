import './MostPopularList.css'
import { mostPopular } from '../../gamedata/mostPopular.js'

function MostPopularList({subtitle,buttonText,data}){
    return(
      <>
      <div className='sub-title'><h2 >{subtitle}</h2>
      <button className='see-all-btn'>{buttonText}</button>
      </div>
      
        <div className='list-frame'>
           
            <ul className='list'>
              {data.map(data=>(
                <li key={data.id} className='game-card'>
                    <img className='cover-img' src={data.image} alt="Cover Image" />
                    <p className='title'>{data.name}</p>
                </li>

              ))}
            </ul>
         
        </div>
       </>
    )
   
}

export default MostPopularList