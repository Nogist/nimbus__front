import React from 'react'

function Input({ type, name, handleInputOnChange, label, value, placeholder, width, id, disabled=false, required=true}) {

    const handleChange = (e) =>{
      e.preventDefault();
      const { name, value } = e.target;
      handleInputOnChange(name, value, id);
    }
  return (
    <div className={`${width} py-2`}> 
        {label !== "" &&
        <label className="w-full text-base font-medium">{label}:{required && <span className="text-charity-color5 ml-1">*</span>}</label>
        }
        <div className='w-full py-2'>
            <input type={type} id={id} name={name} value={value} className="w-full border-2 border-gray-300 placeholder:text-gray-400 focus-within:outline-aidProjectColor2 text-black py-2 px-3 h-12 rounded-md" placeholder={placeholder} onChange={handleChange} autoComplete="off" disabled={disabled} required={required} />
        </div>
    </div>
  )
}

export default Input