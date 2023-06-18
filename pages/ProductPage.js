import React from 'react';
import { useState ,useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CommandeForm from '../components/CommandeForm';


const ProductPage = ({ match }) => {
    let productId = match.params.id;
    let [product, setProduct] = useState(null);
    

    useEffect(() => {
      getProduct();

    }, [productId]);
  
    let getProduct = async () => {
      let response = await fetch(`/products/${productId}/`);
      let Data = await response.json();
      console.log('data',Data);
      setProduct(Data);
    };

  return (
    <div>
    <Carousel className='carousel'>
    {product?.images.map((image, idx) => (
      <Carousel.Item key={idx} className='carousel-item'>
        <img
          className="d-block w-100"
          src={image.image}
          alt="First slide"
        />
      </Carousel.Item>
      ))}
    </Carousel>




      <div className='product-description'>
      <h1>{product?.title}</h1>
      <h4>{product?.description}</h4>
      </div>
      
      
     <CommandeForm productId={productId}></CommandeForm>
     
      
    </div>
  )
}

export default ProductPage;
