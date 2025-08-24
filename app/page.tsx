import Experience from '@/components/Experience'
import Header from '@/components/Header'
import Landing from '@/components/Landing'
import Projects from '@/components/Projects'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='fixed w-full z-50'>
        <Header />
      </div>
      <div className='grid gap-5 md:gap-28 py-20 md:py-40'>
        <Landing />
        <Experience />
        <Projects />
      </div>
    </>
  )
}

export default page