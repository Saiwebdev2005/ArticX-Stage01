import React from 'react'
import Bounce from 'react-reveal'

function Stats() {
  return (
    <div className='flex flex-col justify-center items-center w-full mx-auto md:p-24 bg-gray-900'>
      
    <div className="stats shadow bg-purple-600 ">
    <Bounce top>
  <div className="stat place-items-center">
    <div className="stat-title text-gray-900">Successful Projects</div>
    <div className="stat-value text-white">500+</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-gray-900">Satisfied Students</div>
    <div className="stat-value  text-white">98%</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-gray-900">Handled States</div>
    <div className="stat-value text-white">20+</div>
   
  </div>
  </Bounce>
</div>

</div>
  )
}

export default Stats