import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../../Firebase-config";
import { useAuthState } from "react-firebase-hooks/auth"; // Add this line
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function Navbar() {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState(false);
  const profileHandler = () => {
    setProfile(profile ? false : true);
  };
  const navigate = useNavigate();
  return (
    <>
      <div className="container max-w-full px-6 py-6 bg-black hidden md:block">
        <nav className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto font-OpenSans">
          <div className="flex flex-col mb-4 md:mb-0">
            <Link to="/">
              <h1 className="font-Montserrat text-2xl text-white">
              Artic<span className="text-purple-600">X</span>
              </h1>
      
            </Link>
            <p className="text-xs md:text-md text-purple-500">
              Connect and Contribute
            </p>
          </div>
          
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center cursor-pointer">
            <div onClick={() => {
                if(!user) navigate('/Login')
              }}>

            
            <Link
              to="Dashboard"
              className="hover:border-b-purple-500 hover:border-b-2 border-b-2 border-black duration-300"
              // testing
              
            >
              Dashboard
            </Link>
            </div>
            <Link
              to="/Project"
              className="hover:border-b-purple-500 hover:border-b-2 border-b-2 border-black duration-300"
              
            >
              Projects
            </Link>
            <Link
              to="Team"
              className="hover:border-b-purple-500 hover:border-b-2 border-b-2 border-black duration-300"
              
            >
              Teams
            </Link>
            <div>
              {user ? (
                <div className={profileHandler}>
                  <button
                    className=""
                    onClick={() =>
                      document.getElementById("my_modal_5").showModal()
                    }
                  >
                    <div className="avatar online">
                      <div className="w-12 h-12 md:w-12 ml-2">
                        <img
                          src={
                            user && user.photoURL
                              ? user.photoURL
                              : "/src/assets/profile1.svg"
                          }
                          alt=""
                          referrerPolicy="no-referrer"
                          className="rounded-full"
                        />
                      </div>
                      <dialog
                        id="my_modal_5"
                        className="modal  modal-bottom sm:modal-middle"
                      >
                        <div className="modal-box bg-purple-600 text-gray-900">
                          <h3 className="font-Montserrat text-2xl">Hey Buddy!</h3>
                          <p className="py-4 font-OpenSans">
                          Looking forward to our next interaction. Take care!
                          </p>
                          <div className="modal-action">
                            <form method="dialog " className="flex flex-row justify-center item-center space-x-6 mx-auto">
                              {/* if there is a button in form, it will close the modal */}
                              <button className='btn bg-red-500 text-white border-red-600 px-6 hover:opacity-50 hover:bg-red-800 duration-300' onClick={() => auth.signOut()}>LogOut</button>
                              <button className="btn bg-gray-900 text-purple-600 border-gray-900 px-8 hover:opacity-50 hover:bg-gray-900 duration-300">Close</button>
                            </form>
                          </div>
                        </div>
                      </dialog>
                    </div>
                  </button>
                </div>
              ) : (
                <Link to="/Login" className="">
                  <button className="bg-purple-600 px-4 py-2 ml-4 rounded-lg border-2 border-purple-600 font-bold text-white hover:bg-opacity-80">
                    <span>Login</span>
                  </button>
                </Link>
              )}
            </div>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
