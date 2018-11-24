import React, { Component } from 'react';

class Contactx extends Component {
  render() {
    return (
        <section className="bg-texture-collage p-0" id="contact">
            <div className="container">
                <div className="row d-md-flex text-white text-center wow fadeIn">
                    <div className="col-sm-4 p-5">
                        <p><em className="ion-ios-telephone-outline icon-md"></em></p>
                        <p className="lead">+291 15 687535</p>
                    </div>
                    <div className="col-sm-4 p-5">
                        <p><em className="ion-ios-email-outline icon-md"></em></p>
                        <p className="lead">info@spyglass.com</p>
                    </div>
                    <div className="col-sm-4 p-5">
                        <p><em className="ion-ios-location-outline icon-md"></em></p>
                        <p className="lead">Bahía Blanca, Argentina</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Contactx;