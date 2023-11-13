import React, { useEffect,useState } from 'react'
import axios from 'axios';

const ItemDetails = () => {
    const [item, setItems] = useState();
    const itemId = item.itemID
    const getAllDetails = async () => {
        const res = await axios.get(`https://dummyjson.com/products/${itemId}`)
        .catch((err) => console.log(err));
        const data = res.data
        setItems(data.products);
       
    } 
    console.log(item)
  

    useEffect(()=>{
        getAllDetails();
    },[])

  return (
    <div>
    <h1>Product Details</h1>
    {item && (
      <div>
        <h2>{item.title}</h2>
        <p>{item.description}</p>
      </div>
    )}
  </div>
  )
}

export default ItemDetails
