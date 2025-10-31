import './gameStoreList.css'


function GameStoreList({subtitle,buttonText,data}){
    return(
      <>
      <div className='sub-title'><h2 >{subtitle}</h2>
      <button className='see-all-btn'>{buttonText}</button>
      </div>
      
        <div className='list-frame'>
           
            <ul className='list'>
              {data.map(data=>(
                <li key={data.id} className='game-card'>
                  <a href={data.link} target='blank'>
                    <img className='cover-imge' src={data.image} alt="Cover Image" />
                    </a>
                    <p className='title'>{data.name}</p>
                </li>

              ))}
            </ul>
         
        </div>
       </>
    )
   
}

export default GameStoreList