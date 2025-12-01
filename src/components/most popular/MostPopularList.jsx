import './MostPopularList.css'
import { useRef } from 'react'


function MostPopularList({subtitle,buttonText,data}){
  const listRef=useRef(null);
    return(
      
      <>
      <div className='sub-title'><h2 >{subtitle}</h2>
     
      </div>
      <div className='list-frame-with-btns'>
        <button className='scroll-btn' onClick={()=>{listRef.current.scrollBy({left: -300, behavior: 'smooth'})


        }}>Left</button>
        <div className='list-frame'>
           
            <ul className='list' ref={listRef}>
              {data.map(data=>(
                <li key={data.id} className='game-card'>
                  <a href={data.link} target='blank'>
                    <img className='cover-img' src={data.image} alt="Cover Image" />
                    </a>
                    <p className='title'>{data.name}</p>
                </li>

              ))}
            </ul>
         
        </div>
        <button className='scroll-btn'  onClick={()=>{listRef.current.scrollBy({left: 300, behavior: 'smooth'})


        }}>Right</button>
        </div>
       </>
    )
   
}

export default MostPopularList