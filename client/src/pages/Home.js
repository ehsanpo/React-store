import React, { Component } from 'react';
import API from '../data/Api'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: 1, devices : []};
		
	}
	async componentDidMount(){
		let Stores;
		let devices= [];
		let User_sessionObject = JSON.parse(localStorage.getItem('login'));

		if (User_sessionObject !== null) {
			try {
				Stores =  await API.getStores(User_sessionObject.data.user.username);
				let sessionObject = {
					data: {
						store:Stores
					}
				}
				localStorage.setItem('Stores', JSON.stringify(sessionObject));
			}
			catch (error) {
				alert(error)
			}
			for (var i = 0; i < Stores.length; i++) {
				
				let device = await API.getDevice(Stores[i].id);
				devices = devices.concat(device);
			}
			console.log(devices);
			this.setState({
				loading : 0,
				devices: devices
			});
		}
	}
	render() {
		return (
			<div>
				 {this.state.loading ? (
					'Loading..')
					 : (
						this.state.devices.map(function(device, i){
							return <div key={i}>{device.title} </div>;
						})
					)}
			</div>
		);
	}
}
export default Home;
