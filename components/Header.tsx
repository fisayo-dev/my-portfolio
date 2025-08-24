import React from 'react'


const Header = () => {
    const headerLinks: String[] = [
        "home",
        "experience",
        "projects",
        "skills",
        "socials"
    ]
  return (
    <div className='backdrop-blur'>
        <div className='app-container'>
            <div className="flex items-center justify-between py-6">
                <div className="flex items-center space-x-8">
                    <h2 className='text-2xl font-bold'>Fisayo Obadina</h2>
                    <div className="hidden md:flex space-x-4 items-end">
                        {headerLinks.map((link,index) => (
                            <span key={index} className='text-sm capitalize cursor-pointer dark:hover:text-white dark:text-white/70 text-black/70 hover:text-black'>{link}</span>   
                        ))}
                        </div>
                </div>
                <button className='hidden md:flex space-x-2'>
                    <span>Download Resume</span>
                </button>
                <span className='block md:hidden cursor-pointer dark:hover:text-white'>Menu</span>
            </div>
        </div>
    </div>
  )
}

export default Header