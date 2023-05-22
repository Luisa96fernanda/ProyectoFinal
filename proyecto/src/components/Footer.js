import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div>
        <footer className="text-white py-3 bg-dark">
        <div className='container'>
            <nav className='row'>
                <ul className='col-12 col-md-3 list-unstyled '>
                    <li className='font-weight-bold mb-2'>EMPRESA</li>
                    <img src='./LOGO.PNG' height='40' width='250'/>
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='font-weight-bold mb-2'>Realizado por:</li>
                    <li className='font-weight-bold mb-2'> Luisa Fernanda Galvis Rivillas</li>
                </ul>
                
                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='font-weight-bold mb-2'>SIGUENOS</li>
                    <li className='d-flex justify-content-between'>
                        <i className="bi bi-facebook"></i>
                        <i class="bi bi-twitter"></i>
                        <i class="bi bi-instagram"></i>
                    </li>
                </ul>

                <ul className='col-12 col-md-3 list-unstyled'>
                    <li className='font-weight-bold mb-2'>CONTACTANOS</li>
                    <li className='font-weight-bold mb-2'> 000-00-00</li>
                </ul>
                

            </nav>
        </div>
        </footer>
           
    </div>
  )
}
