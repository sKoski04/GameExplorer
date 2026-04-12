import "./BigList.css"
import { useState } from "react"

function BigList({data, onSelectGame}){
    
    return(
     <>
    
     <section className="main-frame">
         <h1 className="gamesFound">100 Games Found</h1>
        <section className="list-wrapperBig">
            
    <ul className="listBig">
         {data.map(game=>(
                <li key={game.id} className='game-card' >
             
                    <img className='cover-images' src={game.image} alt="Cover Image" onClick={()=> onSelectGame(game)}/>
                  
                    <p className='title'>{game.name}</p>
                </li>

              ))}
       </ul>
       </section>
       </section>
       </>
    )
}

export default BigList