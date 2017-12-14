import React, { Component } from 'react';
import { connect } from 'react-redux';
import API from '../data/Api'
import { Authenticated } from '../store/Store';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {clicks: 0};
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount(){

  }
  async handleClick(){


  }
  StoreAuth(response){
       this.props.Authenticated({ value: 1 });
   }
  render() {
    return (
      <div className="App">
         <h1> Login</h1>
			<input ref="username" type="text" placeholder="Usernme"/>
			<input ref="password" type="text" placeholder="Password"/>
			<button onClick={this.handleClick}>Login</button>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  login: state.login,
});

const mapDispatchToProps = {
  Authenticated
};

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);

export default LoginContainer;
