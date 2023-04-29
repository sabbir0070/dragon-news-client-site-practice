import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProviders';
import { updateProfile } from 'firebase/auth';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [user, setUser] = useState(null)
const [accepted, setAccepted] = useState(false)

  const { createUser, updateProfileAndPhoto, emailVerification } = useContext(AuthContext);


  const handleRegister = (event) => {

    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const photo = form.photo.value;
    const password = form.password.value;
    setError('')
    setSuccess('')

    createUser(email, password)
      .then(result => {
        const loggedUser = result.user;
        console.log(loggedUser)
        setUser(loggedUser);
        setSuccess('Create Account successfully')
        updateUserData(loggedUser, name, photo)
        emailVerificationUser(loggedUser)
      })
      .catch(error => {
        setError(error.message)
        console.log(error.message)
      })

    const updateUserData = (user, name, photo) => {
      updateProfileAndPhoto(user, name, photo)
        .then(() => {
          console.log('user name update')
        })
        .catch(error => {
          console.log(error.message)
          setError(error.message)
        })
    }
    // Email verification user
    const emailVerificationUser = (user) => {
      emailVerification(user)
        .then(() => {
          alert('Please verification your Email')
        })
        .catch(error => {
          setError(error.message)
        })

    }

  }
const handleAccepted = (event) =>{
console.log(event.target.checked)
setAccepted(event.target.checked)
}


  return (
    <Container className='w-75 border m-5 p-3 mx-auto'>
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control type="text" name='photo' placeholder="Enter Your Photo Url" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
            onClick={handleAccepted}
            type="checkbox"
            name='accept'
            label={ <>Accept <Link to="/terms">Term and Condition</Link> </> }  />
        </Form.Group>
        <Button variant="primary" disabled={!accepted} type="submit">
          Register
        </Button> 
        <br />
        <Form.Text className='text-danger'>
          <Link to="/login">All Ready Have An Account? Please Register</Link>
        </Form.Text> <br />
        <Form.Text className='text-danger'>
          {error}
        </Form.Text> <br />
        <Form.Text className='text-success'>
          {success}
        </Form.Text>
      </Form>
    </Container>
  );
};

export default Register;