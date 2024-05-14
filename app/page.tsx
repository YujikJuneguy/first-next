import { data } from '@/MockData/HomePage'
import React from 'react'

const page = () => {
  data
  return (
    <div>
      <h2 className='text-center font-semibold text-xl uppercase py-5'>home page</h2> 

      <div className='container px-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'>
        {data.map (({id,title,desc}) => {
          return <div key = {id} className='border border-red-800 p-2 rounded-md'>
            <h2 className='font-semibold'>{title}</h2>
            <h3>{desc}</h3>

          </div>
        })}
      </div>
    </div>
  )
}

export default page
