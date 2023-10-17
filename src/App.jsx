


import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './Components/Layout/Home/Home';
import Login from './Components/Layout/Login/Login';


import RouteWrap from './RouteWrap';
import Project from './Pages/Projects/Project';
import Team from './Pages/Team/Team';
import Dashboard from './Pages/Dashboard/Dashboard';
import ProjectUpload from './Pages/Projects/ProjectUpload';
import TeamHome from './Pages/Team/TeamHome';
import TeamJoin from './Pages/Team/TeamCreated';

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RouteWrap />, 
      children: [
        { index: true, element: <Home /> },
        { path: "Login", element: <Login /> },
        {path:"Project",element:<Project/>},
        // Team Chat
        // {path:'team',element:<Team/>},
        {path:'Dashboard',element:<Dashboard/>},
        {path:'Project/ProjectUpload',element:<ProjectUpload/>},
        {path:'Team',element:<TeamHome/>},
        {path:'teamJoin',element:<TeamJoin/>}
      ],
    },
  ]);

  
  
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
