import React from 'react'

function Input({ width, label, value, type, name, onChange }) {
    
    const handleChange = (e) =>{
        e.preventDefault(); 
        const { name, value }  = e.target;
        onChange(name, value );
    }
  return (
    <div className={width}>
        <label className=' text-base text-black font-meduim'>{label}</label>
        <input type={type} name={name} value={value} className='w-full h-11 rounded-tl-lg rounded-br-lg bg-gray-100 mt-2 p-2 outline-primary2' onChange={handleChange} autoComplete="off" required/>
    </div>
  )
}

export default Input