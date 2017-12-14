import axios from 'axios';
import { store } from '../store/Store';
import  SHA256 from 'crypto-js/sha256'

let API ={};
API.url = "http://localhost:3000/" 

API.login =  (username,password) => {

	const hashed_password = API.hashPassword(password);
	const url = API.url + 'users?username=' + username + '&password=' + hashed_password;

	return new Promise(function(resolve, reject) {
		axios({
			method: 'get',
			url: url,
			
		}).then( async (response) => {
			if (response.data.length) {
				resolve(response.data);
			}
			else{
				reject('Username or password is wrong');
			}

	  })
	  .catch(error => {
	   	reject(error);
	  });


	});

}

API.hashPassword = (password) =>{
	return SHA256(password);

}
export default API;