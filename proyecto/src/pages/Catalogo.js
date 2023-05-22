import React from 'react'

export const Catalogo = () => {
  return (
    <div>
      <div className='contenedor1'>
        <img src="./images/catalogue.png " height="80" width="80" className='imgT'/>
        <h1 className='titulo' >CATALOGOS</h1>
      </div>
      <br/>
      <div className='contenedor2'>
        <p>En el punto de las variedades SAS puedes encontrar línea hogar, escolar y piñateria.</p>
        <p>En la línea hogar: manejamos todo el menaje para el hogar, tenemos variedad de productos nacionales e importados, competimos en precio y calidad con grandes distribuidores.</p>
        <p>La línea escolar tiene gran variedad de artículos para todas las etapas escolares, desde jardín hasta posgrados, de todas las marcas nacionales e importadas; además siempre estamos a la modo es los últimos estilos juveniles y formales.</p>
        <p>Para línea piñateria tenemos todo para la celebración de tus hocaciones especiales, letreros, velas, bombas, servicio de helio, envolvemos regalos, preparamos bombas sorpresas para cualquier ocasión. </p>
        <p>Estamos dispuestos a atenderte y asesorarte con la mayor cordialidad, la mejor calidad y el mejor servicio. Te esperamos.</p>
      </div>
      <div className='contenedor3'>
        <img src="./images/label.png " height="80" width="80" className='imgT2'/>
        <h1 className='titulo2'>Presentacion de catalogo</h1>
      </div>
      <div className='wrapper'>
          <ul className='cont5'>
            <img src="./images/pinateria.png " height="200" width="300" /><br/><br/>
            <a href="./pdf" target='_blank' className='bt'><button>PDF-PIÑATERIA</button></a>
          </ul>
          <ul>
            <img src="./images/hogar.png " height="200" width="300" /><br/><br/>
            <a href="./pdf2" target='_blank' className='bt'><button>PDF-HOGAR </button></a>
          </ul>
          <ul>
            <img src="./images/escolar.png " height="200" width="300" /><br/><br/>
            <a href="./pdf2" target='_blank' className='bt'><button>PDF-ESCOLAR</button></a>
          </ul>
      </div>
    </div>
  )
}

