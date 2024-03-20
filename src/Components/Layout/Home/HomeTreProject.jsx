import React from 'react';
import Card from "../Card";
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';
import Stats from '../../Stats';
function HomeTreProject() {
  return (
    <div className="container space-y-48 pt-12 w-full bg-purple-800 pb-12">
  {/* Head */}
  <Fade top distance="10%" duration={1500}>
  <div className="flex flex-col max-w-6xl mx-auto h-screen">
    <div className="flex flex-col md:flex-row justify-between items-center">
      <h1 className="text-5xl text-black font-Montserrat">Trending Projects</h1>
      <Link to="Project">
      <button className="btn bg-black text-purple-600 hover:opacity-80 duration-300 mt-4 md:mt-0">
        <span className="capitalize">view more</span>
      </button>
      </Link>
    </div>
    {/* Project showcase */}
    <div className="flex flex-col items-center justify-center max-w-6xl space-y-10 bg-black mt-12 rounded-lg">
      {/* project 1 */}
      <Card
        Head="Autonomous Bots"
        sub="This project involves developing a system that can detect the
        gender and age of individual based on certain data parameters.
        It's an excellent project for students interested in data science
        and machine learning."
        img="assets/Autonomus-bot.svg"
      />
      <hr className="w-48 h-1 mx-auto my-4 bg-purple-700 border-0 rounded md:my-10 "></hr>
      <Card
        Head="Gender and Age Detection"
        sub="This project involves developing a system that can detect the
          gender and age of individual based on certain data parameters.
          It's an excellent project for students interested in data science
          and machine learning."
        img="assets/Age-detection.svg"
      />

      <hr className="w-48 h-1 mx-auto my-4 bg-purple-700 border-0 rounded md:my-10 "></hr>
      <Card
        Head="Dice Rolling Simulator"
        sub="This project involves creating a program that simulates the roll
          of a dice. It's a great way to learn Python programming and
          understand the concept of randomness and probability."
        img="assets/data-analytics.svg"
      />
    </div>
  </div>
  </Fade>
  <Stats/>
</div>

  );
}

export default HomeTreProject