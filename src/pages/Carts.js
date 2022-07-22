import React from 'react';
import { Container } from 'react-bootstrap';
import CartItem from '../components/CartItem';
import image from '../assets/gaby.png';
import { Navigate } from 'react-router-dom';

const dummyProducts = [
    {
        id:0,
        title : "product A",
        price: 200000,
        description : "lorem ipsum",
        image: image,
        quantity: 1,
    },
    {
        id:1,
        title : "product B",
        price: 200000,
        description : "lorem ipsum",
        image: image,
        quantity: 1,
    },
    {
        id:3,
        title : "product C",
        price: 200000,
        description : "lorem ipsum",
        image: image,
        quantity: 1,
    },
];

function Carts({isLogedIn}) {

    if(!isLogedIn){
        return(
            <Navigate to='/auth/login' replace/>
        );
    }

  return (
   <Container>
   {dummyProducts.map((product) => (
    <CartItem key={product.id} item={product} />
   ))}
   </Container>
  );
}

export default Carts;