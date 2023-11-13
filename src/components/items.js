import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Item from './Item';

const URL = 'https://dummyjson.com/products';

const Items = () => {
  const [items, setItems] = useState([]);

  const fetchHandler = async () => {
    try {
      const headers = {
        'Content-Type': 'application/json',
      };
      const res = await axios.get(URL, { headers });
      const data = res.data;
      setItems(data.products);
      console.log('data',data)
      console.log('data here', data);
      console.log('Set Item', items);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchHandler();
  }, []);

  return (
    <div>
      <ul>
        {items &&
          items.map((product, id) => (
            <div key={id}>
              <Item product={product} />
            </div>
          ))}
      </ul>
    </div>
  );
};

export default Items;