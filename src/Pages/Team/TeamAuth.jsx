import React from 'react'
// import {auth,provider} from '../../Firebase-config';
import { signInWithPopup } from 'firebase/auth';
import Cookies from 'universal-cookie';
const cookies = new Cookies();
function TeamAuth(props) {
const {setIsAuth} = props;

  const signInWithGoogle = async() => {
    try{
    const result = await signInWithPopup(auth,provider);
    cookies.set("auth-token",result.user.refreshToken);
    setIsAuth(true)
    }catch(e) {
      console.log("error in Auth");
    }
  }
  return (
    <div className='p-24 flex flex-col justify-center items-center space-y-16'>
      <p className='text-4xl'>Sign in with Google To Continue</p>
      <button className='bg-purple-600 p-6 rounded-3xl' onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  )
}

export default TeamAuth