import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Tab  } from "@mui/material";
import {NavLink} from 'react-router-dom';

const Item = ({ id, title, description, price, discountPercentage, rating, stock, brand, category, thumbnail, images }) => {
  return (
    <div className='container'>
        <div className='item' >
            <Tab LinkComponent={NavLink} to={`/products/${id}`} label={title}/> 
        </div>
        <div className='item'>
        <Button style={{marginLeft:'450px'}} variant="danger">Delete</Button>
        </div>
    </div>
  );
}

export default Item;

       /*<h4>{id}</h4>
      <h3>{price}</h3>
      <h3>{discountPercentage}</h3>
      <h3>{rating}</h3>
      <h3>{stock}</h3>
      <h3>{brand}</h3>
      <h3>{category}</h3>
      <h3>{description}</h3> */