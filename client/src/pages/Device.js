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
		let selectedDevice;
		if (sessionObject !== null) {
			if (sessionObject[this.props.match.params.id]  !== undefined) {

				selectedDevice = sessionObject[this.props.match.params.id].filter(({id}) => id == deviceId);
				const result = selectedDevice[0];
				this.setState({
				loading : 0,
				device: result
				});

				
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

				 {this.state.loading ? (
					'Loading..')
					 : (
						
						<div className="desc" >
							<h2> {this.state.device.title} </h2>
							<span>{this.state.device.model} </span>
							<span>{this.state.device.version} </span>	
							<span>{this.state.device.description} </span>	
						</div>

					)}
			</div>
    );
  }
}
export default Device;
