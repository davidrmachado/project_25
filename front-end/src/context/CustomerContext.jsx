import { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/apiURL';

export const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const providerData = useMemo(() => (
    { cart, setCart, products, setProducts }), [products, cart]);

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

  return (
    <CustomerContext.Provider value={ providerData }>
      { children }
    </CustomerContext.Provider>
  );
}

CustomerProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CustomerProvider;
