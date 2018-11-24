import React, { Component } from 'react';

class Footerx extends Component {
  render() {
    return (
 	<section className="bg-footer" id="connect">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3 col-sm-8 offset-sm-2 col-xs-12 text-center wow fadeIn">
                        <h1>SPYGLASS</h1>
                        <p className="mt-4">
                            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><em className="ion-social-twitter text-twitter-alt icon-sm mr-3"></em></a>
                            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer"><em className="ion-social-github text-facebook-alt icon-sm mr-3"></em></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><em className="ion-social-linkedin text-linkedin-alt icon-sm mr-3"></em></a>
                            <a href="https://plus.google.com/" target="_blank" rel="noopener noreferrer"><em className="ion-social-googleplus text-google-alt icon-sm mr-3"></em></a>
                        </p>
                        <p className="pt-2 text-muted">
                            &copy; 2018 Template by <a href="https://twitter.com/attacomsian">@attacomsian</a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
  }
}

export default Footerx;