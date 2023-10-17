import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';


const ProTop = () => {
  
const [width,setWidth] = useState(0);
const carousel = useRef();

useEffect(() => {
 
 setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
},[])

  const images = [
    {image: "/src/assets/Autonomus-bot.svg", index:1, title:'Autonomous Bots'},
    {image: "/src/assets/Age-detection.svg", index:2, title:'Gender and Age Detection'},
    {image: "/src/assets/data-analytics.svg", index:3, title:'Dice Rolling Simulator'},
  ]

  return (
    <div className="relative flex flex-col items-center justify-center bg-gray-900 text-gray-900 font-semibold max-w-full p-16 pb-36">
      <h1 className='text-5xl p-16 text-purple-600 font-Montserrat'>Top Projects of This Month</h1>
     <div className='flex flex-row max-w-6xl overflow-hidden bg-gray-900 rounded-lg'>
     
      <motion.div ref={carousel} className=' cursor-grab' whileTap={{cursor:"grabbing"}}>
      <motion.div drag='x' dragConstraints={{right:0,left:-width}} className=' flex bg-gray-900 space-x-12'>
      {images.map((value) => {
        return (
          <motion.div
            className="p-12 px-36 flex flex-row justify-center items-center space-x-8 border-2 bg-purple-600 rounded-lg min-w-full -mx-4 carousel"
            key={value.index}
          >
            <img src={value.image} alt={value.index} className="w-64 h-64 " />
            <div className='flex flex-col justify-center items-center max-w-3xl space-y-6'>
            <h1 className='text-2xl'>{value.title}</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas voluptates nostrum nam reiciendis, ipsa illum fuga natus distinctio veniam error, optio exercitationem impedit quidem blanditiis aliquam voluptatibus eaque, dignissimos ratione!</p>
            </div>
          </motion.div>
        );
      })}
     </motion.div>
      </motion.div>
     </div>
     
    </div>
  );
};

export default ProTop;
