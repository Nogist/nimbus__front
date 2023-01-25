import React from 'react'
import SectionHeader from '../customComponents/SectionHeader';

function SortedEntries({ handleClearAll, allSortedVotes, isLoading, showClearBtn=true }) {



    return (
        <div className="w-full pt-4 pb-5">
            <SectionHeader headerText="Sorted Entries" />
            {
                isLoading ? 
                <div className="py-20">
                    <p className="text-center text-brand-color1 font-bold text-2xl">Loading...</p>
                </div>:
                allSortedVotes.length !== 0 ?
                <div className="w-full text-brand-color1">
                <table className="w-full mt-4">
                    <tr className="bg-charity-color9 w-4/5 text-left">
                        <th className="opacity-80 font-bold py-1 pr-5">S/N</th>
                        <th className="opacity-80 font-bold py-1">Nominations</th>
                        <th className="opacity-80 font-bold py-1">Pool Count</th>
                    </tr>
                    {
                        allSortedVotes.map((data, index) =>{
                            return(
                                <tr>
                                    <td className=" py-3 pl-3">{index + 1}</td>
                                    <td className="py-3">{data._id}</td>
                                    <td className="py-3">{data.num}</td>
                                </tr>
                            )
                        })
                    }
                </table>
                {
                    showClearBtn && 
                    <div className="py-10 w-full">
                        <button className="w-32 py-2 rounded-full border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white font-semibold text-lg" onClick={handleClearAll}>Clear all</button>
                    </div>
                }
                </div>
                :
                <div className="py-20">
                    <p className="text-center text-brand-color1 font-bold text-2xl">Empty</p>
                </div>
            } 
        </div>
  )
}

export default SortedEntries