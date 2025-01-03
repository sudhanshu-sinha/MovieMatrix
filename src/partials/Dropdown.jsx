function Dropdown({title, options, func}){
    return(
        <div className="select ml-2">
            <select defaultValue="0" onChange={func} name="format" id="format">
                <option value="0" disabled>{title}</option>
                {options.map((o,i) => (<option key={i} value={o}>{o.toUpperCase()}</option>))}
            </select>
        </div>
    )
}

export default Dropdown;