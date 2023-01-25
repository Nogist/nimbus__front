import React from 'react'

function Comment({ name, label, value, placeholder, rows, cols, handleInputOnChange, disabled=false }) {

    const handleChange = (e) =>{
        e.preventDefault();
        const { name, value } = e.target;
        handleInputOnChange(name, value);
    }

  return (
    <div className="w-full py-2"> 
        <label className="w-full text-base font-medium">{label}:<span className="text-charity-color5 ml-1">*</span></label>
        <div className='w-full py-2'>
            <textarea name={name} value={value} rows={rows}cols={cols} className="w-full border-2 border-gray-300 placeholder:text-gray-400 focus-within:outline-aidProjectColor2 text-black py-2 px-3 rounded-md" placeholder={placeholder} onChange={handleChange} disabled={disabled} required />
        </div>
    </div>
  )
}

export default Comment