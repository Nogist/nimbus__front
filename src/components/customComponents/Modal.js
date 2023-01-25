import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { IoIosCheckmarkCircleOutline, IoMdCloseCircle } from 'react-icons/io';
import { MdHowToVote } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  borderRadius: "20px",
  border: '2px solid #ffffff',
  boxShadow: 24,
  textAlign: "center",
  outline: "none",
  p: 4,
};

export default function BasicModal({ message, open, handleClose, payload, setVerifyModalIsActive }) {

  

    // const handleVoteVerification = () =>{
    //   if(payload !== undefined){
    //     setVerifyModalIsActive(false);
    //     verifyVote(payload.verify);
    //   }
    //   else{
    //     return false;
    //   }

    // }
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='text-center'>
        {
          message.status === 0 &&
          <i className='text-5xl text-red-500 inline-block'><IoMdCloseCircle /></i>
        }
        {
          message.status === 1 &&
          <i className='text-5xl text-green-500 inline-block'><IoIosCheckmarkCircleOutline /></i> 
        }
        {
          message.status === 2 &&
          <i className='text-5xl text-green-500 inline-block'><MdHowToVote /></i> 
        }
        {
          message.status === 3 &&
          <i className='text-5xl text-green-500 inline-block'><MdHowToVote /></i> 
        }
            
        </div>
            
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {
              message.status === 0 &&
              <p className="text-xl font-bold pt-5">Opps !!!</p>
            }
            {
              message.status === 1 &&
              <p className="text-xl font-bold pt-5">Thank you</p>
            }
            {
              message.status === 2 &&
              <p className="text-xl font-bold pt-5">Vote Verification</p>
            }
            {
              message.status === 3 &&
              <p className="text-xl font-bold pt-5">Thank you for voting</p>
            }
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 1 }}>
            {message.msg}
          </Typography>
          <div className="text-center pt-6 w-full flex justify-center items-center">
            <button className="bg-primary2 border-2 border-primary2 text-white hover:bg-white hover:text-primary2 rounded-lg py-2 px-6 mx-3" onClick={handleClose}>
              {
                message.status === 2 ? "Cancel" : "Ok"
              }
            </button>
            {/* {
              message.status === 2 &&
              <button className="bg-primary2 border-2 border-primary2 text-white hover:bg-white hover:text-primary2 rounded-lg py-2 px-6 mx-3" onClick={handleVoteVerification}>Verify</button>
            }  */}
          </div>
          
        </Box>
      </Modal>
  );
}