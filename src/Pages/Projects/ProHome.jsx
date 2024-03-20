import React from "react";
import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
function ProHome() {
  return (
    <div className="container w-full bg-black text-purple-600 overflow-hidden mx-auto">
      <div className="flex flex-row justify-between items-center max-w-6xl  mx-auto pt-32 pb-80 relative font-OpenSans">
        <Fade top distance="10%" duration={1500}>
          <div className="flex flex-col text-left space-y-16 max-w-2xl w-1/2">
            <div className="space-y-6">
              <h1 className="text-5xl font-Montserrat gradient-text">
                {" "}
                Inspire and Be Inspired
              </h1>
              <p>
                Discover innovation, share your achievements, and join our
                vibrant community of creators. Together, we shape the future.
              </p>
            </div>
            {/* button */}
            <div className="flex flex-row justify-start space-x-12">
              <Link to="ProjectUpload">
                <button className="btn bg-purple-600 text-black hover:bg-purple-500">
                  <span>Upload Projects</span>
                </button>
              </Link>
              <a href="#searchProject">
                <button className="btn bg-gray-900 hover:opacity-60 hover:text-purple-500 text-purple-600 border border-purple-600">
                  <span>Search Projects</span>
                </button>
              </a>
            </div>
          </div>
        </Fade>
        {/* Color effect */}
        <div className="">
          <div className="z-0 absolute top-0 -right-12 w-72 h-72 bg-gradient-to-r from-purple-500 via-gray-900 to-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob">
            1
          </div>
          <div className="absolute top-0 right-24 w-60 h-72 bg-gradient-to-r from-purple-700 via-gray-900 to-purple-700 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000">
            2
          </div>
          <div className="absolute bottom-16 -right-4 w-72 h-72 bg-gradient-to-r from-purple-900 via-gray-900 to-purple-900 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000">
            3
          </div>
        </div>

        <Fade top distance="10%" duration={1500}>
          <div className="z-10">
            <img
              src="assets/Projects.svg"
              alt=""
              className="h-80 w-88 scale-125 rounded-full"
            />
          </div>
        </Fade>
      </div>
    </div>
  );
}

export default ProHome;
