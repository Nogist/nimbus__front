import React from 'react'
import Backdrop from '../customComponents/Backdrop'
import TeamBio from './TeamBio'

function ProfileModal({ handleBackDrop, teamProfile, imageId}) {
    return(
        <>
          <Backdrop handleBackDrop={handleBackDrop} />
          {
              teamProfile.map((data) =>{
                  return(
                  imageId === data._id && <TeamBio image={data.imageUrl} position={data.position} name={data.name} content={data.bio} onClick={handleBackDrop} />
                  )
              })
          }
        </>
      )
}

export default ProfileModal;