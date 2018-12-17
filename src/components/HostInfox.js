import React, { Component } from 'react';
import CardHeaderRow from './Card_Header_Row';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf'


class HostInfox extends Component {

    constructor() {
        super();    
        this.handlePrintPDF  = this.handlePrintPDF.bind(this);
     }

    handlePrintPDF(e){  
        html2canvas(document.querySelector("#extra")).then(canvas =>{
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF({
              orientation: 'landscape',
            });
            pdf.addImage(imgData, 'PNG', 0, 0);
            pdf.save("Report.pdf"); 
        });
      }  

    render() {
        if(this.props.hostInfo !== undefined && this.props.extraInfo !== undefined){
            return (
                <section className="bg-light" id="DataExtra">
                    <div className="container">
                        <div className="row mb-3 hidden-sm-down wow fadeIn">
                        <div className="col-md-6 col-sm-8 mx-auto text-center wow fadeIn">
                            <h2 className="text-primary">Información extra</h2>
                            <p className="lead mt-5"></p>
                        </div>
                        </div>
                        <div className="card bg-white hidden-sm-down wow fadeIn" id="extra">
                            <div className="card-header bg-white">
                                <CardHeaderRow name="IP analizada:"  data={ this.props.hostInfo.ip }/>
                                <CardHeaderRow name="Estado:" data={ 'up' }/>
                                <CardHeaderRow name="Tipo:"  data={ this.props.extraInfo.type }/>
                                <CardHeaderRow name="HostName:"  data={ this.props.hostInfo.hostname }/>
                                <CardHeaderRow name="Ciudad:"  data={ this.props.hostInfo.city }/>
                                <CardHeaderRow name="Región:"  data={ this.props.hostInfo.region }/>
                                <CardHeaderRow name="País:"  data={ this.props.extraInfo.country_name + "("+this.props.hostInfo.country+")" }/>
                                <CardHeaderRow name="Bandera:"  data={ this.props.extraInfo.location.country_flag } flag={true}/>
                                <CardHeaderRow name="Continente:"  data={ this.props.extraInfo.continent_name }/>
                                <CardHeaderRow name="Ubicación (Latitud/Longitud):"  data={ this.props.hostInfo.loc }/>
                                <CardHeaderRow name="Código Postal:"  data={ this.props.hostInfo.postal }/>
                                <CardHeaderRow name="Prefijo:"  data={ "+"+this.props.extraInfo.location.calling_code }/>
                                <CardHeaderRow name="Organización:"  data={ this.props.hostInfo.org }/>
                            </div>
                        </div>
                        <div className="container">
                            <div className="row mb-2">
                                <div className="col-md-6 col-sm-8 mx-auto text-center">
                                    <img src="img/pdf.svg" alt="pdf" height="75" width="75" className="store-img rounded-circle"/>
                                </div>
                            </div>
                        </div>
                        <div className="row mb-2">
                                    <div className="col-md-6 col-sm-8 mx-auto text-center">
                                    <button className="btn btn-outline-danger btn-sm" onClick={this.handlePrintPDF}>
                                        Descargar PDF
                                    </button>
                                </div>
                        </div>
                    </div>
                </section>
            )
        }
        else{
            return(
                <section className="bg-light" id="DataExtra"></section>
            );
        }
    };
}  

export default HostInfox;