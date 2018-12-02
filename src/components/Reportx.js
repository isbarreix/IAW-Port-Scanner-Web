import React, { Component } from 'react';
import CardHeaderRow from './Card_Header_Row';
import Tdpl from './Table_td_portlist';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


class Reportx extends Component {
  constructor() {
    super();
    this.state = {
      IP:'',
      inicial:'',
      final:'',
      cerrados:'',
      filtrados:'',
      abiertos:'',
    };

    this.handlePrintPDF  = this.handlePrintPDF.bind(this);

  }
  
  handlePrintPDF(e){
    
    html2canvas(document.querySelector("#datos")).then(canvas =>{
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF({
          orientation: 'landscape'});
        pdf.addImage(imgData, 'PNG', 0, 0);
        pdf.save(this.props.host.IP+" - Report.pdf"); 
    });
  
  }    

  render() {
    if(this.props.host.cerrados !== undefined){
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
                <div className="card bg-white hidden-sm-down wow fadeIn" id="datos">
                    <div className="card-header bg-white">
                        <CardHeaderRow name="IP analizada:"  data={ this.props.host.IP }/>
                        <CardHeaderRow name="Puerto Inicial:"  data={ this.props.host.inicial }/>
                        <CardHeaderRow name="Puerto Final:"  data={ this.props.host.final }/>
                        <CardHeaderRow name="Cantidad de puertos cerrados:"  data={ this.props.host.cerrados.cant }/>
                        <CardHeaderRow name="Cantidad de puertos filtrados:"  data={ this.props.host.filtrados.cant }/>
                        <CardHeaderRow name="Cantidad de puertos abiertos:"  data={ this.props.host.abiertos.cant }/>
                        
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
                  <Tdpl open=  { this.props.host.abiertos }/>
                   </tbody>
                </table>
              </div>
              </div>
            </div>
            <div className="container">
              <div className="row mb-2">
                <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                    <img src="img/pdf.svg" alt="pdf" height="56" width="56" className="store-img rounded-circle"/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                  <button className="btn btn-outline-danger btn-sm" onClick={this.handlePrintPDF}>
                      Descargar Reporte como PDF
                  </button>
                </div>
              </div>
            </div>
        </section>
    );
    }
    else{
      return(
        <section className="bg-light" id="Report"></section>
      );
    }
  }
}

export default Reportx;