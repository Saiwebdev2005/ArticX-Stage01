import React from "react";
import { Link } from "react-router-dom";
function TeamHome() {
  return (
    <div className="w-full bg-gray-900">
      <div className="flex flex-col justify-center items-center space-y-6 font-OpenSans max-w-6xl mx-auto">
        {/* Main Section */}
        <div className="flex flex-row justify-center items-center">
          <div className="flex flex-col justify-start items-center text-left w-1/2 mb-56 space-y-6 relative">
            <h1 className="text-5xl font-Montserrat gradient-text">
              Initiate a Conversation with the Team
            </h1>
            <p>
              To enhance collaboration, we're initiating 'Initiate a
              Conversation with the Team'. Let's share ideas and work together
              effectively.
            </p>
            <div>
              <Link to='/teamJoin'>
              <button className="btn btn-primary px-12 absolute left-0 -bottom-20 bg-purple-600 text-gray-900 hover:bg-purple-500"><span>Join Team</span></button>
              </Link>
            </div>
          </div>
          <div className="mockup-phone border-primary">
            <div className="camera"></div>
            <div className="display relative">
              <div className="artboard artboard-demo phone-1">
                <div className="bg-purple-700 w-full flex justify-center p-6 absolute top-0">
                  <h1 className="text-2xl font-Montserrat mt-4">Team ArticX</h1>
                </div>
                {/* Chat */}
                <div className="chat chat-start font-OpenSans mt-14">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="assets/profile1.svg" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble bg-purple-600 text-gray-900">Hey, I’m having some trouble with the API endpoint for user registration.</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
                <div className="chat chat-end font-OpenSans">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="assets/profile2.svg" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Anakin
                    <time className="text-xs opacity-50">12:46</time>
                  </div>
                  <div className="chat-bubble bg-gray-900 text-purple-600">That’s strange. Did you check the server logs for any exceptions?</div>
                  <div className="chat-footer opacity-50">Seen at 12:46</div>
                </div>
                <div className="chat chat-start font-OpenSans">
                  <div className="chat-image avatar">
                    <div className="w-10 rounded-full">
                      <img src="assets/profile1.svg" />
                    </div>
                  </div>
                  <div className="chat-header">
                    Obi-Wan Kenobi
                    <time className="text-xs opacity-50">12:45</time>
                  </div>
                  <div className="chat-bubble bg-purple-600 text-gray-900">Yes, it seems like there’s an issue with the database connection.</div>
                  <div className="chat-footer opacity-50">Delivered</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamHome;
