import React from 'react'

function Backdrop({handleBackDrop}) {
  return (
    <div className='h-screen fixed opacity-80 top-0 z-50 left-0 w-full bg-black cursor-pointer' onClick={handleBackDrop}>
    </div>
  )
}

export default Backdrop;