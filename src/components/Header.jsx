import React from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import {FaFileCode, FaPhone, FaBriefcase} from 'react-icons/fa'

const Header = () => {
  return (
    <>
        <header>
            <Navbar expand='lg' bg='light' variant='light' > 
            <Navbar.Toggle aria-controls='basic-navbar-nav'/>
                <Navbar.Brand>Kevin Foughty's portfolio</Navbar.Brand>
                <Nav className='ms-auto'>
                  <Nav.Link> <FaPhone/> Contact</Nav.Link>
                  <Nav.Link> <FaBriefcase/> Work</Nav.Link>
                  <Nav.Link><FaFileCode/>Projects</Nav.Link>
                </Nav>
            </Navbar>
        </header>
    </>
  )
}

export default Header