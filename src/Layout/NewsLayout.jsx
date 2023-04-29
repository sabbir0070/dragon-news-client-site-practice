import React from 'react';
import Header from '../Page/Share/Header/Header';
import Footer from '../Page/Share/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import RightSide from '../Page/Share/RightSide/RightSide';
import { Outlet } from 'react-router-dom';


const NewsLayout = () => {
  return (
    <div>
       <Header></Header>
      <Container>
        <Row>
        
          <Col md={9} lg={9}>
            <Outlet></Outlet>

          </Col>

          <Col md={3} lg={3}>
            <RightSide></RightSide>
          </Col>
        </Row>

      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;