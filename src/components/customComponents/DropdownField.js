import React from 'react'

function DropdownField({options, name, label, width, handleOnChange,defaultValue}) {
    const handleChange = (e) =>{
        handleOnChange(e.target.name, e.target.value)
    }
    return (
        <div className={`text-brand-color1 w-${width} mt-4 mr-24`}>
            <label className="text-xl opacity-80 font-medium pb-2">{label}</label>
            <select name={name} className="w-full bg-charity-color7 outline-none border-charity-color8 rounded-xl py-1 px-2" onChange={handleChange} defaultValue={defaultValue} required>
                <option value="" selected={defaultValue === null && true} disabled>{`Select ${label}`}</option>
                { 
                    options.map((option) =>{
                        return(
                            <option value={option}selected={defaultValue === option ? true : false}>{`Round ${option}`}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DropdownField;
