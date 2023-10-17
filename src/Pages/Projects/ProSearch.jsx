import React from 'react'
import {data} from './ProData'
import { useState } from 'react'
import Fade from 'react-reveal/Fade';
function ProSearch() {
 const [search,setSearch] = useState("");
  return (
    <div className='bg-gray-900 p-24'>
    <div id='searchProject' className="container max-w-6xl mx-auto items-center space-y-12 font-OpenSans">
    <Fade top distance="10%" duration={1500}>
      <div  className='items-center p-6'>
        <h1 className='text-5xl font-Montserrat text-purple-600'> Search for Projects</h1>
      </div>
      {/* Search bar */}
      <form>
        <label
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            
          </div>
          <input
          onChange={(e) => setSearch(e.target.value)}
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-800 rounded-lg bg-purple-600 focus:ring-purple-500 focus:border-purple-500 placeholder:text-gray-900"
            placeholder="Search Projects by Name..."
            required
          />
          <button
            type="submit"
            className="text-purple-600 absolute right-2.5 bottom-2.5 bg-gray-900 hover:opacity-80 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
          >
            Search
          </button>
        </div>
      </form>

      {/* table */}
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-purple-500 ">
          <thead className="text-xs text-gray-900 uppercase bg-purple-600 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project name
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Category
                  <a href="#">
                    
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  City
                  <a href="#">
                    
                  </a>
                </div>
              </th>
              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">
                  Date of creation
                  <a href="#">
                    
                  </a>
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
          {data.filter((value) => {
            return search.toLowerCase() === '' ? value : value.Project.toLowerCase().includes(search)
          }).slice(0,20).map((value) => {
    return (
      <tr className="bg-gray-900 border border-purple-500" key={value.id}>
        <th
          scope="row"
          className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          
        >
          {value.Project}
        </th>
        <td className="px-6 py-4">{value.Category}</td>
        <td className="px-6 py-4">{value.City}</td>
        <td className="px-6 py-4">{value.data}</td>
      </tr>
    );
})}


          </tbody>
        </table>
      </div>
      </Fade>
    </div>
    </div>
  );
}

export default ProSearch