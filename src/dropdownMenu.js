import React , { useState }from "react";
import './style.css';

function DropdownMenu({ 
    templateOptions,
    labelName,
    placeholder,
    onSelect }) {
    const [selectedOption, setSelectedOption] = useState('');
  

    const handleOptionChange = (event) => {
        console.log('option selected', labelName, 'evnt value', event.target.value);
        setSelectedOption(event.target.value);
        onSelect(event.target.value);
    };

    return (
    <div className="dropdown-options">  
        <label className="label-value" htmlFor="dropdown">{labelName}  :  </label>
        <select className="selected-value"
                id="dropdown" 
                value={selectedOption} 
                onChange={handleOptionChange}>
        <option value="" disabled>
          {placeholder}
        </option>
        
        {templateOptions.map((templateOption, index) => (
        <option key={index} value={templateOption}> {templateOption}
        </option>
        ))}
        </select>
    
    </div>

    

    )
}

export default DropdownMenu;