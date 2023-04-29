import React from 'react';
import editors1 from '../../../assets/editorsInsight1.png'
import editors2 from '../../../assets/editorsInsight2.png'
import editors3 from '../../../assets/editorsInsight3.png'
import { Card, Col, Row } from 'react-bootstrap';


const EditorsInsight = () => {
  return (
     <Row xs={1}  lg={1} className="g-4">

        <Col>
          <Card>
            <Card.Img variant="top" src={editors1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editors2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Img variant="top" src={editors3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

    </Row>
  );
};

export default EditorsInsight;