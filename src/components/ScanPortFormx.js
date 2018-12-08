import React, { Component } from 'react';
import $ from 'jquery';
import Loadingx from './Loadingx';


class ScanPortFormx extends Component {	
  constructor () {
	  super();
	  this.state = {
		  ip: '200.49.224.150',
		  portInitial: '75',
			portFinal: '85',
			loading: false,
			serverOff:''
	  };
  
	  // linkeamos handleInput al componente
	  this.handleInputChange  = this.handleInputChange.bind(this);
	  this.handleUseMyIP = this.handleUseMyIP.bind(this);
	  this.handlePortsToScanChange = this.handlePortsToScanChange.bind(this);
	  this.handleSubmit = this.handleSubmit.bind(this);
	}
	
	
  handleInputChange(e) {
	  const {	value, name	} = e.target;
	  this.setState({
		  [name]: value 
	  });

  }
	
  handleUseMyIP(e) {
  	e.preventDefault();
      var ipinfo= $.ajax({ 
      url: 'https://ipinfo.io/json', 
      async: false
     }).responseJSON;
    this.setState({
        'ip': ipinfo.ip
    }, () => {
        $('[name="portInitial"]').prop('value', ipinfo.ip);
    })
  }
  
  handlePortsToScanChange(e) {
	var v = e.target.value;
	if(v === '2' || v ==='3') {
		this.setState({
			'portInitial': '0',
			'portFinal': '1000'
		}, () => {
            $('[name="portInitial"]').prop('disabled', true);
            $('[name="portFinal"]').prop('disabled', true);
        })
	} else {
            $('[name="portInitial"]').prop('disabled', false);
            $('[name="portFinal"]').prop('disabled', false);
    }
	}

  handleSubmit(e) {
		e.preventDefault();	// evita refrescar la pantalla al hacer submit
		/** 
		 * Creo el socket y le envío el mensaje
		*/
		var socket = new WebSocket('ws://127.0.0.1:4565');
        socket.onerror =  () => {
		console.log("Error al conectar con el servidor");
		};    
    
          
          /**
           * Inicializo el mensaje IP - Rango
           */

          this.host = this.state.ip;
          this.host = this.host.concat("-");
          if(this.state.portInitial < this.state.portFinal) {
              this.pinicio = this.state.portInitial;console.log("Normal");
              this.fin = this.state.portFinal;
          } else {
              this.pinicio = this.state.portFinal;console.log("Invertidos");
              this.fin = this.state.portInitial;
          }

          this.host = this.host.concat(this.pinicio);
          this.host = this.host.concat(":");
          var mensaje = this.host.concat(this.fin);		


          
          
          socket.onopen = () => {
        	  if(socket.readyState === 1) {
				/**
				 * Si el socket está listo, muestro la ventana de carga
				 * y le envio el mensaje al socket
				 */
				 this.setState({
					loading: true
					});

				socket.send(mensaje);
			  }
		  };
		  
          var json_puertos;
          socket.onmessage = (event) => {
              json_puertos = JSON.parse(event.data);
              this.props.onScan(json_puertos);

              /**
               * Quito el loading
               */
              this.setState({
                  loading: false
              });

              //scroll al reporte cuando ya se pudo obtener el json
              $('html, body').animate({
                  scrollTop: $("#Report").offset().top
              }, 1500);
          };

          socket.onclose = function (event) {
              console.log("WebSocket is closed now.");
          };
	};
	
	  


  render() {
    return (
        <section className="bg-white" id="scan">
        <div className="container">
                <div className="row mb-3 hidden-sm-down wow fadeIn">
                 	<div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                        <h2 className="text-primary">Realizar Análisis</h2>
                        <p className="lead mt-5">
						Escáner de puertos, muestra que puertos están abiertos, filtrados o cerrados, en su (o algún otro) equipo y de que servicios brindan.
						Se puede introducir cualquier dirección IP, así como de dominio alguno.
                        </p>
                    </div>
                </div>
			    <div className="card bg-texture-collage p-0 hidden-sm-down wow fadeIn">
				   <form onSubmit={	this.handleSubmit	} className="card-body text-light">
					  <div className="form-group">
						<label className="lead">Introduzca su dirección IP o dominio</label>
						<input
						  type="text"
						  name="ip"
						  className="form-control"
						  value=  {	this.state.ip	}
						  onChange={	this.handleInputChange	}
						  placeholder="195.144.107.198"
						  />
						<a href="#scan" className="text-warning" onClick={	this.handleUseMyIP	}>Usar mi dirección IP</a>
					  </div>
					  <div className="form-group">
						<label className="lead">Puertos a escanear</label>
						<select
							name="portsToScan"
							className="form-control"
						    onChange={	this.handlePortsToScanChange	}
	  					>
						    <option value="1">Especificar puertos</option>
						    <option value="2">Todos los puertos</option>
						    <option value="3">Puertos más comunes</option>
						</select>
					  </div>
					  <div className="form-row">
						<div className="form-group col-md-4">
						<label className="lead">Puerto inicial</label>
						<input
						  type="number"
                          min="1"
                          max="999"
						  name="portInitial"
						  className="form-control"
		      			  value= {	this.state.portInitial	}
              			  onChange= {	this.handleInputChange	}
						  placeholder="1"
						  />
						</div>
						<div className="form-group col-md-4">
						<label className="lead">Puerto final</label>
						<input
						  type="number"
                          min="2"
                          max="1000"
						  name="portFinal"
						  className="form-control"
		      			  value= {	this.state.portFinal	}
              			  onChange= {	this.handleInputChange	}
						  placeholder="1000"
						  />
						</div>
					  </div>
					  <button type="submit" className="btn btn-light"> 
						Comenzar análisis
					  </button>
					</form>
						<img className="center img-fluid overlay wow bounceInRight" src="img/form2.png" alt="form"/>
				</div>
						{
								this.state.loading &&	 <Loadingx time = {this.state.portFinal - this.state.portInitial}/>
								
						}
            </div>
        </section>
    );
  }
}

export default ScanPortFormx;
