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
import HostInfox from './components/HostInfox'

class App extends Component {
	constructor(){
		super();
		this.state = {
			host:'',
			info:'',
			extraInfo:'',
			showReport:'',
			showInfo:'',
		}
		this.handleOnScan = this.handleOnScan.bind(this);
		this.handleOnSpyGlass = this.handleOnSpyGlass.bind(this);
	}

	handleOnScan(scannedHost){
		this.setState({
				host: scannedHost,
				showReport: true,
		})

	}

	handleOnSpyGlass(hostInfo, moreInfo){
		this.setState({
			info: hostInfo,
			extraInfo: moreInfo,
			showInfo: true,
		});
	}

  render() {
    return (
		<div className="App">
			<Navx/>
			<Headerx/>
			<Featuresx/>
			<ScanPortFormx onScan = {this.handleOnScan}/>
			{ this.state.showReport?<Reportx host = {this.state.host} onSpyGlass = {this.handleOnSpyGlass}/>:null}
			{ this.state.showInfo?<HostInfox hostInfo = {this.state.info} extraInfo = {this.state.extraInfo}/> : <HostInfox/> }
			<Downloadx/>
			<Teamx/>
			<Contactx/>
			<Footerx/>	
		</div>
    );
  }
}

export default App;
