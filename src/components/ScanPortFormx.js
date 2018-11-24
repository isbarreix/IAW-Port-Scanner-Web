import React, { Component } from 'react';
import $ from 'jquery';

class ScanPortFormx extends Component {
	
  constructor () {
	  super();
	  this.state = {
		  ip: '127.0.0.1',
		  portInitial: '1',
		  portFinal: '1000',
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
    //console.log(value.ip);
    this.setState({
        'ip': ipinfo.ip
    }, () => {
        $('[name="portInitial"]').prop('value', ipinfo.ip);
            //console.log(this.state);
    })
  }
  
  handlePortsToScanChange(e) {
	var v = e.target.value;
	if(v === '2' || v ==='3') {
		this.setState({
			'portInitial': '0',
			'portFinal': '1000'
		}, () => {
            //console.log(this.state);
            $('[name="portInitial"]').prop('disabled', true);
            $('[name="portFinal"]').prop('disabled', true);
        })
	} else {
            $('[name="portInitial"]').prop('disabled', false);
            $('[name="portFinal"]').prop('disabled', false);
    }
  }
  handleSubmit(e) {
    // 	aca se deberia hacer un autoscroll a #Reporte como se tiene en los href.
	
	e.preventDefault();	// evita refrescar la pantalla al hacer submit
    console.log(this.state);	// De prueba, aqui se llamaria al server y se obtendria el .json
	
    /*this.props.onAddTodo(this.state); 
    this.setState({
      title: '',
      responsible: '',
      description: '',
      priority: 'low'
    });*/
  }
	  


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
            </div>
        </section>
    );
  }
}

export default ScanPortFormx;