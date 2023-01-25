import React from 'react'

function InputField({type, name, label, width, handleOnChange, value}) {
    var date;
    var Value = value;
    if(type === "datetime-local" && value !== ""){
        date = value.split(/[a-zA-Z]+/);
        Value = date[0] +"T"+ date[1];
    }
    const handleChange = (e) =>{
        e.preventDefault();
        handleOnChange(e.target.name, e.target.value);
    }
    
    return (
        <div className={`text-brand-color1 w-${width} mt-4 mr-24`}>
            <label className="text-xl opacity-80 font-medium pb-2">{label}</label>
            <input type={type} name={name} className="w-full bg-charity-color7 rounded-xl border-charity-color8 py-1 px-2 outline-none" onChange={handleChange} value={Value} required/>
        </div>
    )
}

export default InputField;
