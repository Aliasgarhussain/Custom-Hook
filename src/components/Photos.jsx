import useFetch from '../hooks/useFetch';

function Products() {
    const { products, isLoading, err } = useFetch('https://api.escuelajs.co/api/v1/products?limit=300');
  
    if (isLoading) {
        return <div className="loading">Loading...</div>;
    }
  
    if (err) {
        return <div>Error: {err}</div>;
    }
  
    return (
        <div className="products">
            <h1>Products</h1>
            <div className="product-list">
                {products && products.map((product) => (
                  <div key={product.id} className="product-card">
                    <img src={product.images[0]} alt={product.title} />
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                  </div>
                ))}
            </div>
        </div>
    );
}

export default Products;
