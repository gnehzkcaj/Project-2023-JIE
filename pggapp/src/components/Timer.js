import { useState, useEffect } from 'react';

export default function Timer() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const key = setInterval(() => {
      setCounter(count => count + 1)
    }, 1000);

    return () => {
      clearInterval(key);
    }
  }, [])
  
  return (
    <p>{counter} seconds have passed.</p>
  );
}