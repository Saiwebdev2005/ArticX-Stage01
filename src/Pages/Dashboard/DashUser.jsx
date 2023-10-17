import React from "react";
import data from "./DashProData";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Firebase-config";
function DashUser() {
  const [user, loading] = useAuthState(auth);

  return (
    <div className="h-fit w-full bg-gray-900">
      <div className="flex flex-col max-w-6xl justify-center items-center mx-auto bg-gray-900 rounded-lg text-purple-600 border-4 border-purple-600">
        {/* Profile with details */}
        <div className="flex flex-row justify-between items-center  space-x-12 w-full">
          <div className="flex flex-row items-center justify-center relative space-x-48">
            <img
              src={
                user && user.photoURL
                  ? user.photoURL
                  : "/src/assets/profile1.svg"
              }
              alt=""
              className="max-w-150-px absolute -m-20 left-24 h-auto rounded-full border-none align-middle shadow-xl lg:-ml-16 w-36"
            />

            <h1 className="text-2xl font-Montserrat w-48">
              {user && user.displayName
                ? user.displayName
                : user.email.split("@")[0]}
            </h1>
          </div>

          <div class="flex justify-center mt-20 w-full px-4 text-center">
            <div class="flex justify-center py-4 pt-8 mb-12 lg:pt-4 bg-purple-600 text-gray-900 rounded-full px-4">
              <div class="mr-4 p-3 text-center">
                <span class="text-blueGray-600 block text-xl font-bold uppercase tracking-wide cursor-pointer">
                  {" "}
                  22{" "}
                </span>
                <span class="text-blueGray-400 text-sm">Projects</span>
              </div>
              <div class="mr-4 p-3 text-center">
                <span class="text-blueGray-600 block text-xl font-bold uppercase tracking-wide cursor-pointer">
                  {" "}
                  10{" "}
                </span>
                <span class="text-blueGray-400 text-sm">Contribution</span>
              </div>
              <div class="p-3 text-center lg:mr-4">
                <span class="text-blueGray-600 block text-xl font-bold uppercase tracking-wide cursor-pointer">
                  {" "}
                  89{" "}
                </span>
                <span class="text-blueGray-400 text-sm">Followers</span>
              </div>
            </div>
          </div>
        </div>
        {/* Personal Info */}
        {/* <div className="flex flex-row items-center justify-between space-x-12 bg-purple-600 text-gray-900 w-full p-8 border-4 border-purple-600">
          <div class="mt-12 text-center">
            <div class="text-blueGray-600 mb-2 mt-10">
              <i class="fas fa-briefcase text-blueGray-400 mr-2 text-lg"></i>
              Solution Manager - Creative Tim Officer
            </div>
            <div class="text-blueGray-600 mb-2">
              <i class="fas fa-university text-blueGray-400 mr-2 text-lg"></i>
              University of Computer Science
            </div>
          </div>
        </div> */}
        {/* Description */}
        <div class="border-blueGray-200 mt-10 border-t py-20 text-center bg-gray-900 text-purple-600">
          <div class="flex flex-wrap justify-center">
            <div class="w-full px-4 lg:w-9/12">
              <p class="text-blueGray-700 mb-4 text-lg leading-relaxed">
                An artist of considerable range, Jenna the name taken by
                Melbourne-raised, Brooklyn-based Nick Murphy writes, performs
                and records all of his own music, giving it a warm, intimate
                feel with a solid groove structure. An artist of considerable
                range.
              </p>
              <a href="javascript:void(0);" class="font-normal text-purple-900">
                {" "}
                Show more{" "}
              </a>
            </div>
          </div>
        </div>
        {/* Project Section */}
        <div className="min-w-full">
          <div className="flex flex-col space-y-6 justify-center items-center mx-auto font-OpenSans bg-purple-600 p-8 rounded-xl">
            <div className="overflow-x-auto border-4 border-gray-900 rounded-lg">
              <table className="table">
                {/* head */}
                <thead>
                  <tr className="text-xl font-Montserrat text-purple-600 bg-gray-900">
                    <th></th>
                    <th>Project Name</th>
                    <th>Description</th>
                    <th>Rating</th>
                  </tr>
                </thead>
                <tbody className="text-lg font-Montserrat text-gray-900">
                  {/* rows */}
                  {data.map((data) => {
                    return (
                      <tr className="hover:bg-gray-900 hover:text-purple-600 duration-200">
                        <th className="font-Montserrat">{data.id}</th>
                        <td>{data.title}</td>
                        <td>{data.description}</td>
                        <td>{data.stars}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DashUser;
