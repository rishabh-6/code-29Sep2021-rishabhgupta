const express = require('express');
const cors = require('cors');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// GraphQL schema
var schema = buildSchema(`
    type Query {
        car(id: Int!): Car
        cars(type: String): [Car]
    },
    type Car {
        id: Int
        type: String
        brand: String
        name: String
        make: String
        colour: String
        price: String
        image: String
        url: String
    }
`);
var carList = [
    {
        id: 10001,
        type: 'SUV',
        brand: 'Hyundai',
        name: 'Creta SX',
        make: 'Jan 2021',
        colour: 'Typhoon Silver',
        price: '$20000',
        image: 'https://imgd.aeplcdn.com/0x0/n/cw/ec/41564/hyundai-creta-right-front-three-quarter9.jpeg',
        url: 'https://www.hyundai.com/in/en/find-a-car/creta/highlights'
    },
    {
        id: 10002,
        type: 'Sedan',
        brand: 'BMW',
        name: 'X7',
        make: 'Feb 2021',
        colour: 'Black',
        price: '$90000',
        image: 'https://imgd.aeplcdn.com/1056x594/cw/ec/28286/BMW-X7-Right-Front-Three-Quarter-164106.jpg?wm=1&q=85',
        url: 'https://www.carwale.com/bmw-cars/x7/'
    },
    {
        id: 10003,
        type: 'Sedan',
        brand: 'Audi',
        name: 'a8 ',
        make: 'Mar 2021',
        colour: 'Red Metallic',
        price: '$150000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/9ujissa_1479912.jpg?q=85&wm=1',
        url: 'https://www.carwale.com/audi-cars/a8-l/colours/seville-red-metallic-7721/'
    },
    {
        id: 10004,
        type: 'SUV',
        brand: 'Kia',
        name: 'Seltos',
        make: 'Feb 2021',
        colour: 'Intense Red',
        price: '$770000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/f3fgcta_1487947.jpg?q=85&wm=1',
        url: 'https://www.carwale.com/kia-cars/seltos/colours/intense-red-aurora-black-pearl-8088/'
    },
    {
        id: 10005,
        type: 'Hatchback',
        brand: 'Kia',
        name: 'Sonet',
        make: 'Apr 2021',
        colour: 'Beige Gold',
        price: '$190000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/p3tgcta_1487965.jpg?q=85&wm=1',
        url: 'https://www.carwale.com/kia-cars/sonet/colours/beige-gold-8098/'
    },
    {
        id: 10006,
        type: 'SUV',
        brand: 'Jeep',
        name: 'Compass',
        make: 'May 2021',
        colour: 'Galaxy Blue',
        price: '$6700000',
        image: 'https://imgd.aeplcdn.com/1056x594/n/9eeaqta_1503935.jpg?q=85&wm=1',
        url: 'https://www.carwale.com/jeep-cars/compass/colours/galaxy-blue-8331/'
    },
]
const getCar = function(args) { 
    var id = args.id;
    return carList.filter(car => {
        return car.id == id;
    })[0];
}
const getCars = function(args) {
    if (args.type) {
        var type = args.type;
        return carList.filter(car => car.type === type);
    } else {
        return carList;
    }
}
const root = {
    car: getCar,
    cars: getCars
};

// Create an express server and a GraphQL endpoint
const app = express();

var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

app.use('/graphql', graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true
}));
app.listen(4000, () => console.log('Car Dealership Server Now Running On localhost:4000/graphql'));