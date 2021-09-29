import React from "react";
import { Car } from "../../types/Car";
import { Row, Col, Container } from 'react-bootstrap';
import CarCard from "./_carCard";
import { useQuery } from '@apollo/client';
import { GET_CAR_LIST } from '../../apollo/queries';

interface CarList {
    carList?: Array<Car>;
}

const CarDisplayList: React.FC<CarList> = () => {

const { loading, error, data } = useQuery<any>(GET_CAR_LIST);

if (loading) return <p>Loading...</p>;
if (error) return <p>Error :(</p>;

  if (data) {
    const carList = data?.cars || [];

    return (
      <Container fluid style={{margin: '0.8rem 0rem 5rem 0rem'}}>
        <Row xs={1} md={3} className="g-2">
          {carList?.length > 0 &&
            carList.map((car: JSX.IntrinsicAttributes & Car & { children?: React.ReactNode; }) => (
              <Col>
                    <CarCard {...car}/>
              </Col>  
            ))}
        </Row>
      </Container>
    );
  }
  return null;
};
export default CarDisplayList;