import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, provider } from "../../../Firebase-config";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import Cookies from "universal-cookie";
import loginImage from "/public/assets/Login.svg";
import { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
const cookies = new Cookies();

const Login = (props) => {
  const [user, loading] = useAuthState(auth);
  const { setIsAuth } = props;
  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      cookies.set("auth-token", result.user.refreshToken);
      setIsAuth(true);
    } catch (e) {
      console.log("error in Auth");
    }
  };
  useEffect(() => {
    if(user)
    {
     navigate('/');
    }
  },[user])
 
  // Email login
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    try{
      const userCredential = await createUserWithEmailAndPassword(auth,email,password);
      const user = userCredential.user;
      localStorage.setItem('token',user.accessToken);
      localStorage.setItem('user',JSON.stringify(user));
      console.log('successFull registered')
     navigate('/');
    } catch(err) {
      console.log("error in login")
    }
  }
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 bg-gray-900 ">
  <div className="bg-gray-900 px-4 ">
    <div className="flex flex-col md:flex-row max-w-full md:max-w-6xl mx-auto justify-center items-center bg-gray-900 p-4 md:p-32 space-x-0 md:space-x-32 rounded-xl border-4 border-purple-600">
      {/* left */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 space-y-6 border-2 rounded-lg p-4 py-4 pt-8 bg-purple-600">
        {/* header */}
        <h1 className="text-5xl m-4 font-semibold text-white">Sign Up</h1>
        {/* button */}
        <div className="flex flex-col justify-center space-y-6">
          <button className="btn btn-primary bg-white text-gray-900 hover:opacity-70 hover:bg-gray-300" onClick={signInWithGoogle}>
            <span>Sign Up with Google</span>
          </button>
        </div>
        {/* Line */}
        <div className="inline-flex items-center justify-center w-full">
          <hr className="w-full md:w-64 h-px my-8 bg-purple-500 border-0 " />
          <span className="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-purple-600 right-[830px] ">
            Or sign up with e-mail
          </span>
        </div>
        {/* Gmail section */}
        <form onSubmit={handleSubmit} className="flex flex-col justify-center space-y-6">
          <input type="text" className="input bg-gray-900 text-purple-600" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" className="input bg-gray-900 text-purple-600" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
          <button type="submit" className="btn btn-accent bg-gray-900 text-purple-600 border-2 border-gray-900 hover:bg-purple-600 hover:text-gray-900 hover:border-gray-900">
            <span>Sign Up </span>
          </button>
        </form>
      </div>
      {/* Right */}
      <div className="w-full md:w-1/2 mt-8 md:mt-0">
        <img src={loginImage} alt="" className="hidden md:block md:scale-150 w-full h-auto md:w-[15.5rem] md:h-[15.5rem] mx-auto rounded-full shadow-xl shadow-purple-600" />
      </div>
    </div>
  </div>
</div>


  );
};

export default Login;
{
  /* <button className='btn btn-primary max-w-sm' onClick={signInWithGoogle}>Sign in with google</button> */
}
