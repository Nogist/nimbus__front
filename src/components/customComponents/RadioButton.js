import React from 'react'

function RadioButton({ name, label, width, handleOnChange, value, defaultValue, disabled=false}) {
  
    const handleChange = (e) =>{
        const { name, value } = e.target;
        handleOnChange(name, value);
    }
    
    return (
        <div className={`text-brand-color1 w-${width} mt-4 mr-24 flex items-center`}>
            <input type="radio" name={name} className="w-3 h-3 mr-2" onChange={handleChange} value={value} checked={defaultValue === value ? true : false} disabled={disabled} required/>
            <label className="text-base md:text-xl opacity-80 font-medium pb-2 text-brand-color1 ">{label}</label>
        </div>
    )
}

export default RadioButton