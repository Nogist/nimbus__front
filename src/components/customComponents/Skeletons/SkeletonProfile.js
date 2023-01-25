import React from 'react'
import Shimmer from './Shimmer/Shimmer'
import SkeletonElement from './SkeletonElement'

function SkeletonProfile({ theme }) {
    const themeClass = theme || "light"
    return (
        <div className={`skeleton-profile-wrapper ${themeClass}`}>
            <div className='absolute bottom-0 right-0 flex justify-end h-28 w-full items-center'>
                <div className='w-full h-full'>
                    <div className='flex items-center justify-end pr-7 py-1'>
                        <SkeletonElement type="title"/>
                    </div>
                    <div className='flex items-center justify-end pr-7 py-1'>
                        <SkeletonElement type="title"/>
                    </div>
                </div>
            </div>
            <Shimmer />
        </div>
    )
}

export default SkeletonProfile
