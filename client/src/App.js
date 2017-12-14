import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';


import Login from './pages/Login';
import Home from './pages/Home';
import Device from './pages/Device';

import PrivateRoute from './components/Privateroute'

class App extends Component {
	render() {
		return (
		<div className="App">
			<nav>
				<Link to="/login">Login</Link>
				<Link to="/home">Home</Link>
				<Link to="/device">Device</Link>
			</nav>
			<div>
				<Route path="/login" component={Login}/>
				<Route path="/device" component={Device}/>
				<PrivateRoute path="/home" component={Home}/>
			</div>
		</div>
		);
	}
}

export default App;
