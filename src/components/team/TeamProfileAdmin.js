import React,{ useContext, useState} from 'react'
import { useEffect } from 'react';
import { TeamProfileContext } from '../../context/TeamProfileContext'
import SkeletonLoader from '../customElements/SkeletonLoader';
import Card from "./ImageCard";
import ProfileModal from './ProfileModal';
import emptyImage from "../../assets/images/emptyImage.png";
import { IoIosPersonAdd } from 'react-icons/io';
import Overlay from '../customComponents/Overlay';
import Loader from 'react-spinners/BeatLoader';
import UpdateProfileModal from "../customComponents/UpdateProfileModal";
import CreateTeamProfile from '../customComponents/CreateTeamProfile';
import Modal from "../customComponents/Modal";
import DeleteModal from '../customComponents/DeleteModal';

function TeamProfileAdmin(props) {
  const {teamProfile, loadTeamProfile, isLoading, getPositions, ranks, modalIsActive, modalMessage, setModalIsActive, deleteProfile, token} = useContext(TeamProfileContext); 
  const [ backDropIsActive , setBackDropIsActive ] = useState(false);
 
  const [ id, setId ] = useState("");
  const [ updateModalIsActive , setUpdateModalIsActive ] = useState(false);
  const [ createModalIsActive , setCreateModalIsActive ] = useState(false);
  const [ deleteModalIsActive, setDeleteModalIsActive ] = useState(false);
  const [ deleteMessage, setDeleteMessage ] = useState("");

  const handleProfileOnClick = (id) =>{
    setId(id);
    setBackDropIsActive(true);
  }

  const handleProfileOnClose = () =>{
      setBackDropIsActive(false);
  }
  const handleUpdateModalOnClose = () =>{
    setUpdateModalIsActive(false);
}
const handleCreateModalOnClose = () =>{
  setCreateModalIsActive(false);
}
  const closeModal = () =>{
    setModalIsActive(false);
  }

  const handleTeamOnAdd = () =>{
        setAddTeamIsActive(true);
        setBackDropIsActive(true);
    }

    const handleProfileUpdate = (id) =>{
      setId(id);
      setUpdateModalIsActive(true);
    }
    const handleCreateProfile = (id) =>{
      setCreateModalIsActive(true);
    }
    const handleDeleteProfile = (id) =>{
      setDeleteModalIsActive(false);
      deleteProfile(id);
    }
    const handleProfileDelete = (id) =>{
      setId(id);
      setDeleteMessage("Are sure you want to delete this profile ?")
      setDeleteModalIsActive(true);
    }
    const closeDeleteModal = () =>{
      setDeleteModalIsActive(false);
    }

  useEffect(()=>{
    window.scrollTo(0,0);
    loadTeamProfile();
    getPositions();
  },[token])
  return (
    <>
    <div className="team-container">
      {
        backDropIsActive && 
        <ProfileModal handleBackDrop={handleProfileOnClose} teamProfile={teamProfile} imageId={id} />
      }
      {
        isLoading &&
        <Overlay position="fixed" zIndex="z-120">
            <Loader size={25} color="#4286FF"/>
        </Overlay>
      } 
        <DeleteModal message={deleteMessage} open={deleteModalIsActive} handleClose={closeDeleteModal} onDelete={handleDeleteProfile} id={id} />
      {
        updateModalIsActive && 
          teamProfile.map((data) =>{
            return(
                id === data._id &&
                <UpdateProfileModal
                  id={data._id}
                  onClick={handleUpdateModalOnClose} 
                  image={data.imageUrl}
                  nameValue={data.name}
                  positionValue={ranks}
                  bioValue={data.bio}
                  handleCloseUpdateModal={setUpdateModalIsActive}
                />
                    )
                })
      }
      {
        createModalIsActive && 
          <CreateTeamProfile
            onClick={handleCreateModalOnClose}
            image={emptyImage}  
            nameValue=""
            positionValue={ranks}
            bioValue=""
            handleCloseCreateModal={setCreateModalIsActive}
          />
      }
      {
        modalIsActive &&
        <Modal message={modalMessage} open={modalIsActive} handleClose={closeModal}/>
      }
      <div className='bg-gradient-to-b from-brand-color2 via-brand-color3 to-brand-color4'>
        <div className="flex flex-wrap w-4/5 lg:w-95 xl:w-3/4 1xl:w-70 mx-auto bg-background-logo bg-no-repeat bg-contain bg-top pt-10">
        <div className="w-full py-12 text-left">
            <h1 className="text-primary6 font-black text-4xl pb-5 opacity-80">Edit Team Profile</h1>
            <div className="relative flex justify-end">
                <button className='right-5 rounded-40 border-2 border-primary3 text-primary3 px-5 py-2 text-base font-semibold flex items-center hover:bg-primary3 hover:text-white' onClick={handleCreateProfile}><i className='px-2'><IoIosPersonAdd /></i>Add Team</button>
            </div>
        </div>
        {
          isLoading &&
            [1,2,3,4,5,6].map((n, index) =>{ 
              return( 
                <div className="w-full md:w-2/4 lg:w-1/3 flex justify-center" key={index}>
                  <div className="m-5 w-300 min-w-300 h-400">
                    <SkeletonLoader />
                  </div>
                </div>
              )
              }
          ) 
        } 
        {
          teamProfile.length !== 0 &&
          teamProfile.map((data) =>{
              return(
                <div key={data._id} className="w-full md:w-2/4 lg:w-1/3 flex justify-center">
                  <Card image={data.imageUrl} position={data.position} name={data.name} onClick={handleProfileOnClick.bind(null, data._id)} onDelete={handleProfileDelete.bind(null, data._id)} onEdit={handleProfileUpdate.bind(null, data._id)}  profileEdit={true}/>
                </div>
              )
          })
        }     
        </div>
        </div>
      </div>
    </>
  )
}

export default TeamProfileAdmin;