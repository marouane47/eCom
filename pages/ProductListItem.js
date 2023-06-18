import React from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

const ProductListItem = () => {
    let [products, setProducts] = useState([]);

   
 
    

    useEffect(() => {
        getProducts();
      }, []);


    let getProducts = async () => {
        let response = await fetch('/products/');
        let data = await response.json();
        console.log("DATA", data);
       
        setProducts(data);
       
      
       
      };
   

  return (
     

    <Row xs={1} md={3} className="g-4">
      {products.map((product, idx) => (
        <Link to={`product/${product.id}`} className='product-link'>
        <Col key={idx} className='product-grid'>
          <Card className='card'>
           
            <Card.Img src={`${product.images[0]?.image}`} alt={`Image ${1}`} />
           
            
            <Card.Body className='card-body'>
              <Card.Title className='card-titel'>{product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.category}</Card.Subtitle>
            </Card.Body>
            <p className="price">{product.price} DA</p>
            <p className="encient-price">{1+product.price} DA</p>
            <button className='buy-now'>Commande ici</button>
          </Card>
        </Col>
        </Link>
      ))}
    </Row>

    


  
  )
}

export default ProductListItem
