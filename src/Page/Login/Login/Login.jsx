import React, { useState } from 'react';
import { useContext } from 'react';
import { Button, Container, Form, Toast } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { useRef } from 'react';
// import { sendEmailVerification, sendPasswordResetEmail } from 'firebase/auth';


const Login = () => {
  const [user, setUser] = useState(null)
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const { signInUser, resetPassword } = useContext(AuthContext);
  const emailRef = useRef();
   const navigate = useNavigate();
const location = useLocation();
let from = location?.state?.from?.pathname || '/category/0';
console.log(location)

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(email, password)
    setError('')
    setSuccess('')
    signInUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser)
        setSuccess("login successfull")
      navigate(from,{replace:true});

      })
      .catch(error => {
        setError(error.message)
      })
  }

  // Reset password 
  const handleResetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      alert('Please provide your email address to reset password')
      return;
    }

    resetPassword(email)
      .then(() => {
        alert('Please reset your password')
       return;      
})
      .catch(error => {
        setError(error.message)
      })

  }

  return (

    <Container className='  w-75  border m-5 p-3  mx-auto'>
      <h2>Please Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" ref={emailRef} name='email' placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name='password' placeholder="Password" required />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
       
        <Form.Text className='text-danger mt-3 d-block'>
          <Link to="/register">Don't Have An Account? Please Register</Link>
        </Form.Text> 
       
 <button onClick={handleResetPassword} className='btn btn-link text-warning'>Reset Password</button>
        <Form.Text className='text-danger d-block mb-0 mt-2'>
          {error}
        </Form.Text> <br />
        <Form.Text className='  text-danger'>
          {success}
        </Form.Text>
      </Form>
    </Container>

  );
};

export default Login;