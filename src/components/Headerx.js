import React, { Component } from 'react';


class Headerx extends Component {
  render() {
    return (
        <section className="bg-texture hero" id="main">
            <div className="container">
                <div className="row d-md-flex brand">
                    <div className="col-md-6 hidden-sm-down wow fadeIn">
                        <img className="img-fluid mx-auto d-block" src="img/product.png" alt="prduct"/>
                    </div>
                    <div className="col-md-6 col-sm-12 text-white wow fadeIn">
                        <h2 className="pt-4">SPYGLASS <b className="text-primary-light">TCP Port Scanner</b> and services</h2>
                        <p className="mt-5">
                           Muchas aplicaciones, juegos, programas y servicios requieren una serie de puertos específicos para funcionar correctamente.
						   Analiza puertos con Spyglass, se puede introducir cualquier dirección IP, así como de dominio alguno.
                        </p>
                        <p className="mt-5">
                            <a href="#scan" className="btn btn-primary mr-2 mb-2 page-scroll">Scan now</a>
                            <a href="#download" className="btn btn-white mb-2 page-scroll">Descarga la versión escritorio</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Headerx;