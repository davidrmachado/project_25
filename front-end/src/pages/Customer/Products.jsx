import React from 'react';
import ItemCard from '../../components/ItemCards';
import Navbar from '../../components/CustomerNavbar';
import Total from '../../components/Total';

function Products() {
  return (
    <>
      <Navbar />
      <ItemCard />
      <Total />
    </>
  );
}

export default Products;
