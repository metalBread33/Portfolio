import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.jsx'

//pages
import Contact from './pages/Contact.jsx'
import Home from './pages/Home.jsx'
import Work from './pages/Work.jsx'
import Projects from './pages/Projects.jsx'

const router = createBrowserRouter (
  createRoutesFromElements (
    <Route path='/' element={<App/>} >
      <Route path='/' index={true} element={<Home/>} />

      <Route path='/contact' element={<Contact/>}/>
      <Route path='/history' element={<Work />} />
      <Route path='/projects' element={<Projects />} />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
