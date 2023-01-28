import React, { useContext, useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import Navbar from '../../components/Navbar';
import ShoppingCart from '../../components/ShoppingCart';

import api from '../../utils/apiURL';
import { CustomerContext } from '../../context/CustomerContext';

export default function Checkout() {
  const [selectedSeller, setSelectedSeller] = useState(0);
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const [sellers, setSellers] = useState([]);
  const { cart } = useContext(CustomerContext);
  const navigate = useHistory();

  const finishOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { token } = user;

    const orderData = {
      totalPrice: cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0),
      deliveryAddress,
      deliveryNumber,
      sellerId: selectedSeller,
      products: cart,
    };

    console.log('fiz a compra, aqui estão os produtos:', orderData);

    try {
      const response = await api.post('/sale', orderData, {
        headers: {
          Authorization: token,
        },
      });

      navigate.push(`/customer/orders/${response.data.message}`);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getSellers = async () => {
      const response = await api.get('/sale/sellers');
      setSellers(response.data);
      setSelectedSeller(response.data[0].id);
    };
    getSellers();
  }, []);

  return (
    <main>
      <Navbar />
      <h2>Finalizar Pedido</h2>
      <ShoppingCart
        products={ cart }
        buttonEnabled
        prefix="customer_checkout"
      />
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            value={ selectedSeller }
            onChange={ (e) => setSelectedSeller(e.target.value) }
          >
            { sellers.map((seller, index) => (
              <option key={ index } value={ seller.id }>{ seller.name }</option>
            )) }
          </select>
        </label>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
            value={ deliveryAddress }
            onChange={ (e) => setDeliveryAddress(e.target.value) }
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="number"
            id="address-number"
            data-testid="customer_checkout__input-address-number"
            value={ deliveryNumber }
            onChange={ (e) => setDeliveryNumber(e.target.value) }
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ finishOrder }
      >
        Finalizar pedido
      </button>
    </main>
  );
}
