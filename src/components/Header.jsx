import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {FaFileCode} from 'react-icons/fa'

const Header = () => {
  return (
    <>
        <header>
            <Navbar expand='lg' bg='dark' variant='dark'> 
                <Navbar.Brand>Kevin Foughty's portfolio</Navbar.Brand>
                <Nav.Link><FaFileCode/></Nav.Link>
            </Navbar>
        </header>
    </>
  )
}

export default Header