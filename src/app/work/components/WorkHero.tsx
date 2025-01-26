import React from 'react'
import WorkHeading from './WorkHeading'

export default function WorkHero() {
  return (
    <div className='h-[40vh] lg:h-[65vh] w-full relative overflow-hidden'>
      <div className='main-container w-full h-full flex items-end'>
          <WorkHeading />
      </div>
    </div>
  )
}
