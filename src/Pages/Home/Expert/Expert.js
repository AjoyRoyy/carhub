import React from 'react';
import { Card } from 'react-bootstrap';
import './Expert.css';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <Card className='services-card my-5' style={{
            width: '18rem', marginLeft: '60px'
        }}>
            <Card.Img variant="top" className='' src={img} />
            <Card.Body>
                <Card.Title className='text-info fw-bold'>{name}</Card.Title>
                <Card.Text>
                    {expertize}
                </Card.Text>
            </Card.Body>
        </Card>
         /* <div className="col-lg-4 col-sm-6 col-12">
            <img src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{expertize}</h5>
        </div>  */
    );
};

export default Expert;