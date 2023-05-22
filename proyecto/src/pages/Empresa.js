import React from 'react'

export const Empresa = () => {
  return (
    <div>
      <div className='contenedor1'>
        <img src="./LOGO.png " className='imgT'/>
      </div>
      <div className='contenedor4'>
        -
      </div>
      <div>
        <img src="./images/etrabajo.jpg " className='imgT'/>
      </div>
      <div className='contenedor4'>
        -
      </div>
      <div className='contenedor5'>
          <ul>
              <img src="./images/mission.png " height="200" width="150" /><br/><br/>
              <p>Satisfacer las necesidades de nuestros clientes con artículos de hogar, piñateria y temporadaras (como lo es escolar, madres, amor y amistad y navidad ); buscando competir en el mercado con calidad y servicio</p>
          </ul>
          <ul>
              <img src="./images/vision.png " height="200" width="150" /><br/><br/>
              <p>En el año 2020, tuvimos un liderazgo en el concepto de importacion basados en innovación, calidad, distribuccion y posicionamiento de la empresa el punto de las variedades S.A.S, a través de una amplia red de tiendas las cuales cumplen 13 años y vendedores por todo el pais.</p>
          </ul>
          <ul>
              <img src="./images/valores.png " height="200" width="150" /><br/><br/>
                Integridad<br/>
                Respeto<br/>
                Responsabilidad<br/>
                Compromiso<br/>
                Pasión por el trabajo<br/>
          </ul>
        </div>
        <div className='contenedor1'>
        <img src="./images/logemp.png " height="80" width="80" className='imgT'/>
        <h1 className='titulo' >TIENDAS</h1>
      </div>
        <div>
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./images/loscolores.png " height="500" width="150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/sanjavier.png " height="500" width="150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/santalucia.png " height="500" width="150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/lacastellana.png " height="500" width="150" className="d-block w-100" alt="..."/>
            </div>
            <div className="carousel-item">
                <img src="./images/castilla.png " height="500" width="150" className="d-block w-100" alt="..."/>
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div><br/><br/>
        
    </div>
          

    </div>
  )
}

