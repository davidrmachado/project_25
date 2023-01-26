import React, { useContext, useState } from 'react';

import Navbar from '../components/Navbar';
import ShoppingCart from '../components/ShoppingCart';

import api from '../utils/apiURL';
import { CustomerContext } from '../context/CustomerContext';

export default function Checkout() {
  const [nameSeller, setNameSeller] = useState('fulana');
  const [deliveryAddress, setDeliveryAddress] = useState('');
  const [deliveryNumber, setDeliveryNumber] = useState('');
  const { cart } = useContext(CustomerContext);

  const finishOrder = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const { token } = user;

    const orderData = {
      deliveryAddress,
      deliveryNumber,
      nameSeller,
    };

    const id = await api.post('/customers/orders', {});
  };

  return (
    <main>
      <Navbar />
      <h2>Finalizar Pedido</h2>
      <ShoppingCart />
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select
            id="seller"
            data-testid="customer_checkout__select-seller"
            value={ nameSeller }
            onChange={ (e) => setNameSeller(e.target.value) }
          >
            <option value="fulano">fulana</option>
            <option value="ciclano">ciclano</option>
            <option value="beltrano">beltrano</option>
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
