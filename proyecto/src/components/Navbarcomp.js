import React, { Component } from 'react'
import {Navbar, Nav, Form, FormControl} from  'react-bootstrap'
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Inicio from './Inicio';
import Empresa from './Empresa';
import Catalogo from './Catalogo';

export default class Navbarcomp extends Component {
  render() {
    return (
        <Router>
      <div>
        <Navbar bg="dark" variant='dark' expand="lg">
        <Navbar.Brand href="#Inicio">
        <img
              src=".\components\img\LOGO.png"
              width="150"
              height="30"
              className="d-inline-block align-top"
              alt=""
            /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/inicio"}>INICIO</Nav.Link>
            <Nav.Link as={Link} to={"/empresa"}>EMPRESA</Nav.Link>
            <Nav.Link as={Link} to={"/catalogo"}>CATALOGO</Nav.Link>
            <Form inline>
                <FormControl
                    type="text"
                    placeholder="search"
                    className='mr-sm-2'
                />
            </Form>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    <Routes>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/empresa' element={<Empresa/>}/>
        <Route path='/catalogo' element={<Catalogo/>}/>
    </Routes>  
    </div>
    </Router>
    )
  }
}
