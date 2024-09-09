import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import { Outlet } from 'react-router'

function App() {

  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App
