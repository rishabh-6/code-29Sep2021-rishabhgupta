import { gql } from '@apollo/client';

export const GET_CAR_LIST = gql`
query getAllCars($type: String) {
    cars(type: $type) {
        id
        type
        brand
        name
        make
        colour
        price
        image
        url
    }
}
`;
