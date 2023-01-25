import React from 'react';
import ProductsCard from './productsCards';
import arrayProducts from '../productsCard/array.Products';

function Products() {
  return (
    <>
     <h1>Produtcs</h1>
     <div> 
      { arrayProducts.map((productItem) => (
        <ProductsCard
         key={ productItem.id }
         product={ productItem }
       />))
      }   
     </div>
    </> 
  );
}

export default Products;