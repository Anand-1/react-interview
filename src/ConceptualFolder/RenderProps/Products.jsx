import React, { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await fetch("https://dummyjson.com/products?limit=5");
        const products = await response.json();
        setProducts(products);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);
  if (loading) return <p>Loading ...</p>;
  if (error) return <p> Error : {error.message}</p>;

  return (
    <>
      <div>
        <h2>Products</h2>
        {products.products.map((product) => {
          return (
            <div>
              <img src={product.thumbnail} alt="" />
              <div>
                <h2>{product.title}</h2>
                <p>{product.discription}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
