import React from 'react'
import { Link } from 'react-router-dom'

export const Placeholders = () => {
  return (
    <div>
        
        <div className="card">
            <img src="./images/etrabajo.jpg" height="200" width="300" className="card-img-top" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">EL PUNTO DE LAS VARIEDADES</h5>
                <p className="card-text">Somos una empresa que apoya las madres cabezas de familia.</p>
                <Link href="#" className="btn btn-secondary"  to ="/empresa">EMPRESA</Link>
            </div>
            <img src="./images/etrabajo.jpg" height="200" width="300" className="card-img-top" alt="..."/>

            <div className="card-body">
                <h5 className="card-title">EL PUNTO DE LAS VARIEDADES</h5>
                <p className="card-text">Somos una empresa que apoya las madres cabezas de familia.</p>
                <Link href="#" className="btn btn-primary"  to ="/empresa">EMPRESA</Link>
            </div>
        </div>
        
    </div>
  )
}
