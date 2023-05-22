import React from 'react'
import { Link } from 'react-router-dom'

export const Placeholders = () => {
  return (
      <div>
        
        <div className="row g-0 bg-body-secondary position-relative">
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="./images/etrabajo.jpg" height="200" width="300" className="W-100" alt="..."/>

            <h5 className="mt-0">EL PUNTO DE LAS VARIEDADES</h5>
            <p>Somos una empresa que trabaja en innovacion y comercializacion</p><br/> 
            <Link href="#" className="btn btn-secondary"  to ="/empresa">EMPRESA</Link>

          </div>
          <div className="col-md-6 mb-md-0 p-md-4">
            <img src="./images/catalogo.png" height="200" width="300" className="W-100" alt="..."/>

            <h5 className="mt-0">EL PUNTO DE LAS VARIEDADES</h5>
            <p>Conoce nuestro portafolio. </p>
            <Link href="#" className="btn btn-secondary"  to ="/catalogo">CATALOGO</Link>

          </div>
        </div>      
      </div>
  )
}
