import React, { Component } from 'react';

class Teamx extends Component {
  render() {
    return (
        <section className="bg-white" id="team">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-sm-8 mx-auto text-center">
                        <h2 className="text-primary">Our Team</h2>
                        <p className="lead pt-3">
                            Meet our awesome team.
                        </p>
                    </div>
                </div>
                <div className="row d-md-flex mt-5 text-center">
                    <div className="team col-sm-3 mt-2 wow fadeInLeft">
                        <img src="img/team-1.jpg" alt="Male" className="img-team img-fluid rounded-circle"/>
                        <h5>Barreix Iñaki</h5>
                        <p>CEO Spyglass</p>
                    </div>
                    <div className="team col-sm-3 mt-2 wow fadeIn">
                        <img src="img/team-4.jpg" alt="Male" className="img-team img-fluid rounded-circle"/>
                        <h5>Kathrine Kaif</h5>
                        <p>Marketing Head</p>
                    </div>
                    <div className="team col-sm-3 mt-2 wow fadeIn">
                        <img src="img/team-2.jpg" alt="Male" className="img-team img-fluid rounded-circle"/>
                        <h5>Brandon Lee</h5>
                        <p>Lead Developer</p>
                    </div>
                    <div className="team col-sm-3 mt-2 wow fadeInRight">
                        <img src="img/team-3.jpg" alt="Male" className="img-team img-fluid rounded-circle"/>
                        <h5>Leguizamón Marcos</h5>
                        <p>CEO Spyglass</p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Teamx;