
import React, { useState ,useRef} from 'react'
import TeamAuth from './TeamAuth';
import Cookies from 'universal-cookie';
import TeamChat from './TeamChat';
import { signOut } from 'firebase/auth';
import {auth} from  '../../Firebase-config'
import Login from '../../Components/Layout/Login/Login';
import TeamHome from './TeamHome';
const cookies = new Cookies();
function Team() {

  const [isAuth,setIsAuth] = useState(cookies.get("auth-token"));
  const [room,setRoom] = useState(null);
  const roomInputRef =useRef(null);

  console.log('Room Value'+room);
  
const signUserOut = async() => {
   await signOut(auth);
   cookies.remove("auth-token");
   setIsAuth(false)
   setRoom(null)
}

  if(!isAuth)
  {
    return(
      <div>
        <Login setIsAuth={setIsAuth}/>
      </div>
    )
  }
  return (
    <>
      {room ? (
        <div><TeamChat room={room}/></div>
      ) : (
        <form onSubmit={(e) => {e.preventDefault(); setRoom(roomInputRef.current.value);}}>
  <div className='flex flex-col p-28 px-34 m-4 justify-center items-center mx-auto bg-purple-600 text-gray-900 space-y-6 font-OpenSans border-4 border-purple-600 rounded-xl'>
    <label className='label font-Montserrat text-4xl'>Enter Team Name</label>
    <input className='input placeholder:text-purple-500 text-purple-500' placeholder='eg: Team ArticX' type="text" ref={roomInputRef}/>
    <button className='btn btn-primary' type="submit">Enter Team</button>
  </div>
</form>

      )}
    </>
  );
}

export default Team