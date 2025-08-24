import React from 'react'

const Landing = () => {
  return (
    <div className='app-container'>
        <div className="grid place-content-center text-center h-[80vh]">
            <div className='grid gap-4 md:gap-8'>
                <span className='lg:text-xl'>Welcome to my website</span>
                <h2 className="text-4xl lg:text-6xl font-bold">I'm a Fullstack Developer</h2>
                {/* Profile Image down here */}
                <div className='cursor-pointer mt-5 md:mt-8 mx-auto h-[260px] w-[260px] md:h-[340px] md:w-[340px] rounded-full' style={{backgroundImage:  `url("pictures/Fisayo.jpg")`, backgroundPosition: `center`, backgroundSize:`cover`}}/>
            </div>
        </div>
    </div>
  )
}

export default Landing