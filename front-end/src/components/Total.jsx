import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

function Total() {
  const navigate = useHistory();
  const { cart } = useContext(CustomerContext);

  const total = cart && cart.map((product) => product.price * product.quantity)
    .reduce((acc, cur) => acc + cur, 0).toFixed(2).replace('.', ',');

  return (
    <div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => navigate.push('/customer/checkout') }
        disabled={ !cart.length > 0 }
      >
        Meu Carrinho: R$
        <p data-testid="customer_products__checkout-bottom-value">
          {`${total || 0}`}
        </p>
      </button>
    </div>
  );
}

export default Total;
