import React from 'react';
import ItemCard from '../../components/ItemCards';
import Navbar from '../../components/CustomerNavbar';
import Total from '../../components/Total';
import '../../css/Products.css';

function Products() {
  return (
    <div>
      <Navbar />
      <ItemCard />
      <footer>
        <Total />
      </footer>
    </div>
  );
}

export default Products;
