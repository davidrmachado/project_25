import React from 'react';
import Navbar from '../components/Navbar';
import ShoppingCart from '../components/ShoppingCart';

export default function Checkout() {
  return (
    <main>
      <Navbar />
      <h2>Finalizar Pedido</h2>
      <ShoppingCart />
      <h2>Detalhes e Endereço para Entrega</h2>
      <form>
        <label htmlFor="seller">
          P. Vendedora Responsável
          <select id="seller" data-testid="customer_checkout__select-seller">
            <option value="teste">fulana</option>
          </select>
        </label>

        <label htmlFor="address">
          Endereço
          <input
            type="text"
            id="address"
            data-testid="customer_checkout__input-address"
          />
        </label>
        <label htmlFor="address-number">
          Número
          <input
            type="number"
            id="address-number"
            data-testid="customer_checkout__input-address-number"
          />
        </label>
      </form>
      <button type="button" data-testid="customer_checkout__button-submit-order">
        Finalizar pedido
      </button>
    </main>
  );
}
