import React, { Component } from 'react';
import CardHeaderRow from './Card_Header_Row';

class HostInfox extends Component {
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
                        <div className="card bg-white hidden-sm-down wow fadeIn" id="datos">
                            <div className="card-header bg-white">
                                <CardHeaderRow name="IP analizada:"  data={ this.props.hostInfo.ip }/>
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