import React from 'react';

function CommentField({ type, name, handleChange, label, value, placeholder, rows, cols}) {
    const handleOnChange = (e) =>{
        handleChange(e.target.name, e.target.value);
    }
    return (
        <div className="border-charity-color4 rounded-lg border-2 w-full bg-white py-4 text-black my-10">
            <div className="w-full md:w-2/4 px-4 md:pl-4">
                <label className="w-full pb-2">{label}<span className="text-charity-color5 ml-1">*</span></label>
                <textarea name={name} value={value} rows={rows}cols={cols} className="w-full border-b-2 border-charity-color4 pt-2 palceholder-charity-color4 focus-within:outline-none text-black" placeholder={placeholder} onChange={handleOnChange} required/>
            </div>
        </div>
    )
}

export default CommentField;
