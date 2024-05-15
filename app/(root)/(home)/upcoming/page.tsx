import CallList from '@/components/CallList'
import React from 'react'

const UpcomingPage = () => {
  return (
    <section className='flex size-full flex-col gap-5 text-white'>
       <h1 className='text-4xl font-extrabold '>
       Upcoming Meeting
       </h1>
       <CallList type="upcoming" />
    </section>
  )
}

export default UpcomingPage