import React from 'react'

function Overlay(props) {
  return (
    <div className={`w-full h-full bg-black opacity-${props.opacity? props.opacity : "40"} ${props.zIndex} ${props.position} flex justify-center items-center top-0 left-0`}>
    {props.children}
    </div>
  )
}

export default Overlay