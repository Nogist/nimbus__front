import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { AiTwotoneDelete } from 'react-icons/ai';


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

export default function DeleteModal({ message, open, handleClose, onDelete, id}) {
    
  const handleDelete = (id) =>{
      onDelete(id);
    }
  return (
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <div className='text-center'>
          <i className='text-6xl text-red-500 inline-block'><AiTwotoneDelete /></i>
        </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
          <div className="text-center w-full justify-center flex py-5">
            <button className=" bg-red-400 border border-red-400 text-white hover:bg-white hover:text-red-400 rounded-lg py-1 px-3 mx-4" onClick={handleClose}>No</button>
            <button className=" bg-green-300 border border-green-300 text-white hover:bg-white hover:text-green-500 rounded-lg py-1 px-3 mx-4" onClick={handleDelete.bind(null, id)}>Yes</button>
          </div>
        </Box>
      </Modal>
  );
}