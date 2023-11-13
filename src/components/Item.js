import React from 'react'
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import axios from 'axios';


const Item = (props) => {
    const {itemId,Price,Discount,Rating,Stock,Brand,Category } = props.data;

   const deleteHandler = async() => {
     await axios.delete(`https://dummyjson.com/products/${itemId}`).then((res)=>res.data);
   } 

  return (
    <div className='card'>
      <h3>{Price}</h3>
      <h3>{Discount}</h3>
      <h3>{Rating}</h3>
      <h3>{Stock}</h3>
      <h3>{Brand}</h3>
      <h3>{Category}</h3>
      
      <Button  onClick={deleteHandler} LinkComponent={Link} to={`/books/${itemId}`} sx={{mt: 'auto'}}>Delete</Button>
    </div>
  )
}

export default Item;