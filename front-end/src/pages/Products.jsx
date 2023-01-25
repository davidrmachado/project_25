import React, { useEffect, useState } from 'react';
import ItemCard from '../components/ItemCard';
import Navbar from '../components/Navbar';
import Total from '../components/Total';
import api from '../utils/APILink';

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/customer/products');
      setProducts(response.data);
    };

    getProducts();
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <>
      <Navbar />
      <ItemCard />
      <Total />
    </>
  );
}

export default Products;
