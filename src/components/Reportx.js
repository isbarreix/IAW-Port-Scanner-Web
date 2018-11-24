import React, { Component } from 'react';
import CardHeaderRow from './Card_Header_Row';
import Tdpl from './Table_td_portlist';

// data
import { IP } from '../puertos.json';
import { inicial } from '../puertos.json';
import { final } from '../puertos.json';
import { cerrados } from '../puertos.json';
import { filtrados } from '../puertos.json';
import { abiertos } from '../puertos.json';

class Reportx extends Component {
  constructor() {
    super();
    this.state = {
      IP,
      inicial,
      final,
      cerrados,
      filtrados,
      abiertos
    }
  }
  
  
  render() {
      return (
        <section className="bg-light" id="Report">
            <div className="container">
                  <div className="row mb-3 hidden-sm-down wow fadeIn">
                    <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                        <h2 className="text-primary">Reporte</h2>
                        <p className="lead mt-5">
                        </p>
                  </div>
                  </div>
                <div className="card bg-white hidden-sm-down wow fadeIn">
                    <div className="card-header bg-white">
                        <CardHeaderRow name="IP analizada:"  data={ IP }/>
                        <CardHeaderRow name="Puerto Inicial:"  data={ inicial }/>
                        <CardHeaderRow name="Puerto Final:"  data={ final }/>
                        <CardHeaderRow name="Cantidad de puertos cerrados:"  data={ cerrados.cant }/>
                        <CardHeaderRow name="Cantidad de puertos filtrados:"  data={ filtrados.cant }/>
                        <CardHeaderRow name="Cantidad de puertos abiertos:"  data={ abiertos.cant }/>

                    </div>
                <div className="card-body">
                  <table className="table table-striped table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Port</th>
                      <th scope="col">Service</th>
                      <th scope="col">State</th>
                    </tr>
                  </thead>
                  <tbody>
                    <Tdpl open=  { abiertos }/>
                  </tbody>
                </table>
              </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Reportx;