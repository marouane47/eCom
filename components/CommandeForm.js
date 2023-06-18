import React from 'react'
import { FloatingLabel ,Form } from 'react-bootstrap';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const CommandeForm = ({productId}) => {
    const [commande, setCommande] = useState({
        name: '',
        phoneNumber:'',
        wilaya:'',
        baladiya:'',
        quantity:1,
      });

      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await fetch(`/products/${productId}/commande/`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(commande),
          });
    
          // Handle the success response
          const data = await response.json();
          console.log(data);
        } catch (error) {
          // Handle the error
          console.error(error);
        }
      };


      const handleChange = (e) => {
        const { name, value } = e.target;
        setCommande((prevState) => ({
          ...prevState,
          [name]: value,
        }));
        console.log(commande);
      };

  return (
    <div className='form-commande'>
     <h4>remplire le formulaire pour commande :</h4>  
     <Form onSubmit={handleSubmit}>
     <FloatingLabel controlId="floatingName" label="name" className='input' >
        <Form.Control type="name" placeholder="Name" name="name" value={commande.name} onChange={handleChange}/>
      </FloatingLabel>
      <FloatingLabel controlId="floatingNumiro" label="Numiro" className='input' >
        <Form.Control type="numiro" placeholder="Numiro" name="phoneNumber" value={commande.phoneNumber} onChange={handleChange}/>
      </FloatingLabel>
      <Form.Select aria-label="wilaya" className='input' name="wilaya" value={commande.wilaya} onChange={handleChange}>
      <option>chose your wilaya</option>
      <option value="Milla">Milla</option>
      <option value="Canstantine">Constantine</option>
      <option value="ALger">Alger</option>
      </Form.Select>
      <FloatingLabel controlId="floatingAdresse" label="baladiya ..." className='input'>
        <Form.Control type="adresse" placeholder="baladiya ..." name="baladiya" value={commande.baladiya} onChange={handleChange} />
      </FloatingLabel>
      <Form.Select aria-label="wilaya" className='input' name="quantity" value={commande.quantity} onChange={handleChange}>
      <option>Quantity</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      </Form.Select>
      <button className='buy-now' type='submit'><Link to='/commande' className='product-link'>commande now!</Link></button>
     </Form> 
     </div>
  )
}

export default CommandeForm
