import React from 'react'

export const Catalogo = () => {
  return (
    <div>
      <div className='contenedor1'>
        <img src="./images/catalogue.png " height="80" width="80" className='imgT'/>
        <h1 className='titulo'>CATALOGOS</h1>
      </div>
      <br/>
      <div className='contenedor2'>
        <p>En este tipo de publicidad, sus catálogos impresos están en un primer plano.</p>
        <p>En muchos casos son imprescindibles los folletos y catálogos impresos para presentar la totalidad de sus productos y servicios, lo que nos ha llevado a ofrecer también presentaciones de catálogos.</p>
        <p>Combine las ventajas de la red con la forma habitual de mostrar su gama de productos, presentándola de forma compacta y clara.</p>
        <p>Independientemente de si prefiere ofrecer su catálogo en formato PDF para descarga o enviarlo por correo postal, gracias a la generación de leads en línea, tiene acceso a los datos de contacto de los interesados de forma inmediata.</p>
        <p>Esta forma de publicidad también incluye tres referencias a su producto en el boletín informativo. La combinación de presentación en la red y marketing por correo electrónico garantiza una óptima comunicación con su grupo objetivo.</p>
      </div>
      <div className='contenedor3'>
        <img src="./images/label.png " height="80" width="80" className='imgT2'/>
        <h1 className='titulo2'>Presentacion de catalogo</h1>
      </div>
      <div className='ct1'>
        <img src="./images/pinateria.png " height="200" width="300" /><br/><br/>
        <a href="./pdf" target='_blank' className='bt'><button>PIÑATERIA</button></a>
      </div>
      
      <div className='ct2'>
        <img src="./images/hogar.png " height="200" width="300"/><br/> <br/>
        <a href="./pdf2" target='_blank' className='bt'><button>HOGAR</button></a>
      </div>
      
    </div>
  )
}

