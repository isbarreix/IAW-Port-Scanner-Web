import React, { Component } from 'react';

class Downloadx extends Component {
  render() {
    return (
        <section className="bg-orange pt-0" id="download">
            <div className="container">
                <div className="row d-md-flex text-center wow fadeIn">
                    <div className="col-md-6 offset-md-3 col-sm-10 offset-sm-1 col-xs-12">
                        <h5 className="text-primary">Download</h5>
                        <p className="mt-4">
							Descargá gratis SPYGLASS para escanear direcciones IP y puertos a la mayor velocidad posible. Accede al repositorio de la aplicación.
                        </p>
                        <p className="mt-5">
                            <a href="https://github.com/isbarreix/IAW-Port-Scanner" className="mr-2 page-scroll"><img src="img/repositorio.png" className="store-img" alt="androidownload"/></a>
                         
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Downloadx;