import React, { Component } from 'react';
import './App.css';

import Navx from './components/Navx';
import Headerx from './components/Headerx';
import Featuresx from './components/Featuresx';
import Teamx from './components/Teamx';
import Footerx from './components/Footerx';
import Contactx from './components/Contactx';
import ScanPortFormx from './components/ScanPortFormx';
import Reportx from './components/Reportx';
import Downloadx from './components/Downloadx';

class App extends Component {
	constructor(){
		super();
		this.state = {
			host:''
		}
		this.handleOnScan = this.handleOnScan.bind(this);
	}

	handleOnScan(scannedHost){
		this.setState({
				host: scannedHost
		})

	}

  render() {
    return (
		<div className="App">
			<Navx/>
			<Headerx/>
			<Featuresx/>
			<ScanPortFormx onScan = {this.handleOnScan}/>
			<Reportx host = {this.state.host}/>
			<Downloadx/>
			<Teamx/>
			<Contactx/>
			<Footerx/>	
		</div>
    );
  }
}

export default App;
