import React from 'react'

function SectionHeader({ headerText}) {
    return (
        <div className="w-full py-1 bg-charity-color6 border-0">
            <div className="w-full pl-2">
                <h1 className="text-brand-color1 text-left font-bold text-xl opacity-80">{headerText}</h1>
            </div>
        </div>
    )
}

export default SectionHeader
