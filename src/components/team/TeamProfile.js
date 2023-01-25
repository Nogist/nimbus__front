import React,{ useContext, useState} from 'react'
import { useEffect } from 'react';
import { TeamProfileContext } from '../../context/TeamProfileContext'
import SkeletonLoader from '../customElements/SkeletonLoader';
import Card from "./ImageCard";
import ProfileModal from './ProfileModal';

function TeamProfile(props) {
  const { teamProfile, loadTeamProfile, isLoading, } = useContext(TeamProfileContext); 
  const [ backDropIsActive , setBackDropIsActive ] = useState(false);
  const [ imageId, setImageId ] = useState("");

  const handleProfileOnClick = (id) =>{
    setImageId(id);
    setBackDropIsActive(true);
  }

  const handleProfileOnClose = () =>{
      setBackDropIsActive(false);
  }

  useEffect(()=>{
    window.scrollTo(0,0);
    loadTeamProfile();
  },[])
  return (
    <>
      {
        backDropIsActive && <ProfileModal handleBackDrop={handleProfileOnClose} teamProfile={teamProfile} imageId={imageId} />
      }
      <div className="w-full py-12 text-center">
          <h1 className="text-primary6 font-black text-4xl pb-5">Our Team</h1>
          <div className='mx-auto w-full px-5 sm:w-500'>
            <p className='text-primary10 text-sm sm:text-base'>We are a team of experts working collaboratively to empower you with opportunities to reach your customers and grow your bottom line.</p>
          </div>
      </div>
      <div className="flex flex-wrap w-4/5 lg:w-95 xl:w-3/4 1xl:w-70 mx-auto">
        {
          (teamProfile.length === 0 ) &&
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
                  <Card image={data.imageUrl} position={data.position} name={data.name} onClick={handleProfileOnClick.bind(null, data._id)}  profileEdit={false}/>
                </div>
              )
          })
        }     
        </div>
    </>
  )
}

export default TeamProfile