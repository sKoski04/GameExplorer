import './GameCard.css';

function GameCard({game  }){
    return(
        <div className="info-frame">
              <h1>name</h1>
            <p>game description</p>
        <div className="info-image-container">
           
            <img className="info-image" src={""} alt={"image"}/>
               
        </div>
        <a href="">Game page</a>
            </div>
    )
} 

export default GameCard