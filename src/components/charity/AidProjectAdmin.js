import React, {useContext, useEffect, useState} from 'react'
import Timer from './Timer';
import { AidProjectContext } from '../../context/AidProjectContext';
import Loader from 'react-spinners/BeatLoader';
import SectionHeader from "../customComponents/SectionHeader";
import Overlay from '../customComponents/Overlay';
import Modal from "../customComponents/Modal"
import EntriesSection from './EntriesSection';
import SortedEntries from './SortedEntries';
import ShuffledNominations from './ShuffledNominations';
import DeleteModal from '../customComponents/DeleteModal';
import axios from "axios";

function AidProjectAdmin() {
    const { isLoading, setIsLoading, setModalMessage, modalIsActive, setModalIsActive, modalMessage, token, getSortedVotes, allSortedVotes } = useContext(AidProjectContext);

    const baseURL = process.env.NEXT_PUBLIC_API_BASE_URL;
    const shuffledNomineesURL = baseURL + "three";
    const allVotersURL = baseURL + `charity?round=1`;
   

    const [ id, setId ] = useState("");
    const [ deleteModalIsActive, setDeleteModalIsActive ] = useState(false)
    const [ deleteMessage, setDeleteMessage ] = useState("");
    const [ nominees, setNominees ] = useState([{ nominee: ""}]);
    const [ allVotes, setAllVotes ] = useState([]);
    
    
    let config = {
        headers: {
          'Authorization': 'Bearer ' + token
        }
    }

    const getAllVoters = () =>{
        setIsLoading(true)
        axios.get(allVotersURL, config)
        .then((res) =>{
            if(res.data.status === "success"){
                setIsLoading(false);
                if(res.data.data.stats.length !== 0){
                    setAllVotes(res.data.data.stats.map(data =>(
                        data
                    )))
                }
                else{
                    setAllVotes([])
                }
            }
        })
        .catch((err) =>{
            setIsLoading(false);
        })
    }

    const handleClearAll = () =>{
        setIsLoading(true)
        axios.delete(`${baseURL}charity?round=1`, config)
        .then((res) =>{
            setIsLoading(false);
            getAllVoters()
            getSortedVotes()
            setModalMessage({
                msg: "Vote cleared successfully !!!",
                status: 1
            })
            setModalIsActive(true);
            
        })
        .catch(err =>{
            setIsLoading(false);
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
            setModalIsActive(true);
        })
    }
   
    const closeModal = () =>{
        setModalIsActive(false);
    }

    const handleOnDelete = () =>{
        setDeleteMessage("Are you sure you want to clear the nominees ?")
        setDeleteModalIsActive(true);
        setModalIsActive(false);
    }

    const closeDeleteModal = () =>{
        setDeleteModalIsActive(false);
    }

    const handleClearNominees = () =>{
        setDeleteModalIsActive(false);
        setIsLoading(true);
        axios.delete(shuffledNomineesURL, config)
        .then((res) =>{
            getTopNominatons();
            setModalMessage({
                msg: "Nominees Deleted Successfully",
                status: 1
            })
            setIsLoading(false);
            setModalIsActive(true);
        })
        .catch(err =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
            setIsLoading(false);
            setModalIsActive(true);
        })
    }

    const getTopNominatons = () =>{
        setIsLoading(true);
        axios.get(shuffledNomineesURL, config)
        .then((res) =>{
            setIsLoading(false);
            if(res.data.data.length !== 0){
                const nomineeData = res.data.data;
                setNominees(nomineeData);
                setId("1");
            } 
            else{
                setNominees([{ nominee: ""}])
                setId("");
            }
        })
        .catch(err =>{
            setIsLoading(false);
            setId("");
        })
    }
    
    const addNominees = (payload) =>{
        setIsLoading(true);
        axios.post(shuffledNomineesURL, payload, config)
        .then((res) =>{
            if(res.data.status === "success"){
                console.log("success");
                getTopNominatons();
                setModalMessage({
                    msg: "Nominees has been set",
                    status: 1
                })
                setIsLoading(false);
                setModalIsActive(true);
            }
        })
        .catch(err =>{
            setModalMessage({
                msg: err.response.data.message,
                status: 0
            })
            setIsLoading(false);
            setModalIsActive(true);
        })
    }

    useEffect(()=>{
        if(token){
            getAllVoters();
            getSortedVotes();
        }
    }, [token])

    
    return (
        <div className="md:text-about-p-color">
            {
                modalIsActive &&
                    <Modal message={modalMessage} open={modalIsActive} handleClose={closeModal}/>
            }
            {
                isLoading &&
                <Overlay position="fixed" zIndex="z-120">
                    <Loader size={25} color="#4286FF"/>
                </Overlay>
            } 
            {
                deleteModalIsActive &&
                <DeleteModal message={deleteMessage} open={true} handleClose={closeDeleteModal} onDelete={handleClearNominees.bind(null, id)} id={id} />
            }
            <div className="bg-gradient-to-b from-brand-color2 via-brand-color3 to-brand-color4">
                <div className="xl:w-9/12 w-4/5 mx-auto bg-background-logo bg-no-repeat bg-contain bg-top pt-10">
                    <h1 className="font-black md:py-5 py-3 text-brand-color1 md:text-4xl text-2xl opacity-80">
                        Nimbus Aid Project
                    </h1>
                    <div className="block">
                        <SectionHeader headerText="Set timer" />
                        <Timer />
                    </div>
                </div>
                <div className="w-9/12 m-auto">
                    <EntriesSection isLoading={isLoading} allVotes={allVotes} />
                     <SortedEntries handleClearAll={handleClearAll} allSortedVotes={allSortedVotes} isLoading={isLoading}/>
                    <ShuffledNominations nominees={nominees} setNominees={setNominees} handleOnClear={handleOnDelete} handleAddNominees={addNominees} handleGetTopNominatons={getTopNominatons} id ={id} />
                </div>
            </div>
        </div>
    )
}

export default AidProjectAdmin