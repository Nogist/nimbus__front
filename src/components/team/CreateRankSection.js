import React,  { useState, useContext } from 'react'
import InputField from '../customComponents/InputField';
import { TeamProfileContext } from '../../context/TeamProfileContext';

function CreateRankSection() {

    const { createPosition } = useContext(TeamProfileContext)

    const [ rankDetails, setRankDetails ] = useState({
        priority: "",
        position: ""
    });

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        createPosition(rankDetails);
        setRankDetails({
            priority: "",
            position: ""
        })
    }

    const handleOnChange = (name, value) =>{
        setRankDetails((prevState) =>{
            return{
                ...prevState, 
                [name]: value
            }
        })
    }
  return (
    <div className="w-full pt-4 pb-5">
        <div className="pl-3">
        <form onSubmit={handleOnSubmit}>
            <div className="">
                <div>
                    <InputField type="number" name="priority" label="Position Number" width="1/3" handleOnChange={handleOnChange} value={rankDetails.priority}/>
                </div>
                <div>
                    <InputField type="text" name="position" label="Position Name" width="1/3" handleOnChange={handleOnChange} value={rankDetails.position}/>
                </div>
            </div>
            <div className="py-10 flex">
                <button type="submit" className="py-2 px-6 rounded-full border-2 border-brand-color1 text-brand-color1 hover:bg-charity-color8 hover:text-white font-semibold text-lg mr-20" disabled={false}>Create</button>
            </div>
        </form>
        </div>
    </div>
  )
}

export default CreateRankSection