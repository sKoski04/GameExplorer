import './DropDown.css'
function DropDown({item1,item2,item3,item4}){
    return(
       <section className="menu-box">
        <select name="genre" id="genre"className="dropdown" defaultValue="">
              <option value="" disabled hidden>{item4}</option>
            <option value="Action">{item1}</option>
            <option value="Adventure">{item2}</option>
            <option value="Roleplay">{item3}</option>
        </select>

       </section>

    )
}

export default DropDown