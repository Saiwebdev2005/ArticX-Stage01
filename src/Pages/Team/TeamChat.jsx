import React, { useEffect, useState } from "react";
import {
  addDoc,
  collection,
  serverTimestamp,
  onSnapshot,
  query,
  where,
  orderBy,
} from "firebase/firestore";
import { auth, db } from "../../Firebase-config";
import { useTransition, animated } from 'react-spring';

function TeamChat(props) {
  const { room } = props;
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const queryMessages = query(messagesRef, where("room", "==", room),orderBy("createdAt"));
    const unSubscribe = onSnapshot(queryMessages, (snapshot) => {
      let messages = [];
      snapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setMessages(messages);
    });

    return () => unSubscribe();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newMessage === "") return;
    await addDoc(messagesRef, {
      text: newMessage,
      createdAt: serverTimestamp(),
      user: auth.currentUser.displayName,
      room,
    });
    setNewMessage("");
  };

  // Add transitions to messages
  const transitions = useTransition(messages, {
    keys: messages.map((item, index) => index),
    from: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    enter: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    leave: { opacity: 0, transform: 'translate3d(0,-40px,0)' },
    trail: 200
  });
  
  return (
    <div className="flex flex-col h-screen p-6 px-40 bg-purple-600 text-black rounded-lg m-6 relative">
      <div className="flex items-center justify-between mb-6 max-w-5xl mx-auto">
        <h1 className="text-4xl text-black font-Montserrat ml-56">Team Chat</h1>
        <h2 className="text-2xl ml-36 font-Montserrat text-purple-600 bg-black rounded-lg px-4 py-2">{room.toUpperCase()}</h2>
      </div>
      <div className="flex-grow overflow-auto mb-6 md:w-full sm:w-80 mx-auto justify-center items-center bg-purple-500 rounded-sm p-8 ">
        <div className="absolute right-[157px] bottom-12">
      <div class="w-5 h-[600px] bg-purple-600"></div>
      </div>
        {transitions((styles, msg) => (
          <animated.div style={styles} key={msg.id} className={`mb-4 p-4  rounded-lg ${msg.user === auth.currentUser.displayName ? 'bg-gray-900 text-purple-600' : 'bg-purple-600 text-gray-900'}`}>
            <h3 className="mb-2 font-bold">{msg.user}</h3>
            <p>{msg.text}
            </p>
            <p className="text-xs">{msg.createdAt ? new Date(msg.createdAt.seconds * 1000).toLocaleDateString() : 'Loading...'}</p>

          </animated.div>
        ))}
      </div>
      
      <form onSubmit={handleSubmit} className=" flex items-center space-x-4 mx-auto">
        <input
          className="flex-grow py-2 px-4 rounded-lg bg-gray-900 text-purple-600"
          type="text"
          placeholder="Type your message here..."
          onChange={(e) => setNewMessage(e.target.value)}
          value={newMessage}
        />
        <button type="submit" className="py-2 px-4 rounded-lg bg-purple-500 text-gray-900">
          Send
        </button>
      </form>
    </div>
  );
}

export default TeamChat;
