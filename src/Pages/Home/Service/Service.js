import React from 'react';
import './Service.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';

const Service = ({ service }) => {
    // const {service} = props;
    const { _id, name, price, description, img } = service;
    return (
        <Card className='services-card my-5' style={{
            width: '18rem', marginLeft: '60px'
        }}>
            <Card.Img variant="top" src={img} />
            <Card.Body>
                <Card.Title className='text-info fw-bold'>{name}</Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
                <Card.Text>
                   <p className='fw-bold'>Price:  {price}</p>
                </Card.Text>
                <Link to={`/booking/${_id}`}>
                <button className="btn btn-warning">Rent {name.toLowerCase()}</button>
            </Link>
            </Card.Body>
        </Card>
    );
};

export default Service;