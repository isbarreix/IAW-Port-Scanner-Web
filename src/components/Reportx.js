import React, { Component } from 'react';
import CardHeaderRow from './Card_Header_Row';
import Tdpl from './Table_td_portlist';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'
import $ from 'jquery';


class Reportx extends Component {
  constructor() {
    super();

    this.handlePrintPDF  = this.handlePrintPDF.bind(this);
    this.handleGetMoreInfo  = this.handleGetMoreInfo.bind(this);

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

  handleGetMoreInfo(e){
      var direccion = 'https://ipinfo.io/'+this.props.host.IP+'/json';
      const extraInfo = $.ajax({ 
        url: direccion, 
        async: false
        }).responseJSON;

      var d = 'http://api.ipstack.com/'+this.props.host.IP+'?access_key=d15c1d6c863e4095975759d1304ab15e';
      const moreInfo = $.ajax({ 
        url: d, 
        async: false
        }).responseJSON;
        console.log(moreInfo);
        this.props.onSpyGlass(extraInfo, moreInfo);
        
        $('html, body').animate({
          scrollTop: $("#DataExtra").offset().top
        }, 1500);
            
  }

  render() {
      return (
        <section className="bg-light" id="Report">
            <div className="container">
                <div className="row mb-3 hidden-sm-down wow fadeIn">
                  <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                      <h2 className="text-primary">Reporte</h2>
                      <p className="lead mt-5"></p>
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
                            <Tdpl open= { this.props.host.abiertos }/>
                          </tbody>
                        </table>
                    </div>
                  </div>
            </div>
            <div className="container">
              <div className="row mb-2">
                <div className="col-md-6 col-sm-8 mx-auto text-center">
                    <img src="img/pdf.svg" alt="pdf" height="75" width="75" className="store-img rounded-circle"/>
                </div>
                <div className="col-md-6 col-sm-8 mx-auto text-center">
                    <img src="icon.png" alt="pdf" height="100" width="100" className="store-img rounded-circle"/>
                </div>
              </div>
              <div className="row mb-2">
                <div className="col-md-6 col-sm-8 mx-auto text-center">
                  <button className="btn btn-outline-danger btn-sm" onClick={this.handlePrintPDF}>
                      Descargar PDF
                  </button>
                </div>
                <div className="col-md-6 col-sm-8 mx-auto text-center">
                  <button className="btn btn-outline-warning btn-sm" onClick={this.handleGetMoreInfo}>
                     Más información
                  </button>
                </div>
              </div>
            </div>
        </section>
    );
  }
}

export default Reportx;