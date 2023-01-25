import React from 'react'
import Shimmer from './Shimmer/Shimmer'

function SkeletonGallery({ theme }) {
    const themeClass = theme || "light"
    return (
        <div className={` w-full h-300 overflow-hidden relative bg-gray-200 m-auto rounded ${themeClass}`}>
            
            <Shimmer />
        </div>
    )
}

export default SkeletonGallery
