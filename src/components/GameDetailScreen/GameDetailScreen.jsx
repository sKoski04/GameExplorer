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
    <h1 className='game-title-1'>{game.name}</h1>
    <h4 className='game-studio-name'>by: {game.studio}</h4>
    <div className='p-wrapper'>
    <p className='game-description'>{game.description}</p>
    </div>
</div>
    </div>

 </div>
  );
}

export default GameDetailScreen;
