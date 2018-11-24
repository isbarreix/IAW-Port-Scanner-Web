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
  render() {
    return (
		<div className="App">
			<Navx/>
			<Headerx/>
			<Featuresx/>
			<ScanPortFormx/>
			<Reportx/>
			<Downloadx/>
			<Teamx/>
			<Contactx/>
			<Footerx/>		
		</div>
    );
  }
}

export default App;
