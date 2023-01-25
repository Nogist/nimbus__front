import React, {useContext, useEffect, useState} from 'react'
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { AidProjectContext } from '../../context/AidProjectContext';
import Loader from 'react-spinners/BeatLoader';
import SectionHeader from "../customComponents/SectionHeader"
import Overlay from '../customComponents/Overlay';
import Modal from "../customComponents/Modal";
import { TeamProfileContext } from '../../context/TeamProfileContext';
import CreateRankSection from './CreateRankSection';
import DeleteModal from '../customComponents/DeleteModal';
import UpdateRank from './UpdateRankModal';

function RankingSystem() {
    const { modalIsActive, modalMessage, token, isLoading, setModalIsActive, ranks, getPositions, deletePosition, setRank} = useContext(TeamProfileContext);
    const [ id, setId ] = useState("");
    const [ deleteModalIsActive, setDeleteModalIsActive ] = useState(false)
    const [ deleteMessage, setDeleteMessage ] = useState("");
    const [ updateModalIsActive, setUpdateModalIsActive] = useState(false);

    const handleUpdateModalonClose = () =>{
        setUpdateModalIsActive(false);
        setRank({});
    }
    const handleOnEdit = (id) =>{
        setId(id);
        setUpdateModalIsActive(true);
    }
    const closeModal = () =>{
        setModalIsActive(false);
    }
    const closeDeleteModal = () =>{
        setDeleteModalIsActive(false);
    }
    const handleOnDelete = (id) =>{
        setDeleteMessage("Are you sure you want to delete this rank")
        setDeleteModalIsActive(true);
        setId(id);
    }
    const handleDeletePosition = (id) =>{
        setDeleteModalIsActive(false);
        deletePosition(id);
    }
    
    const ListOfRanks = () =>{
        return(
            <div className="w-full text-brand-color1">
            {
                isLoading ?
                <p className='text-center py-20 font-bold'>Loading...</p>:
                ranks.length !== 0 ?
                <table className="w-full mt-4">
                    <tr className="bg-charity-color9 shadow-2xl text-left">
                        <th className="opacity-80 font-bold py-1 w-10%">S/N</th>
                        <th className="opacity-80 font-bold py-1 w-2/5">Position</th>
                        <th className="opacity-80 font-bold py-1  w-1/5">Rank</th>
                        <th className="opacity-80 font-bold py-1 w-10%"></th>
                        <th className="opacity-80 font-bold py-1 w-10%"></th>
                    </tr>
                    {
                        ranks.map((data, index) =>{
                            return(
                                <tr>
                                    <td className=" py-3 pl-3">{index+1}</td>
                                    <td className="py-3">{data.position}</td>
                                    <td className="py-3">{data.priority}</td>
                                    <td className="py-3">
                                        <button className="hover:text-charity-color4 text-red-400"  onClick={handleOnDelete.bind(null, data._id)}>{<MdDelete />}</button>
                                    </td>
                                    <td className="py-3">
                                        <button className="hover:text-charity-color4 text-green-300"  onClick={handleOnEdit.bind(null, data._id)}>{<MdModeEdit />}</button>
                                    </td>
                                </tr>
                            )
                        }) 
                    }
                
                </table> :
                <p className='text-center py-20 font-bold'>Empty</p>
            }
            </div>
        )
    }

    useEffect(() =>{
        const tempToken = window.localStorage.getItem("nm-token");
        getPositions(tempToken);
    }, [token])
    return (
        <div className="md:text-about-p-color pb-10">
            <Modal message={modalMessage} open={modalIsActive} handleClose={closeModal}/>
            {
                isLoading &&
                <Overlay position="fixed" zIndex="z-120">
                    <Loader size={25} color="#4286FF"/>
                </Overlay>
            }

            <UpdateRank id={id} open={updateModalIsActive} handleClose={handleUpdateModalonClose} />
           
            <DeleteModal message={deleteMessage} open={deleteModalIsActive} handleClose={closeDeleteModal} onDelete={handleDeletePosition} id={id} />
            
            <div className="bg-gradient-to-b from-brand-color2 via-brand-color3 to-brand-color4">
                <div className="xl:w-9/12 w-4/5 mx-auto bg-background-logo bg-no-repeat bg-contain bg-top pt-10">
                    <h1 className="font-black md:py-5 py-3 text-brand-color1 md:text-4xl text-2xl opacity-80">
                        Ranking System
                    </h1>
                    <div className="block">
                        <SectionHeader headerText="Create Rank" />
                        <CreateRankSection />
                        <SectionHeader headerText="Hierarchical Rankings" />
                        <ListOfRanks/>
                    </div>
                
                </div>
                
            </div>
        </div>
    )
}

export default RankingSystem