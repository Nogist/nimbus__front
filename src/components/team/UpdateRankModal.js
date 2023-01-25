import React, {useState, useEffect,useContext} from 'react'
import InputField from "../customComponents/InputField"
import { IoIosClose } from 'react-icons/io';
import { TeamProfileContext } from "../../context/TeamProfileContext";
import Backdrop from '../customComponents/Backdrop';
function UpdateRank({ id, handleClose, open}) {
    const { updatePosition, rank, setRank, getPositionsById } = useContext(TeamProfileContext);
    const handleOnChange = (key, value) =>{
        setRank((prevState) =>{
            return{
            ...prevState, [key]: value
            }
        });
    }

    const handleOnSubmit = (e) =>{
        e.preventDefault();
        handleClose();
        updatePosition(id, rank);
    }

    useEffect(() => {
      setRank({});
      getPositionsById(id);
    }, [id])
    return (
      <>
      {
        open &&
        <>
          <Backdrop handleBackDrop={handleClose}/>
          <div className="fixed w-9/12 sm:w-2/4 md:w-2/4 lg:w-5/12 h-2/4 top-2/4 left-2/4 transform -translate-x-2/4 -translate-y-2/4 z-80 bg-white ">
            <div className="bg-charity-color6 w-full h-10 top-0 absolute flex justify-end pr-10">
                <i className="text-white text-2xl" onClick={handleClose}><IoIosClose /></i> 
            </div>
            <form onSubmit={handleOnSubmit}> 
            <div className="w-3/4 pl-10 pt-8">
                <InputField type="text" name="position" label="Position Name" width="full" handleOnChange={handleOnChange} value={rank.position}/>
                <InputField type="number" name="priority" label="Position Number" width="full" handleOnChange={handleOnChange} value={rank.priority} />
            </div>
            <div className="bg-charity-color6 w-full h-10 bottom-0 absolute flex justify-between items-center px-7 text-white">
                <button className="bg-charity-color8 h-8 w-14 rounded-xl border hover:border-brand-color1 hover:bg-white hover:text-brand-color1" onClick={handleClose}>Cancel</button>
                <button type="submit" className="bg-charity-color8 h-8 w-14 rounded-xl hover:border-brand-color1 hover:bg-white hover:text-brand-color1">Update</button>
            </div>
            </form>
          </div>
        </>
      }
        
      </>
       
    )
}

export default UpdateRank
