import {RouterProvider,createBrowserRouter  } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aboutme from './pages/aboutme.jsx'
//import Navbar from './components/navbar.jsx'
import Projects from './pages/projects.jsx'
import Contact from "./pages/contact.jsx";


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        path: '/projects',
        element: <Projects />
      },
      {
        path: '/about',
        element: <Aboutme />
      },
      {
        path:'/contact',
        element: <Contact />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
