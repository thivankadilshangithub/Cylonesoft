import React, { useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import "../App.css"

const ItemDetails = () => {
    const [item, setItems] = useState();
    const {productId} = useParams();
    console.log('product id',productId)

    console.log('Item by id',item)

    useEffect(()=>{
      const getAllDetails = async () => {
        const res = await axios.get(`https://dummyjson.com/products/${productId}`);
        const data = res.data
        console.log("data",data)
        setItems(data);
    } 
        getAllDetails();
    },[productId])
    console.log("Item",item)
  return (
    <div>
    <h1 className='divin'>Product Details</h1>
    {item && (
      <div className='product_details'>
        <div className='divin'>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p>Price: ${item.price}</p>
        <p>Discount: {item.discountPercentage}%</p>
        <p>Rating: {item.rating}</p>
        <p>Stock: {item.stock}</p>
        <p>Brand: {item.brand}</p>
        <p>Price: {item.category}</p>
        </div>
    
      </div>
    )}
  </div>
  )
}

export default ItemDetails