import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from '../components/Item';
// import ItemDetails from './ItemDetails';

const URL = 'https://dummyjson.com/products';

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchHandler = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const res = await axios.get(URL, { headers });
      console.log(res)
      const data = res.data; 
      console.log(data)
      setItems(data.products);
      console.log('setdata',items)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <h1 className='productListh1'>Product List</h1>
      <ul>
        {items.map((item) => (
          <Item key={item.id} setItems={setItems} {...item} />
        ))}
      </ul>
    </div>
  );
};

export default Items;