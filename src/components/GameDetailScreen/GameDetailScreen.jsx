import './GameDetail.css'

function GameDetailScreen({game, onClose}) {
  
  if (!game) return null;

  return (
 <div className='item-wrapper'>
    <div className='main-info-1'>
<div className='main-details'>
<div className='img-frame'>
    <img className='image-itself' src={game.image} alt="" />
    </div>
    <h1 className='game-title-1'> {game.name}</h1>
    <h4 className='game-studio-name'>by:  {game.studio}</h4>
    <div className='p-wrapper'>
    <p className='game-description'> {game.description}</p>
    <button className='play-button' onClick={()=>window.open( window.open(game.site, "_blank"))}>Play</button>
    <p></p>
    </div>
    <div className='pegi-frame'>
    <img className='pegi-img' src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/PEGI_7.svg/500px-PEGI_7.svg.png" alt="pegi" />
    </div>
     <div className='info-data'>
        <p className='tags-and-prices'>€ {game.price}</p>
        < p className='tags-and-prices'>{game.tag1}</p>
        <p className='tags-and-prices'>{game.tag2}</p> 
        <p className='tags-and-prices'>{game.tag3}</p>
        </div>
    </div>
     </div>
   
        
   

    
 </div>
  );
}

export default GameDetailScreen;
