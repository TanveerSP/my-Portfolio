import React from 'react'

const CVButton = () => {
    return (
        <div>
            <button
                onClick={() => window.open("mailto:ibrahimmemon930@gmail.com")}
                className="z-[1] padding-20 rounded-3xl text-white font-semibold py-3 px-8 border-[0.1px] border-white transition-transform transform hover:scale-110 focus:outline-none">
                Download CV
            </button>
        </div>
    )
}

export default CVButton