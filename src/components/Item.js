import React from 'react'
import { Button } from '@mui/material';

const Item = (props) => {
    const {price,Discount,rating,stock,brand,category,description } = props.products;

  return (
    <div style={{ display:'flex' , flexDirection:'column' }}>
      <h3>{price}</h3>
      <h3>{Discount}</h3>
      <h3>{rating}</h3>
      <h3>{stock}</h3>
      <h3>{brand}</h3>
      <h3>{category}</h3>
      <h3>{description}</h3>
      <Button sx={{mt: 'auto'}}>Delete</Button>
    </div>
  )
}

export default Item;