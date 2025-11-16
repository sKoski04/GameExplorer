import "./BigList.css"

function BigList({data}){
    return(
        <section className="list-wrapperBig">
           
    <ul className="listBig">
         {data.map(data=>(
                <li key={data.id} className='game-card'>
                  <a href={data.link} target='blank'>
                    <img className='cover-img' src={data.image} alt="Cover Image" />
                    </a>
                    <p className='title'>{data.name}</p>
                </li>

              ))}
       </ul>
       </section>
    )
}

export default BigList