import Header from '@/components/Header'
import Landing from '@/components/Landing'
import React from 'react'

const page = () => {
  return (
    <>
      <div className='fixed w-full'>
        <Header />
      </div>
      <div className='py-40'>
        <Landing />
      </div>
    </>
  )
}

export default page