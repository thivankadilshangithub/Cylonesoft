import React from 'react'
import '../App.css';
import Button from 'react-bootstrap/Button';
import { Tab  } from "@mui/material";
import {NavLink} from 'react-router-dom';
import axios from 'axios';

const Item = ({ id, title, setItem }) => {
  
  const handleDelete = async() =>{
    try {
      await axios.delete(`https://dummyjson.com/products/${id}`,{
      method: 'DELETE',
      headers: {
        'Content-Type':'application/json'
      }
      });
      setItem((previousValue) => previousValue.filter(item => item.id !== id));
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className='container'>
        <div className='item' >
            <Tab LinkComponent={NavLink} to={`/products/${id}`} label={title}/> 
        </div>
        <div className='item'>
        <Button style={{marginLeft:'450px'}} variant="danger" onClick={handleDelete}>Delete</Button>
        </div>
    </div>
  );
}

export default Item;
   