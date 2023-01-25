import { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/app.context';

function Total(props) {
  const { buttonEnable } = props;
  const navigate = useNavigate();

  const total = products && products.map((product) => product.price * product.quantity)
    .reduce((acc, cur) => acc + cur, 0).toFixed(2).replace('.', ',');

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

TotalAmount.propTypes = {
  buttonEnable: PropTypes.bool,
}.isrequired;

export default Total;
