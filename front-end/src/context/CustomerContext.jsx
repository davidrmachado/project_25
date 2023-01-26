import { useState, useEffect, useMemo, createContext } from 'react';
import PropTypes from 'prop-types';
import api from '../utils/apiURL';

export const CustomerContext = createContext();

function CustomerProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalValue, setTotalValue] = useState(0);

  const updateTotalValue = () => {
    const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    setTotalValue(total.toFixed(2).toString().replace('.', ','));
    console.log(total);
  };

  const providerData = useMemo(() => (
    {
      cart,
      setCart,
      products,
      setProducts,
      totalValue,
    }), [products, cart]);

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

  useEffect(() => {
    updateTotalValue();
  }, [cart]);

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
