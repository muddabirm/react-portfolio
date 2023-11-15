import {RouterProvider,createBrowserRouter  } from "react-router-dom";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Aboutme from './pages/aboutme.jsx'
import Projects from './pages/projects.jsx'
import Contact from "./pages/contact.jsx"
import Home from "./pages/home.jsx"

// router paths
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: '/about',
        element: <Aboutme />
      },
      {
        path:'/contact',
        element: <Contact />
      },
      {
        path:'/projects',
        element: <Projects />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router = {router}/>
)
