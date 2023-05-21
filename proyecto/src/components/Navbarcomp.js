import React from 'react'
import { Link } from 'react-router-dom'

export const Navbarcomp = () => {
  return (
    <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link to='/inicio'>
                        <img src='./LOGO.PNG' height='40' width='250'/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mx-auto" >
                            <li className="nav-item">
                                <Link className="nav-link active" to='/inicio'>INICIO</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="/empresa">EMPRESA</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to ="/catalogo">CATALOGO</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                </nav>
        </div>
  )
}




