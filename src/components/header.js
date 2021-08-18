import * as React from 'react'

const Header = () => {
    return(
        <div className="container m-auto sm:px-12 md:px-20 max-w-screen-xl px-15 py-40 mt-40 flex flex-col lg:flex items-center lg:justify-center lg:space-x-6 gap-7">
            <h1 className="animate-bounce font-mono text-gray-500">Hi, my name is</h1>
                <svg width="100%" height="100%">
                    <text x="50%" y="80%" text-anchor="middle"> Oanh Le </text>
                </svg>
            <h1 className="text-xl text-gray-500 font-bold">I'm a future Software Engineer</h1>
            {/* <h1 className="animate-bounce text-xl text-gray-500 font-bold">see what i/m doing</h1> */}
        </div>  
    )
}

export default Header