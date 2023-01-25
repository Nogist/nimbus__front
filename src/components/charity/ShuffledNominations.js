import React, { useContext, useEffect, useState } from 'react'
import { RiAddLine } from 'react-icons/ri';
import { MdDeleteForever } from 'react-icons/md';
import SectionHeader from '../customComponents/SectionHeader';
import InputField from '../customComponents/InputField';
function ShuffledNominations({ handleOnClear, handleAddNominees, handleGetTopNominatons, nominees, setNominees, id }) {

    const [ numOfNominees, setNumOfNominees ] = useState("");

    const handleOnChange = (e) =>{
        e.preventDefault();
        const id = Number(e.target.name);
        const value = e.target.value
            setNominees( prevState => (
                prevState.map((nominee, index) => ( index === id ? ( nominee, { ["nominee"]: value}) : nominee ))
            ))
    }

    const handleNumOfNomineesChange = (name, value) =>{
        setNumOfNominees(value);
    }
    
    const handleAddInput = () =>{
        let num_Of_Nominees = nominees.length;
        if(num_Of_Nominees <= Number(numOfNominees)){
            setNominees(prevState => [ ...prevState, {"nominee": ""}]);
        }
    }

    const handleDeleteInput = () =>{
        setNominees(nominees.slice(0, -1));
    }

    const handleOnsubmit = (e) =>{
        e.preventDefault();
        console.log(nominees);
        handleAddNominees(nominees);
    }

    const handleClear = (id) =>{
        handleOnClear(id);
    }

    useEffect(() =>{
        handleGetTopNominatons();
    }, [])
  return (
    <div className="w-full pt-4 pb-5">
        <SectionHeader headerText="Shuffled Nomination" />
        <div className='w-2/4'>
            <InputField type="number" name="numOfNominnes" label="Num of Nominnes" width="w-2/4" handleOnChange={handleNumOfNomineesChange} value={numOfNominees} />
        </div>
        <div className="w-full text-brand-color1">
            <form onSubmit={handleOnsubmit}>
                <table className="w-full mt-4">
                    <tr className="bg-charity-color9 w-full">
                        <th className="opacity-80 font-bold py-1 max-w-50 min-w-50 text-left my-4 pl-4">Enter names of top nominees</th>
                    </tr>
                    {
                        nominees.map((nominee, index) =>{
                            return(
                                <tr key={index}>
                                    <td className='py-3 pl-3 flex items-start '>
                                    {index + 1}
                                        <div className='flex flex-col items-center w-80'>
                                            <input className={`ml-2 border border-charity-color4 placeholder-charity-color4 w-full py-1 pl-1 ${id !== "" && "bg-charity-color7"}`} name={index} onChange={handleOnChange} placeholder="Type name here" value={nominee.nominee} disabled={id !== "" && true } autoComplete="off" required/>
                                            {
                                                index === nominees.length -1 && id === "" &&
                                                <div className='w-full flex justify-end text-primary3'>
                                                {
                                                    nominees.length >= 1 &&  nominees.length < Number(numOfNominees) &&
                                                    <i className='pl-4 pt-4 text-2xl cursor-pointer' onClick={handleAddInput}><RiAddLine /></i>
                                                }
                                                {
                                                    nominees.length  > 1 &&
                                                    <i className="pl-4 pt-4 text-2xl cursor-pointer" onClick={handleDeleteInput}><MdDeleteForever /></i>
                                                }
                                                    
                                                </div>
                                            }
                                            
                                        </div>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </table>
                
                <div className="py-10 w-4/5">
                {
                    id === "" ?
                    <button type="submit" className="w-32 py-2 rounded-full border-2 bg-brand-color1 text-white border-brand-color1 hover:text-brand-color1 hover:bg-charity-color8 font-semibold text-lg mr-5">Save</button>
                    :
                    <button type="button" className="w-32 py-2 rounded-full border-2 border-charity-color5 text-charity-color5 hover:bg-charity-color5 hover:text-white font-semibold text-lg" onClick={handleClear.bind(null, id)}>Clear all</button>
                }
            </div>
            </form>
        </div>
    </div>
  )
}

export default ShuffledNominations;