import React from 'react';
import { Card } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, price, instructor, description} = props.service;
    return (
        <div className='cards-container'>
            <div style={{float: "left"}}>
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

export default Service;