import { useState, useEffect, createContext, useMemo } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/apiURL';

export const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await api.get('/customer/products');
      response.data.forEach((product) => {
        product.quantity = 0;
      });
      setProducts(response.data);
    };

    getProducts();
  }, []);

  const productsStateVariables = useMemo(() => ({ products, setProducts }), [products]);

  return (
    <CustomerContext.Provider value={ productsStateVariables }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;
