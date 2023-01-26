import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CustomerContext } from '../context/CustomerContext';

function Total() {
  const navigate = useHistory();
  const { products } = useContext(CustomerContext);

  const total = products && products.map((product) => product.price * product.quantity)
    .reduce((acc, cur) => acc + cur, 0).toFixed(2).replace('.', ',');
  const buttonEnable = false;

  console.log(total);

  return (
    buttonEnable
      ? (
        <div>
          <button
            type="button"
            data-testid="customer_products__button-cart"
            onClick={ () => { navigate('/customer/checkout'); } }
            disabled={ total === (0).toFixed(2).replace('.', ',') }
          >
            Meu Carrinho: R$
            <p data-testid="customer_products__checkout-bottom-value">
              {`${total || 0}`}
            </p>
          </button>
        </div>
      )
      : (
        <div data-testid="customer_checkout__element-order-total-price">
          <p>
            {`Total: ${total}`}
          </p>
        </div>
      )
  );
}

/* TotalAmount.propTypes = {
  buttonEnable: PropTypes.bool,
}.isrequired; */

export default Total;
