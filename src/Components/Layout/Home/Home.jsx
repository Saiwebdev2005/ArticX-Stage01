import React, { useState } from "react";
import Stats from "../../Stats";
import HomeCom from "./HomeCom";
import HomeTreProject from "./HomeTreProject";
import Offering from "./Offering";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import { auth } from "../../../Firebase-config";
import { useAuthState } from "react-firebase-hooks/auth";
import { useTypewriter, Cursor } from "react-simple-typewriter";
function Home() {
  const [text] = useTypewriter({
    words: [
      `Foster growth and understanding by connecting and collaborating with students from various disciplines. This interaction enhances your educational journey by opening doors to new perspectives.`,
    ],
    loop: {},
    typeSpeed: 60,
    deleteSpeed: 120,
  });
  const [user, loading] = useAuthState(auth);
  return (
    <>
     <div className="container mx-auto max-w-full bg-gray-900 min-h-16 p-24 pb-56 flex flex-col md:flex-row">
  {/* left */}
  <Fade top distance="10%" duration={1500}>
    <div className="w-full md:w-1/2">
      <div className="flex flex-col justify-center items-left space-y-8 p-8 ml-12 ">
        <h1 className="text-2xl md:text-6xl text-left font-Montserrat gradient-text">
          Connect and Contribute with students
        </h1>
        <p className="text-md text-left text-purple-500 max-w-2xl font-OpenSans">
          To enhance student collaboration, implement a digital platform,
          conduct interactive sessions, promote peer learning and
          mentorship, integrate real-world projects into the curriculum,
          and offer leadership roles in academic activities.
        </p>
      </div>
      <div className="flex flex-row items-center justify-start ml-12 p-8 space-x-12">
        <button className="px-6 py-3 bg-purple-600 text-xl shadow-md hover:shadow-gray-700 rounded-lg text-gray-900 hover:-translate-y-1 duration-300 border-2 border-purple-700">
          Explore more
        </button>
        {!user && (
          <Link to="/Login">
            <button className="px-14 py-3 bg-gray-900 border-2 border-purple-600 text-xl shadow-md hover:shadow-purple-600 rounded-lg text-purple-500 hover:-translate-y-1 duration-300">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
    {/* right */}
    <div className="w-full md:w-1/2 hidden md:block">
      <div className="mockup-window border bg-purple-600 shadow-2xl shadow-purple-500">
        <div className="flex justify-center px-4 py-16 bg-base-200 h-80 ">
          <code className="max-w-lg text-lg text-purple-500">
            {text}
            <Cursor />
          </code>
        </div>
      </div>
    </div>
  </Fade>
</div>

      <Offering />
      <HomeCom />
      <HomeTreProject />

    </>
  );
}

export default Home;
