import React from 'react'
import Bounce from 'react-reveal'

function Stats() {
  return (
    <div className='flex flex-col justify-center items-center w-full mx-auto md:p-24 bg-black'>
      
    <div className="stats shadow bg-purple-800 ">
    <Bounce top>
  <div className="stat place-items-center">
    <div className="stat-title text-black">Successful Projects</div>
    <div className="stat-value text-white">500+</div>
    
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-black">Satisfied Students</div>
    <div className="stat-value  text-white">98%</div>
  </div>
  
  <div className="stat place-items-center">
    <div className="stat-title text-black">Handled States</div>
    <div className="stat-value text-white">20+</div>
   
  </div>
  </Bounce>
</div>

</div>
  )
}

export default Stats