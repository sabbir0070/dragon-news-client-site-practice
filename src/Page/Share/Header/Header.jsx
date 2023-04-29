import React from 'react';
import logo from '../../../assets/logo.png'
import { Button, Container} from 'react-bootstrap';
import moment from 'moment';
import Marquee from "react-fast-marquee";


const Header = () => {

  return (
    <Container className='mb-1'>
      <div className='text-center text-secondary mt-2'>
        <img src={logo} alt="" />
        <p>Journalism Without Fear or Favour</p>
        <h3>  {moment().format("dddd, MMMM D, YYYY")}    </h3>
      </div>
      <div className='d-flex py-3 px-3 border gap-3 bg-warning rounded '>
        <Button variant="danger">Danger</Button>
        <Marquee className='text-gray' speed={50} pauseOnHover={true}>
          I can be a React component, multiple React components, or just some text.
          I can be a React component, multiple React components, or just some text.
        </Marquee>
      </div>
     
    </Container>
  );
};

export default Header;