import DropDown from "../dropdownMenuBar/DropDown"
import './Discover.css'

function Discover(){
    return(
        
        <section className="discover-section">
        <h1>this is discovery page</h1>
        <section className="dropdown-row"> 
            
            <DropDown item1={'Action'} item2={'Adventure'} item3={'Roleplay'} item4={'Choose a genre'}></DropDown>
              <DropDown item1={'PC'} item2={'Playstation 5'}item3={'X-box Series x'} item4={'choose a platform'}></DropDown>
                <DropDown  item1={'Ubisoft'} item2={'EA'}item3={'Rockstar Games'} item4={'choose game studio'}></DropDown>
        
        
        
        </section>
       

        
        </section>
    )
}

export default Discover
