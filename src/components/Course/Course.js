import React from 'react';
import { Card } from 'react-bootstrap';
import './Course.css';

const Course = (props) => {
    // console.log(props.course);
    const { name, img, price, instructor, description} = props.course;
    return (
        <div className='cards-container'>
            <div className="">
              <Card style={{ width: '20rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                  <Card.Title>
                    {name}
                    <br />
                    instructor : {instructor}
                  </Card.Title>
                  <Card.Text>
                    {description}
                    <br />
                    <b>Price : ${price}</b>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
        </div>
    );
};

export default Course;