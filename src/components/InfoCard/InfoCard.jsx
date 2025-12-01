import './InfoCard.css'

function InfoCard({game,onClose}){
    return(
        <div className='card-frame' onClick={onClose}>
<img src={game.image} alt="" />
        </div>
    )
}
export default InfoCard