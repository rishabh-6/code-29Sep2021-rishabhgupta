import React from "react";
import { Car } from '../../types/Car';
import { Card, Table } from 'react-bootstrap';


const CarCard: React.FC<Car> = ({ id, type, name, brand, make, colour, price, image, url }) => {
  return (
       <Card key={id}> 
          <Card.Img variant="top" src={image} />
          <Card.Body>
            <Card.Title>{brand} {name}</Card.Title>
            <Card.Text>
            <Table striped bordered hover>
              <tbody>
                <tr>
                  <td>Type</td>
                  <td>{type}</td>
                </tr>
                <tr>
                  <td>Make</td>
                  <td>{make}</td>
                </tr>
                <tr>
                  <td>Colour</td>
                  <td>{colour}</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>{price}</td>
                </tr>
              </tbody>
            </Table>
            </Card.Text>
          </Card.Body>
        </Card>
  );
};
export default CarCard;