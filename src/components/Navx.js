import React, { Component } from 'react';

class Navx extends Component {
  render() {
    return (
		<nav className="navbar navbar-expand-md navbar-dark fixed-top sticky-navigation">
            <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="ion-grid icon-sm"></span>
            </button>
            <a className="navbar-brand hero-heading page-scroll" href="#main">
            <img className="img-fluid mx-auto d-block" src="img/product3.png" height="50" width="100" alt="prduct"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#main">Product <span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#features">Features</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#scan">Scan now</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#download">Download</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#team">Team</a>
                    </li>
                    <li className="nav-item mr-3">
                        <a className="nav-link page-scroll" href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
		
    );
  }
}

export default Navx;