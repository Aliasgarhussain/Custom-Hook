import { useState, useEffect } from 'react';

function useFetch(url) {
    const [products, setProducts] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [err, setErr] = useState(null);
  
    useEffect(() => {
        setIsLoading(true);
        
        fetch(url)
            .then(res => res.json())
            .then(result => {
              console.log(result);
              setProducts(result);
              setIsLoading(false);
            })
            .catch(error => {
              setErr(error.message);
              setIsLoading(false);
            });
    }, [url]);
  
    return { products, isLoading, err };
}

export default useFetch;
