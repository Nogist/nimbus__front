import React from 'react'

function Dropdown({ name, handleChange, label, value, options, width, placeholder="", required=true}) {

    const onChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        handleChange(name, value);
    }
  return(
        <div className={`${width} py-2`}> 
            <label className="w-full text-base font-medium">{label}:<span className="text-charity-color5 ml-1">*</span></label>
            <div className='w-full py-2'>
                <select name={name} className="w-full border-2 border-gray-300 placeholder:text-gray-400 text-black py-2 px-3 h-12 rounded-md focus-within:outline-none" onChange={onChange} required={required}>
                    <option value="" className="text-charity-color4" selected={value === "" && true} disabled>{"Select " + placeholder}</option>
                    {
                        options.length !== 0 &&
                        options.map((option) =>{
                            return(
                                <option value={option.category}>{option.category}</option>
                            )
                        })
                    }
                </select>
            </div>
       </div>
    )
}

export default Dropdown
