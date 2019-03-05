import { useState } from 'react';

export default function() {
  const [ count, setCount ] = useState(0);
  const add = () => setCount(count + 1);
  const take = () => setCount(count - 1);
  return { add, take, count } 
}