import './DropDown.css'
function DropDown({options, placeholder, onChange}){
    return(
       <section className="menu-box">
       <select className='dropdown' defaultValue="" onChange={function(e) { onChange(e.target.value); }}>
                <option value="" disabled hidden>{placeholder}</option>
                {options.map(function(option, index) {
                    return <option key={index} value={option}>{option}</option>;
                })}
            </select>

       </section>

    )
}

export default DropDown