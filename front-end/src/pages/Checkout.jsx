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
      <section>
        <form>
          {/* Formulario de endereço de entrega */}
        </form>
      </section>
    </main>
  );
}
