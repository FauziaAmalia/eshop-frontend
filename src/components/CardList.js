import React from 'react';
import { Row,Col } from 'react-bootstrap';
import CardItem from './CardItem';
import image from '../assets/gaby.png';

const dummyProducts = [
    {
        id:0,
        title : "product A",
        price: 200000,
        description : "lorem ipsum",
        image: image,
    },
    {
        id:1,
        title : "product B",
        price: 200000,
        description : "lorem ipsum",
        image: image,
    },
    {
        id:3,
        title : "product C",
        price: 200000,
        description : "lorem ipsum",
        image: image,
    },
];

function CardList() {
  return (
   <Row xs={1} xl={4} sm={2} lg={3} md={3} >
   {dummyProducts.map((product) => (
     <Col key={product.id} >
     <CardItem item={product} />
     </Col>
   ))}
   </Row>
  )
}

export default CardList;