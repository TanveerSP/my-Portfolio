import React from 'react'

const HighlightText = ({ text }) => {
    return (
        <>
            <p className='text-2xl lg:text-5xl font-bold  bg-gradient-to-t from-[#6366f1] via-[#d946ef] to-[#ec4899] text-transparent bg-clip-text'>
                {text}
            </p>
        </>
    )
}

export default HighlightText