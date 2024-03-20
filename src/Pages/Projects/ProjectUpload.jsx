import { list } from "postcss";
import React, { useRef, useState } from "react";

function ProjectUpload() {
  const [file, setFile] = useState(null);
  const [projectDetails,setProjectDetails] = useState({
    title:"",
    description:"",
    no:""
  })

  const inputRef = useRef();
  const handleDragOver = (event) => {
    event.preventDefault();
  };
  const handleDrop = (event) => {
    event.preventDefault();
    setFile(event.dataTransfer.files);
  };
  // send files to the server
  const handleChange = (e) => {
    e.persist();
    setProjectDetails((oldState) => {
      return {
        ...oldState,
        [e.target.name] : e.target.value,
      };
    });
  };
   console.log(projectDetails);
   
  if (file)
    return (
      <div className="w-full bg-black">
        <div  className="flex flex-col justify-center items-center mx-auto max-w-6xl bg-purple-600 p-12 font-OpenSans">
          <ul className="m-12">
            {Array.from(file).map((file, idx) => (
              <li className="text-5xl font-Montserrat text-gray-900" key={idx}>
                {file.name}
              </li>
            ))}
          </ul>
          <div className="flex flex-col justify-center items-center space-y-6 bg-gray-900 p-8 rounded-lg">
            <div className="flex flex-col justify-center items-center space-y-6">
              {/* project name */}
              <div className="flex flex-col justify-center space-y-3" onChange={handleChange}>
                <label>Enter Your Project Name</label>
                <input
                  className="input"
                  type="text"
                  placeholder="Project Name"
                  name="title"
                  value={projectDetails.title}
                />
              </div>
{/* project no */}
              <div className="flex flex-col justify-center space-y-3" onChange={handleChange}>
                <label>Enter the project No</label>
                <input
                  className="input"
                  type="number"
                  placeholder="Project No"
                  name="no"
                  value={projectDetails.no}
                />
              </div>
              {/* text area */}
              <div className="flex flex-col justify-center space-y-3" onChange={handleChange}>
                <label>Enter the project Description</label>
                <textarea
                  className="input"
                  type="text"
                  placeholder="Description"
                  name="description"
                  value={projectDetails.description}
                />
              </div>
            </div>
            <div className="flex flex-row justify-center items-center space-x-12">

           
            <button className="btn bg-red-800" onClick={() => setFile(null)}>
              Cancel
            </button>
            <button className="btn btn-primary">
              Upload
            </button>
            </div>
          </div>
        </div>
      </div>
    );

  return (
    <div className="bg-black w-full">
      <div className="py-24 px-48">
        {!file && (
          <div
            className="flex flex-col justify-center items-center mx-auto border-4 border-purple-600 p-24  space-y-6"
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <h1 className="text-4xl font-Montserrat gradient-text">
              Drag and Drop Files to Upload
            </h1>
            <h1>Or</h1>
            <input
              type="file"
              multiple
              onChange={(event) => setFile(event.target.files)}
              hidden
              ref={inputRef}
            />
            <button
              className="btn bg-purple-600 text-white"
              onClick={() => inputRef.current.click()}
            >
              Select Files
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProjectUpload;
