import React from 'react';
import { useEffect , useState } from 'react';
import axios from "axios";
import Item from './Item';

const URL = "https://dummyjson.com/products";


const fetchhandler = async()=> {
    return await axios.get(URL).then((res)=> res.data);
}

const Items = () => {
    const [items , setItems] = useState();
    useEffect(()=> {
        fetchhandler().then((data) => setItems(data.items));
    } , []);
    console.log(items);
  return (
    <div>
     <ul>
         {items && 
         items.map((products,i)=>(
             <li className='products' key={i}>
                 <Item products={products} />
             </li>
         ))}
     </ul>
    </div>
  )
}

export default Items