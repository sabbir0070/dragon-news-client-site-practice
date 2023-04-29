import React, { useState } from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import QZone from '../QZone/QZone';
import bg from '../../../assets/bg.png';
import { useContext } from 'react';
import { AuthContext } from '../../../Providers/AuthProviders';

const RightSide = () => {
const [user, setUser] = useState(null)

const {googleSignIn,githubSignIn} = useContext(AuthContext);
const handleGoogleSignIn = () =>{
googleSignIn()
.then(result=>{
const loggedUser = result.user;
setUser(loggedUser);
console.log(loggedUser)
})
.catch(error=>{
// console.log(error.message)
})
}
  
const handleGithubSignIn = () =>{
githubSignIn()
.then(result=>{
console.log(result.user)
})
.catch(error=>{
console.log(error.message)
})
}


  return (
    <div>
      <h2>Login With</h2>
      <div>
        <div className='d-block mb-3'>
          <Button onClick={handleGoogleSignIn} className='mb-3 d-block' variant="outline-primary">Login with google</Button>
          <Button onClick={handleGithubSignIn} variant="outline-secondary">Login with github</Button>
        </div>

        <h2>Find us on</h2>
        <ListGroup className='gap-3'>
          <ListGroup.Item disabled> <FaFacebook></FaFacebook> facebook</ListGroup.Item>
          <ListGroup.Item className='border'> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
          <ListGroup.Item className='border'> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className='text-center'>
        <img className='mt-3 text-center' src={bg} alt="" />
      </div>


    </div>
  );
};

export default RightSide;