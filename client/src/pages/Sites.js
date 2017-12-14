import React, { Component } from 'react';
import API from '../data/Api'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

class Site extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: 1, devices : []};
		
	}
	componentDidMount(){
		var sessionObject = JSON.parse(localStorage.getItem('Device'));
		if (sessionObject !== null) {
			if (sessionObject[this.props.match.params.id]  !== undefined) {

				this.setState({
				loading : 0,
					devices: sessionObject[this.props.match.params.id]
				});
			}
			else{
				this.setState({
					error : "cant find Site"
				});
			}
		}
	}
	render() {
		const pageid = this.props.match.params.id

		return (
			<div className="stores" >
				 {this.state.loading ? (
					'Loading..')
					 : (
						this.state.devices.map(function(device, i){
							
							return <div key={i}>	
								<Link to={ "/site/" + pageid +"/device/" + device.id}>{device.title} <span>{device.description}</span> </Link>
							</div>;
						})
					)}
					{this.state.error}
			</div>
		);
	}
}
export default Site;
