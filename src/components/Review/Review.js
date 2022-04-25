import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

const Review = () => {
    return (
        <div className='cards'>
            <div className="">
            <Card border="light" style={{ width: '18rem' }}>
                <Card.Header>lorem</Card.Header>
            <Card.Body>
                <Card.Title><p>Lorem, ipsum dolor.</p></Card.Title>
                <Card.Text>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia odit dicta</p>
                </Card.Text>
            </Card.Body>
            </Card>
            </div>
            <div className="">
            <Card border="light" style={{ width: '18rem' }}>
    <Card.Header>lorem</Card.Header>
    <Card.Body>
      <Card.Title><p>Lorem, ipsum dolor.</p></Card.Title>
      <Card.Text>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi mollitia odit dicta</p>
      </Card.Text>
    </Card.Body>
  </Card>
            </div>
        </div>
    );
};

export default Review;