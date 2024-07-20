import React from 'react'
import Card from '../components/common/Card'

const MoreWorks = () => {
  return (
    <>
      <div className='mt-16 w-11/12 mx-auto py-10 '>
        <div className='flex flex-col gap-4 items-center justify-center'>
          <h1 className=' text-white text-3xl font-bold tracking-tighter sm:text-5xl'>
            Projects
          </h1>
          <div>
            <Card />
          </div>
        </div>
      </div>
    </>
  )
}

export default MoreWorks 