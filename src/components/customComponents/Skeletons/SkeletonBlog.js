import React from 'react'
import Shimmer from './Shimmer/Shimmer'
import SkeletonElement from './SkeletonElement'

function SkeletonBlog({ theme }) {
    const themeClass = theme || "light"
    return (
        <div className={`skeleton-blog-wrapper ${themeClass}`}>
            <div className="h-60">
               <SkeletonElement type="thumbnail"/> 
            </div>
            <div className="my-6 px-4">
                <SkeletonElement type="text"/> 
            </div>
            <div className='my-6 px-4 h-20'>
                <SkeletonElement type="thumbnail"/> 
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonBlog

