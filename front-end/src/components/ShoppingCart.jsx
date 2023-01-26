import React, { useContext } from 'react';
import { CustomerContext } from '../context/CustomerContext';

export default function ShoppingCart() {
  const { cart, setCart } = useContext(CustomerContext);

  const fixNumberFormat = (number) => number.toFixed(2).toString().replace('.', ',');

  const totalValue = () => {
    const total = cart.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    return fixNumberFormat(total);
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const itemNumber = 'customer_checkout__element-order-table-item-number';
  const unitPrice = 'customer_checkout__element-order-table-unit-price';
  const subTotal = 'customer_checkout__element-order-table-sub-total';

  return (
    <section>
      <h2> Meu Pedido </h2>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor unitário</th>
            <th>Sub-total</th>
            <th>Remover item</th>
          </tr>
        </thead>
        <tbody>
          { cart.map((product, index) => (
            <tr key={ product.id }>
              <td
                data-testid={ `${itemNumber}-${index}` }
              >
                {index + 1}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-name-${index}` }
              >
                {product.name}
              </td>

              <td
                data-testid={ `customer_checkout__element-order-table-quantity-${index}` }
              >
                {product.quantity}
              </td>

              <td
                data-testid={ `${unitPrice}-${index}` }
              >
                {fixNumberFormat(Number(product.price))}
              </td>

              <td
                data-testid={ `${subTotal}-${index}` }
              >
                {fixNumberFormat(Number(product.price * product.quantity))}
              </td>

              <td>
                <button
                  type="button"
                  id="deleteBtn"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                  onClick={ removeFromCart }
                >
                  Remover
                </button>
              </td>
            </tr>
          )) }
        </tbody>
      </table>
      <div
        data-testid="customer_checkout__element-order-total-price"
      >
        { `Total: ${totalValue()}` }
      </div>
    </section>
  );
}
