import React from 'react'
import Fade from 'react-reveal/Fade';
function Offering() {
  return (
    <div className='container max-w-full bg-purple-800 p-32'>
  <Fade top distance="10%" duration={1500}>
    <div className='flex flex-col items-center justify-center max-w-6xl text-black space-y-6 space-x-24 font-OpenSans'>
      <div>
        <h1 className='font-Montserrat text-center text-6xl font-bold ml-24'>Why Us?</h1>
      </div>
      <div className='flex flex-col md:flex-row max-w-4xl items-center justify-center space-x-0 md:space-x-6 space-y-6'>
        {/* card 1 */}
        <div className="card w-full md:w-96 h-96 bg-black shadow-xl mt-5 overflow-hidden text-purple-600">
          <figure><img src="assets/Collaboration.png" alt="Shoes" className='mt-2 bg-purple-600 rounded-xl p-3' /></figure>
          <div className="card-body">
            <h2 className="card-title">Diverse Collaboration</h2>
            <p>
              Our project brings together stundents from various universities, fostering a rich exchange of ideas and perspectives
            </p>
          </div>
        </div>
        {/* card 2 */}
        <div className="card w-full md:w-96 h-96 bg-black shadow-xl overflow-hidden text-purple-600">
          <figure><img src="assets/skill enhancement.png" alt="Shoes" className='mt-6 bg-purple-600 rounded-xl p-3'/></figure>
          <div className="card-body">
            <h2 className="card-title">Skill Enhancement</h2>
            <p>
              Working on collaborative projects helps students develop essential skills such as teamwork, communication, and problem-solving
            </p>
          </div>
        </div>
        {/* card 3 */}
        <div className="card w-full md:w-96 h-96 bg-black shadow-xl overflow-hidden text-purple-600">
          <figure><img src="assets/practical.png" alt="Shoes" className='mt-5 bg-purple-600 rounded-xl p-3'/></figure>
          <div className="card-body">
            <h2 className="card-title">Practical learning</h2>
            <p>
              The initiative provides students with oppourtunity to apply atheir academic knowledge to real world projects, enhancing their learning experience.
            </p>
          </div>
        </div>

      </div>
    </div>
  </Fade>
</div>

  )
}

export default Offering