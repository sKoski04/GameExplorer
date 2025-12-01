import "./BigList.css"
import { useState } from "react"

function BigList({data, onSelectGame}){
    
    return(
        <section className="list-wrapperBig">
           
    <ul className="listBig">
         {data.map(game=>(
                <li key={game.id} className='game-card' >
             
                    <img className='cover-img' src={game.image} alt="Cover Image" onClick={()=> onSelectGame(game)}/>
                  
                    <p className='title'>{game.name}</p>
                </li>

              ))}
       </ul>
       </section>
    )
}

export default BigList