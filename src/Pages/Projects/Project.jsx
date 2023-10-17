import React, { useEffect, useState } from 'react'
import ProSearch from './ProSearch'
import ProHome from './ProHome'
import ProTop from './ProTop'
import { fireStore } from '../../Firebase-config';
import { collection,orderBy,getDocs ,getFirestore } from 'firebase/firestore';


function Project() {
  const [project,setProject] = useState([]);
  const fireStore = getFirestore();
  const fetchProjects = async () => {
    const req = await getDocs(orderBy(collection(fireStore, "projects"), "time", "desc"));
    const tempProject = req.docs.map((project) => ({...project.data(), id: project.id}));
    console.log(tempProject);
  }
  
  useEffect(() => {
    fetchProjects();
  },[])
  return (
    <>
    <ProHome/>
    <hr className='bg-purple-600 h-2 border-2 border-purple-600 w-full'></hr>
    <ProTop/>
    <hr className='bg-purple-600 h-2 border-2 border-purple-600 w-full'></hr>
    <ProSearch/>
    </>
      
    
  )
}

export default Project