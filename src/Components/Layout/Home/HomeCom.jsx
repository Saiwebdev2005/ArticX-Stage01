import React from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from "react-router-dom";

function HomeCom() {
  const categories = [
    { name: 'Web development', color: 'bg-gray-900 text-primary-content' },
    { name: 'Mobile Development', color: 'bg-purple-600 text-accent-content' },
    { name: 'Cyber Security', color: 'bg-gray-900 text-secondary-content' },
    { name: 'Cloud Computing', color: 'bg-gray-900 text-primary-content' },
    { name: 'Digital Marketing', color: 'bg-gray-900 text-accent-content' },
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 bg-gray-900 min-h-screen">
  <Fade top distance="10%" duration={1500}>
    <div className="flex flex-col md:flex-row space-y-10 md:space-x-10 justify-center items-center mx-auto max-w-full md:max-w-6xl text-3xl font-OpenSans">
      {/* col 1 */}
      <div className="space-y-6">
        {categories.slice(0, 3).map((category, index) => (
          <div key={index} className={`grid w-full md:w-32 h-full md:h-20 rounded ${category.color} place-content-center p-28 hover:-translate-y-2 duration-300 hover:bg-purple-700 shadow-lg shadow-purple-600 hover:shadow-purple-700 font-semibold`}>
            {category.name}
          </div>
        ))}
      </div>
      {/* col 2 */}
      <div className="space-y-6">
        {categories.slice(3).map((category, index) => (
          <div key={index} className={`grid w-full md:w-32 h-full md:h-20 rounded ${category.color} place-content-center p-28 hover:-translate-y-2 duration-300 hover:bg-purple-700 shadow-lg shadow-purple-500 hover:shadow-purple-700 font-semibold`}>
            {category.name}
          </div>
        ))}
      </div>
      {/* text */}
      <div className="flex flex-col text-left pl-12 justify-center space-y-10 ">
        <h1 className="text-xl md:text-6xl text-purple-600 font-Montserrat gradient-text">
          Select Companion
        </h1>
        <p className="text-sm md:text-lg ">
          Choose Your Companion emphasizes selecting the right partner for
          effective collaboration, skill complementation, and shared goal
          achievement
        </p>
        <Link to="Team">
          <button className="btn text-white bg-purple-600 mx-auto ml-0 px-md py-md hover:bg-purple-500">
            <span className="capitalize">view more</span>
          </button>
        </Link>
      </div>
    </div>
  </Fade>
</div>

  );
}

export default HomeCom;
