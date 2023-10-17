import React from 'react'
import Team from './Team'

function TeamCreated() {
  return (
    <div className='w-full bg-gray-900'>
     <div className='flex flex-col justify-center items-center max-w-6xl mx-auto font-OpenSans'>
      <div className='flex flex-col justify-center items-start'>
       <div className='flex flex-col justify-center items-center bg-gray-900 p-12 space-y-6 border-4 border-purple-600 rounded-lg'>
        <h1 className='text-5xl font-Montserrat gradient-text'>The Team you joined</h1>
        <ul className='flex flex-row justify-center items-center bg-purple-600 rounded-lg space-x-6 p-6 text-gray-900 font-semibold'>
          <li>ArticX</li>
          <li>Azures</li>
          <li>Mockyz</li>
          <li>Makersz</li>
        </ul>
       </div>
      </div>
      {/* Chat joining */}
      <Team></Team>
     </div>
    </div>
  )
}

export default TeamCreated