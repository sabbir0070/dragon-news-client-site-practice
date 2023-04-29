import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Terms = () => {
  return (
    <Container className='text-center  text-danger '>
      <h2 className='text-center fw-bold text-danger'>Our terms and conditions</h2>
      <p className='text-success fs-2'> Huno miya vlo hoye jao.vlo hoyle tho r taka poisha lage just eine sign up koro,auto vlo hoye jaba tmi,hahaha </p>
<p className='fs-2 fw-bold' > Go to back  <Link to="/register">Register</Link> </p>


    </Container>
  );
};

export default Terms;