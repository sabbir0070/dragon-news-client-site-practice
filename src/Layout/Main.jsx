import React from 'react';
import Header from '../Page/Share/Header/Header';
import Footer from '../Page/Share/Header/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Left from '../Page/Share/LeftSide/LeftSide';
import RightSide from '../Page/Share/RightSide/RightSide';
import { Outlet } from 'react-router-dom';
import EditorsInsight from '../Page/News/EditorsInsight/EditorsInsight';
import NavigationBar from '../Page/Share/NavigationBar/NavigationBar';

const Main = () => {
  return (
    <div>
      <Header></Header>
<NavigationBar></NavigationBar>
      <Container>
        <Row>
          <Col md={3} lg={3}>
            <Left></Left>
<EditorsInsight></EditorsInsight>
          </Col>

          <Col md={6} lg={6}>
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

export default Main;