import React, { useState, useContext, useEffect } from 'react'
import DropdownField from "../customComponents/DropdownField";
import InputField from "../customComponents/InputField";
import { AidProjectContext } from '../../context/AidProjectContext';
import RadioButton from '../customComponents/RadioButton';

function Timer() {

    
    const { countDownDetails, setCountDownDetails, createCountDownConfiguration, deleteCountDownConfiguration, countDownId, isLoading } = useContext(AidProjectContext);

    const handleOnChange = (name, value) =>{
        setCountDownDetails((prevState) =>{
            return{
                ...prevState, 
                [name]: value
            }
        })
    }
    const handleOnDelete = (e) =>{
        e.preventDefault();
        deleteCountDownConfiguration(countDownId);
        setCountDownDetails({
            round: null,
            start: "",
            stop: ""
        })
    }
    const handleOnSubmit = (e) =>{
        e.preventDefault();
        createCountDownConfiguration(countDownDetails);
    }
 
  return (
    <div className="w-full pt-4 pb-5">
        <div className="pl-3">
            <form onSubmit={handleOnSubmit}>
                <div className="flex flex-wrap justify-start">
                    <div className="w-2/4">
                        <DropdownField  label="Round" name="round" options={[1,2]} width="w-2/4" handleOnChange={handleOnChange} defaultValue={countDownDetails.round}/>
                    </div>
                    <div className='w-2/4'>
                        <InputField type="text" name="title" label="Title" width="w-2/4" handleOnChange={handleOnChange} value={countDownDetails.title}/>
                    </div>
                    <div className="w-2/4">
                        <InputField type="datetime-local" name="start" label="Start date" width="w-2/4" handleOnChange={handleOnChange} value={countDownDetails.start}/>
                    </div>
                    <div className="w-2/4">
                        <InputField type="datetime-local" name="stop" label="End date" width="w-2/4" handleOnChange={handleOnChange} value={countDownDetails.stop}/>
                    </div>
                    <div className="w-2/4 py-5">
                        <label className='w-full text-xl opacity-80 text-brand-color1 font-medium pb-2'>Button</label>
                        <div className="flex justify-start items-center w-full">
                            <RadioButton name="button" label="Enable" width="4" handleOnChange={handleOnChange} value="on" defaultValue={countDownDetails.button} />
                            <RadioButton name="button" label="Disable" width="4" handleOnChange={handleOnChange} value="off" defaultValue={countDownDetails.button} />
                        </div>
                    </div>
                    
                </div>
                <div className="py-10 flex">
                {
                    parseInt(countDownId) === -99 &&
                    <button type="submit" className="py-2 px-6 rounded-full border-2 border-brand-color1 text-brand-color1 hover:bg-charity-color8 hover:text-white font-semibold text-lg mr-20" disabled={isLoading}>Publish</button>
                }
                {
                    parseInt(countDownId) !== -99 &&
                    <button type="button" onClick={handleOnDelete} className="w-32 py-2 rounded-full border-2 border-charity-color5 text-charity-color5 hover:bg-charity-color5 hover:text-white font-semibold text-lg">Delete Timer</button>
                }
                </div>
            </form>
        </div>
    </div>
  )
}

export default Timer