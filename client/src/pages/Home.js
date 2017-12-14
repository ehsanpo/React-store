import React, { Component } from 'react';
import API from '../data/Api'
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: 1, sites : []};
		
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
				devices[Stores[i].id] = device;
			}
			localStorage.setItem('Device', JSON.stringify(devices));
			this.setState({
				loading : 0,
				sites: Stores
			});
		}
	}

	render() {
		return (
			<div className="stores">
				 {this.state.loading ? (
					'Loading..')
					 : (
						this.state.sites.map(function(site, i){
							return <div key={i} >	
								<Link to={ "/site/"+ site.id}>{site.title}</Link>
							</div>;
						})
					)}
			</div>
		);
	}
}
export default Home;
