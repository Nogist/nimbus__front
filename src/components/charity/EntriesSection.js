import React, { useContext, useEffect, useInsertionEffect, useState } from 'react'
import axios from "axios";
import { AidProjectContext } from '../../context/AidProjectContext'; 
import SectionHeader from '../customComponents/SectionHeader';


function EntriesSection({ allVotes, isLoading }) {
 
  return (
    <div className="w-full pt-4 pb-5">
            <SectionHeader headerText="Entries" />
            {
                isLoading ? 
                <div className="py-20">
                    <p className="text-center text-brand-color1 font-bold text-2xl">Loading...</p>
                </div> 
                : 
                allVotes.length !== 0 ?
                <div className="w-full text-brand-color1">
                    <table className="w-full mt-4">
                        <tr className="bg-charity-color9 w-4/5 text-left">
                            <th className="opacity-80 font-bold py-1 pr-5">S/N</th>
                            <th className="opacity-80 font-bold py-1">Nominations</th>
                            <th className="opacity-80 font-bold py-1">Email address</th>
                            <th className="opacity-80 font-bold py-1">Name</th>
                        </tr>
                        {
                            allVotes.map((data, index) =>{
                                return(
                                    <tr>
                                        <td className=" py-3 pl-3">{index + 1}</td>
                                        <td className="py-3">{data.charityName}</td>
                                        <td className="py-3">{data.email}</td>
                                        <td className="py-3">{data.name}</td>
                                    </tr>
                                )
                            })
                        }
                    
                    </table>
                </div>
                :
                <div className="py-20">
                    <p className="text-center text-brand-color1 font-bold text-2xl">Empty</p>
                </div>
            }
            
    </div>
  )
}

export default EntriesSection