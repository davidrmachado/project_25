import { useContext } from 'react';
import PropTypes from 'prop-types';
import { CustomerContext } from '../context/CustomerContext';
import trash from '../images/trash_icon.png';

export default function ShoppingCart({ products = [], buttonEnabled = false, prefix }) {
  const { setCart } = useContext(CustomerContext);
  const fixNumberFormat = (number) => number.toFixed(2).toString().replace('.', ',');

  const totalValue = () => {
    let total = 0;
    if (buttonEnabled) {
      total = products.reduce((acc, curr) => acc + curr.quantity * curr.price, 0);
    } else {
      total = products.reduce((acc, curr) => acc + curr.SaleProduct.quantity
      * Number(curr.price), 0);
    }
    return fixNumberFormat(total);
  };

  const removeFromCart = (id) => {
    const newCart = products.filter((item) => item.id !== id);
    setCart(newCart);
  };

  return (
    <section>
      <div id="cart_list">

        { products.map((product, index) => (
          <div key={ `produto_${index}` } id="item_card">
            <div className="img_shop_cart_container">
              <img src={ product.url_image } alt={ `imagem de  ${product.name}` } />
            </div>
            <div className="product_info">
              <div className="item_info">
                <p className="item_title">{ product.name }</p>
              </div>
              <div className="item_info">
                <p className="item_price">
                  {product.quantity}
                  { ' x R$ '}
                  {fixNumberFormat(Number(product.price))}
                </p>
              </div>
              <div className="item_info">
                { buttonEnabled ? (
                  <p className="item_total">
                    { 'Total R$ ' }
                    {fixNumberFormat(Number(product.price * product.quantity))}
                  </p>
                ) : (
                  fixNumberFormat(Number(product.price * product.SaleProduct.quantity))
                ) }
              </div>
            </div>
            { buttonEnabled ? (
              <button
                className="remove_iten_btn"
                type="button"
                id="deleteBtn"
                data-testid={
                  `customer_checkout__element-order-table-remove-${index}`
                }
                onClick={ () => removeFromCart(product.id) }
              >
                <img src={ trash } alt="trash icon" />
              </button>
            ) : <>.</> }
          </div>
        ))}
      </div>

      <div
        className="total_container"
        data-testid={ `${prefix}__element-order-total-price` }
      >
        { `Total: R$ ${totalValue()}` }
      </div>
    </section>
  );
}

ShoppingCart.propTypes = {
  products: PropTypes.array,
  buttonEnabled: PropTypes.bool,
  prefix: PropTypes.string,
}.isRequired;
