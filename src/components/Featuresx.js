import React, { Component } from 'react';

class Featuresx extends Component {
  render() {
    return (
		<section className="bg-light" id="features">
            <div className="container">
                <div className="row mb-3">
                    <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                        <h2 className="text-primary">Amazing Features</h2>
                        <p className="lead mt-4">
                            Spyglass tiene caracteristicas asombrantes <br/>wow the viewers.
                        </p>
                    </div>
                </div>
                <div className="row mt-5 text-center">
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-ios-eye-outline icon-md"></em>
                                </div>
                                <h6>Análisis equipo</h6>
                                <p>
                                  Comprueba si un equipo permite o no a una determinada aplicación utilizar un puerto.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-ios-pulse icon-md"></em>
                                </div>
                                <h6>Realiza pings</h6>
                                <p>
                                   Comprueba el estado de comunicación entre puertos de equipos con un solo click.
								</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-document icon-md"></em>
                                </div>
                                <h6>Imprime tu reporte</h6>
                                <p>
                                    Realiza un análisis de puertos y descargalo en tu ordenador en formato pdf. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-gear-a icon-md"></em>
                                </div>
                                <h6>Implementación</h6>
                                <p>
                                 Uso de framework libwebsock y sockets TCP no bloqueantes en C (linux).
								</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-ios-locked-outline icon-md"></em>
                                </div>
                                <h6>Seguridad</h6>
                                <p>
                                     Comprueba el trabajo de filtrado del firewall en tu dispositivo.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 wow fadeIn">
                        <div className="card">
                            <div className="card-body">
                                <div className="icon-box">
                                    <em className="ion-social-youtube icon-md"></em>
                                </div>
                                <h6>Tutoriales online</h6>
                                <p>
                                    Revisa los Spycast para hacer un uso indicado de la herramienta. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		
    );
  }
}

export default Featuresx;