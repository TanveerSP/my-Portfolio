import React from 'react'

const GetTouchBtn = () => {
    return (
        <div>
            <button
                onClick={() => window.open("mailto:tanveerpathan.work@gmail.com")}
                className="z-[1]  bg-white rounded-3xl text-black font-semibold py-3 px-6 border-[0.1px] transition-transform transform hover:scale-110 focus:outline-none ">
                Get In Touch
            </button>
        </div>
    )
}

export default GetTouchBtn