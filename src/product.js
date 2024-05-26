import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const fetchProducts = async (page) => {
    try {
      const response = await axios.get(`https://catchyfiveapi.appxes-erp.in/Product/GetAllWithImage`, {
        params: {
          OrganizationId: 3,
          pageNo: page,
          pageSize: pageSize,
        },
      });
      setProducts(response.data.products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProducts(currentPage);
  }, [currentPage]);

  const nextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const [cart, setCart] = useState({});

  const addToCart = (productId, quantity) => {
    setCart((prev) => {
      const newCart = { ...prev };
      if (!newCart[productId]) {
        newCart[productId] = 0;
      }
      newCart[productId] += quantity;
      if (newCart[productId] <= 0) {
        delete newCart[productId];
      }
      return newCart;
    });
  };

  const displayCart = () => {
    return Object.entries(cart).map(([productId, quantity]) => (
      <div key={productId}>Product ID: {productId}, Quantity: {quantity}</div>
    ));
  };

  return (
    <div>
      <h2>Products</h2>
      {products.map((product) => (
        <div key={product.id}>
          {product.name} - {product.price}
          <button onClick={() => addToCart(product.id, 1)}>+</button>
          <button onClick={() => addToCart(product.id, -1)}>-</button>
        </div>
      ))}
      <button onClick={prevPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
      <h2>Cart</h2>
      <div>{displayCart()}</div>
    </div>
  );
};

export default Products;
