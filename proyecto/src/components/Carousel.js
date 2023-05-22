import React from 'react'

export const Carousel = () => {
  return (
    <div>
        <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
                <img src="./images/pinateria.png " height="500" width="150" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block ">
                    <h1 className='text-black'>TODO PARA TU FIESTA</h1>
                    <h5 className='text-black'>Variedad en productos para tus eventos especiales </h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src="./images/escolar.png " height="500" width="150" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className='text-black'>TODO PARA TU UTILIDAD</h1>
                    <h5 className='text-black'> Variedad en utiles esolares de multiples reflerencias</h5>
                </div>
            </div>
            <div className="carousel-item">
                <img src="./images/hogar.png " height="500" width="150" className="d-block w-100" alt="..."/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 className='text-black'>TODO PARA TU HOGAR</h1>
                    <h5 className='text-black'>Variedad de articulos de hogar ideal para tu casa o regalo </h5>
                </div>
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
        </div>
    </div>
  )
}
