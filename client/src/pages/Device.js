import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
} from 'react-router-dom';

class Device extends Component {
	constructor(props) {
		super(props);
		this.state = {loading: 1};
		
	}
	componentDidMount(){
		let sessionObject = JSON.parse(localStorage.getItem('Device'));
		const deviceId= this.props.match.params.device_id;
		if (sessionObject !== null) {
			if (sessionObject[this.props.match.params.id]  !== undefined) {

				const selectedDevice = sessionObject[this.props.match.params.id].filter(({id}) => id == deviceId);

				this.setState({
				loading : 0,
				device: selectedDevice[0]
				});
				console.log(selectedDevice[0])
			}
			else{
				this.setState({
					error : "cant find Device"
				});
			}
		}
	}
  render() {
    return (
 			<div>
 				<Link to={ "/site/" + this.props.match.params.id }>Back to Site</Link>
				 {!this.state.loading &&
				 	<h2> name = {this.state.device.title} </h2>
					}
					{this.state.error}
			</div>
    );
  }
}
export default Device;
